import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GetEmployeeListService } from '../services/get-employee-list.service';
import { Location } from '@angular/common';
import * as jsPDF from 'jspdf';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    @ViewChild('content') content: ElementRef;
    userDetails: any = {};
    details: any;
    
    constructor(
               // private modalRef: BsModalRef,
              // private _getEmployeeListService: GetEmployeeListService,
              private location: Location
            ) { }

    ngOnInit() {
        this.getDataFromLocalStorage();
    }

    private getDataFromLocalStorage(): void {
        let rawData: any =  localStorage.getItem('currentUser');
        let parsedData: any = JSON.parse(rawData);
        this.details = parsedData;
    }

    public downloadPDF() {
        let doc = new jsPDF({
            unit: 'pt',
        });

        let specialElementHandlers = {
            '#editor': function(element, renderer) {
                return true;
            }
        };

        let content = this.content.nativeElement;

        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 180,
            'elementHandlers': specialElementHandlers
        });

        doc.save('sample.pdf');
    }

    goBack(): void {
        this.location.back();
    }

}
