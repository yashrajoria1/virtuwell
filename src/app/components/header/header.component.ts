import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
  
  url= "https://www.virtuwell.com/assets/images/virtuwell-logo.svg";

  @HostListener("window:resize", []) updateUrl() {
    if (window.innerWidth >= 1024) {
      this.url = "https://www.virtuwell.com/assets/images/virtuwell-logo.svg"
    }
    else {
      this.url = "https://www.virtuwell.com/assets/images/virtuwell-logo-mobile.svg"
    }
  }
  
}
