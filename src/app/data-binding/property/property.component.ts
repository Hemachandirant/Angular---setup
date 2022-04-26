import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  // data vaiables
  public username:string = 'johnsmith';
  public age:number = 40;
  public isMarried:boolean = true;
  public isActive:boolean = false;

  public account = {
    id : 1001,
    name : 'John snow',
    balance : 10000,
    email : 'john@gmail.com'
  }

  public companies:string[] = ['Google',"Microsoft",'Meta','Netflix',"wipro",'Dell'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
