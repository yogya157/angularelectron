import { Component, OnInit } from '@angular/core';
import { ManageusersService } from '../manageusers.service'; 

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 userlist;
  constructor(private getuser:ManageusersService) { }

  ngOnInit() {
    let allusers = this.getuser.getusers();
    this.userlist = allusers;
    console.log(this.userlist);
  }

}
