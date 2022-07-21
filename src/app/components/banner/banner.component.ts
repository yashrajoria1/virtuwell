import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() content: IBannerComponent = {
    bg_color: '',
    main_title: '',
    sub_title: '',
    text_color: '',
    banner_image: {
      url: '',
    },
    call_to_action: {
      href: '',
      title: '',
    },
    seo: {
      meta_description: '',
      meta_keywords: '',
      meta_title: '',
    },
  };

  constructor() {}

  ngOnInit(): void {}

  url = '';
}
