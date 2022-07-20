import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  open_div = false;
  nav_contents_div = document.getElementById('nav_contents_1');
  menu = document.getElementById('hambug');
  menu_bars = document.getElementsByClassName(
    'bar'
  ) as HTMLCollectionOf<HTMLElement>;
  url = 'https://www.virtuwell.com/assets/images/virtuwell-logo.svg';

  @HostListener('window:resize', []) updateUrl() {
    if (window.innerWidth >= 1024) {
      this.url = 'https://www.virtuwell.com/assets/images/virtuwell-logo.svg';
    } else {
      this.url =
        'https://www.virtuwell.com/assets/images/virtuwell-logo-mobile.svg';
    }
  }
  myFunction() {
    this.nav_contents_div = document.getElementById('nav_contents_1');

    if (this.open_div == false) {
      this.open_div = true;
      if (this.nav_contents_div) {
        this.nav_contents_div.style.display = 'flex';
        this.nav_contents_div.style.position = 'fixed';
        this.menu = document.getElementById('hambug');
        for (var i = 0; i < this.menu_bars.length; i++) {
          this.menu_bars[i].style.backgroundColor = 'white';
        }
        this.menu_bars[0].style.transform = 'rotate(45deg)';
        this.menu_bars[0].style.width = '50%';
        this.menu_bars[0].style.left = '3px';
        this.menu_bars[0].style.top = '5px';
        this.menu_bars[1].style.transform = 'rotate(-45deg)';
        this.menu_bars[1].style.width = '50%';
        this.menu_bars[1].style.left = 'calc(50% - 3px)';
        this.menu_bars[1].style.top = '5px';
        this.menu_bars[2].style.left = '-50%';
        this.menu_bars[2].style.backgroundColor = 'white';
        this.menu_bars[2].style.opacity = '0';
        this.menu_bars[3].style.left = '100%';
        this.menu_bars[3].style.backgroundColor = 'white';
        this.menu_bars[3].style.opacity = '0';
        this.menu_bars[4].style.transform = 'rotate(-45deg)';
        this.menu_bars[4].style.width = '50%';
        this.menu_bars[4].style.left = '3px';
        this.menu_bars[4].style.top = '13px';
        this.menu_bars[5].style.transform = 'rotate(45deg)';
        this.menu_bars[5].style.width = '50%';
        this.menu_bars[5].style.left = 'calc(50% - 3px)';
        this.menu_bars[5].style.top = '13px';
        if (this.menu) this.menu.style.backgroundColor = '#954fba';
      }
    } else {
      this.open_div = false;
      if (this.nav_contents_div) {
        this.nav_contents_div.style.display = 'none';
      }
      for (var i = 0; i < this.menu_bars.length; i++) {
        this.menu_bars[i].style.backgroundColor = '#954fba';
      }
      this.menu_bars[0].style.transform = 'rotate(0deg)';
      this.menu_bars[0].style.width = '13px';
      this.menu_bars[0].style.left = '0px';
      this.menu_bars[0].style.top = '0px';
      this.menu_bars[1].style.transform = 'rotate(0deg)';
      this.menu_bars[1].style.width = '7.54px';
      this.menu_bars[1].style.left = '50%';
      this.menu_bars[1].style.top = '0px';
      this.menu_bars[2].style.left = '0%';
      this.menu_bars[2].style.opacity = '1';
      // menu_bars[2].style.backgroundColor = "white";
      this.menu_bars[3].style.left = '50%';
      this.menu_bars[3].style.opacity = '1';
      // menu_bars[3].style.backgroundColor = "white";
      this.menu_bars[4].style.transform = 'rotate(0deg)';
      this.menu_bars[4].style.left = '0px';
      this.menu_bars[4].style.top = '16px';
      this.menu_bars[5].style.transform = 'rotate(0deg)';
      this.menu_bars[5].style.width = '2.6px';
      this.menu_bars[5].style.left = '50%';
      this.menu_bars[5].style.top = '16px';
      if (this.menu) this.menu.style.backgroundColor = 'white';
    }
  }
}
