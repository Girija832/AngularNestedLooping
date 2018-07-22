import { Component, OnInit } from '@angular/core';
import { GetEmployeeListService } from '../services/get-employee-list.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  modalRef: BsModalRef;

  totalList: object [];
  blockID: string[] = ['A','B','C','D','E','F','G','H'];

  constructor(
              private _getEmployeeListService: GetEmployeeListService,
              private modalService: BsModalService
            ) { }

  ngOnInit() {
    this._getEmployeeListService.getEmpList().subscribe(data => {
      this.totalList = data;
    });
  }

  openModal(details: any) {
    this.modalRef = this.modalService.show(EmployeeDetailsComponent);

    this.modalRef.content.userDetails = details;

  }
}
