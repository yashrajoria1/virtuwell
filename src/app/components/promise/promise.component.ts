import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  url =
    'https://www.virtuwell.com/assets/images/inside-virtuwell/our-promise-people@2x.webp';
  url1 =
    'https://www.virtuwell.com/assets/images/inside-virtuwell/our-promise-experience@2x.webp';
  url2 =
    'https://www.virtuwell.com/assets/images/inside-virtuwell/our-promise-health@2x.webp';
  url3 =
    'https://www.virtuwell.com/assets/images/inside-virtuwell/our-promise-stewardship@2x.webp';
}
