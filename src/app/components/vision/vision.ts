import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.html',
  styleUrls: ['./vision.css'],
})
export class VisionComponent implements OnInit {
  @Input() content: IVisionComponent = {
    main_title: '',
    sub_heading: '',
    description: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
