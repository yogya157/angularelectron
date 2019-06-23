import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageusersService } from '../manageusers.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = {
   email: '',
   password: ''
 };

 Logineduser = {};

 localstoredata;

 isloggined: boolean = false;
  constructor(private router : Router, private userservice: ManageusersService ) { }
  
  ngOnInit() {
    console.log('oninit invoked');
    // let retrievedData = localStorage.getItem("allusersfromstore");
    // this.localstoredata = JSON.parse(retrievedData);
    // console.log(this.localstoredata);
    this.localstoredata = this.userservice.getusers();
    console.log(this.localstoredata);
  }


  signin(){
    
    for(let data of this.localstoredata){
      if((data.email == this.user.email) && (data.password == this.user.password)){
        this.Logineduser = data;
        this.isloggined = true;
        console.log(this.Logineduser);
        break;
      }
    }

    if(this.isloggined){
      console.log('user logined');
      console.log(this.Logineduser);
      this.router.navigate(['/userlist']);
    }
    else{
      alert('please check credentials!');
      console.log('User Not Logined');
    }
  }


  OpenRegistrationComp(){
    
   this.router.navigate(['/Registeration']);
  }
}
