import { Component, OnInit } from '@angular/core';
import { GetEmployeeListService } from '../services/get-employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  totalList: object [];
  blockID: string[] = ['A','B','C','D','E','F','G','H'];

  constructor(private _getEmployeeListService: GetEmployeeListService) { }

  ngOnInit() {
    this._getEmployeeListService.getEmpList().subscribe(data => {
      this.totalList = data;
    });
  }

}
