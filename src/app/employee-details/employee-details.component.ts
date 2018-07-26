import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GetEmployeeListService } from '../services/get-employee-list.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
   userDetails: any = {};

   details: any;


   constructor(
               // private modalRef: BsModalRef,
  //             private _getEmployeeListService: GetEmployeeListService,
              private location: Location
            ) { }

  ngOnInit() {
    this.getDataFromLocalStorage();
  }

  goBack(): void {
    this.location.back();
  }

  private getDataFromLocalStorage(): void {
    let rawData: any =  localStorage.getItem('currentUser');
    let parsedData: any = JSON.parse(rawData);

    this.details = parsedData;
    debugger;
  }

}
