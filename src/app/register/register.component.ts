import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { ManageusersService } from '../manageusers.service';
 //import {  ipcRenderer } from 'electron';
 //var ipcRenderer = require('electron');
@Component({
  selector: 'app-list',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  users = {
    name : '',
    email : '',
    phone : '',
    age : '',
    password : '',
    confirmpassword : ''
  };
  

  constructor(private router : Router, private userservice: ManageusersService) { }
    
  ngOnInit() {
    
  }
   
  closeregistration(){
     //ipcRenderer.send('close-reg-window');
  }
  nav(){
    this.router.navigate(['/details']);
   }

   openlogincomp(){
     this.router.navigate(['/login']);
   }


   OnRegisteration(){
     if(((this.users.name!=null) && (this.users.name!=undefined) && (this.users.name!="")) && ((this.users.email!=null) && (this.users.email!=undefined) && (this.users.email!="")) && ((this.users.password!=null) && (this.users.password!=undefined) && (this.users.password!=""))){
     if(this.users.password == this.users.confirmpassword){
      this.userservice.setusers(this.users);
      this.users = {
        name : '',
        email : '',
        phone : '',
        age : '',
        password : '',
        confirmpassword : ''
      };
       this.router.navigate(['/login']);
      // console.log( this.users);
      // localStorage.setItem("allusersfromstore", JSON.stringify(this.users));
     }
     else{
      //localStorage.clear();
      alert('Password does not Match!');
     }
    }
    else{
      alert('Please Fill All The Details');
    }
     
   }
}
