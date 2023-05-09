import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume-bulid';
  post='';
  mobileNumber=''
  Email=''
  Websitelink=''
  paresntName:any[] =[]
  pDeatails:any[]=[]
  RDeatails:any[]=[]
  MDeatails:any[]=[]
  AddName(){
    console.log(this.post);
    this.paresntName.push(this.post)
  }
  AddUser(){
    console.log(this.mobileNumber)
    this.pDeatails.push(this.mobileNumber);
  }
  AddUser1(){
    console.log(this.Email)
    this.RDeatails.push(this.Email);
  }
  AddUser2(){
    console.log(this.Websitelink)
    this.MDeatails.push(this.Websitelink);
  }
  

}
