import { Component, OnInit } from '@angular/core';
interface History {
  header: string;
  para: string;
  image: string;
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  histories: History[] = [
    {
      header: '1957',
      para: "In the 1900s Americans weren't receiving medical care because it was too expensive, which led to more serious, but preventable, illnesses. Four men saw the problem and created the first fully prepaid health plan - which wasn't even legal at the time. This group became HealthPartners, the first consumer-governed integrated health insurance and medical care organization.",
      image:
        'https://www.virtuwell.com/assets/images/inside-virtuwell/history-1957@2x.webp',
    },
    {
      header: '2010',
      para: "With the same innovative spirit, two seasoned healthcare leaders, Kevin Palattao and Kris Johnson, started exploring an idea they originally called Health Harmony. Coincidentally, both the children of family physicians, they set out to improve the doctor's visit. On October 25th, 2010 virtuwell.com, the online clinic treating 30 common conditions was introduced to Minnesota residents.",
      image:'https://www.virtuwell.com/assets/images/inside-virtuwell/history-2010@2x.webp'
    },
    {
      header: 'Today',
      para: 'The list of services has doubled and licensing has expanded to 13 states. And Virtuwell is still changing the way people see, experience and think about healthcare, proving simple is better.',
      image:
        'https://www.virtuwell.com/assets/images/inside-virtuwell/history-today@2x.webp',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  url_1957 = '';
  url_2010 =
    'https://www.virtuwell.com/assets/images/inside-virtuwell/history-2010@2x.webp';
  url_today =
    'https://www.virtuwell.com/assets/images/inside-virtuwell/history-today@2x.webp';
}
