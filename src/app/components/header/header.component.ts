import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  url= "https://www.virtuwell.com/assets/images/virtuwell-logo.svg"
}
