import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageusersService {
  getlocalstoredata;
  allusers = [];
  constructor() { }

  setusers(user){
    
    if(window.localStorage.length){
      let retrievedData = localStorage.getItem("allusersfromstore");
      let localstoredata1 = JSON.parse(retrievedData);
      // this.allusers = localstoredata1;
      localstoredata1.push(user);
      localStorage.setItem("allusersfromstore", JSON.stringify(localstoredata1));
    }
    else{
      this.allusers.push(user);
      localStorage.setItem("allusersfromstore", JSON.stringify(this.allusers));
    }
    
  }

  getusers(){
    let retrievedData = localStorage.getItem("allusersfromstore");
    this.getlocalstoredata = JSON.parse(retrievedData);
    console.log(this.getlocalstoredata);
    return this.getlocalstoredata;
  }


}
