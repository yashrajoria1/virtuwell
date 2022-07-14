import { Component, OnInit } from '@angular/core';
interface Business {
  header:string
  para:string
  image:string
}
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent implements OnInit {
  businesses:Business[]=[
    {
      header:"Network Provider",
      para:"Virtuwell is a 24/7 telemedicine provider, not a software vendor, and can be offered alongside other telemedicine solutions. When included as an in-network benefit, Virtuwell reduces costs for health plans and members with every visit.",
      image:"https://www.virtuwell.com/assets/images/inside-virtuwell/business_network.svg"
  },
    {
      header:"Implementation",
      para:"It's easy to add Virtuwell to your network - use the same process you use for any other provider. You decide the benefit, and Virtuwell fits in any plan design, including HSAs. And claims processing is easy with standard CPT codes.",
      image:"https://www.virtuwell.com/assets/images/inside-virtuwell/business_implementation.svg"
  },
    {
      header:"Costs",
      para:"The cost of a Virtuwell visit is $59, never more. There's no PEPM fee and no cost if Virtuwell can't treat. And there's no hidden fees for health plans or employers - no administration cost, no licensing cost and no set-up cost. It's not too good to be true, it's just the way healthcare should be: simple.",
      image:"https://www.virtuwell.com/assets/images/inside-virtuwell/business_cost.svg"
  },
]
  constructor() {}

  ngOnInit(): void {}
}
