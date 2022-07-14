import { Component, OnInit } from '@angular/core';

interface Promise {
  heading:string
  para:string
  url:string
}

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  promises:Promise[]=[
    {
      heading : "People",
      para: "Simplify Healthcare",
      url :'https://www.virtuwell.com/assets/images/inside-virtuwell/our-promise-people@2x.webp',
    },
    {
      heading : "Experience",
      para: "Make it lovable",
      url :'https://www.virtuwell.com/assets/images/inside-virtuwell/our-promise-experience@2x.webp',
    },
    {
      heading : "Health",
      para: "Be safe and effective",
      url :'https://www.virtuwell.com/assets/images/inside-virtuwell/our-promise-health@2x.webp',
    },
    {
      heading : "Stewardship",
      para: "Save time and money",
      url :'https://www.virtuwell.com/assets/images/inside-virtuwell/our-promise-stewardship@2x.webp',
    },
    
  ]
  constructor() {}

  ngOnInit(): void {}

}
