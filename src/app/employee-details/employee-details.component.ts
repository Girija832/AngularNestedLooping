import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GetEmployeeListService } from '../services/get-employee-list.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
   userDetails: any = {};


  constructor(private modalRef: BsModalRef,
              private _getEmployeeListService: GetEmployeeListService,
            ) { }

  ngOnInit() {
  }

}
