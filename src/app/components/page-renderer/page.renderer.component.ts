import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContentstackQueryService } from '../../cs.query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-renderer',
  templateUrl: './page.renderer.component.html',
  styleUrls: [],
})
export class PageRenderComponent implements OnInit, AfterContentInit {
  pageComponents: IPageComponents[] = [];
  constructor(private cs: ContentstackQueryService, private router: Router) {}

  getEntry() {
    this.cs.getPageComponents(this.router.url).then(
      (pageComponents) => {
        this.pageComponents = pageComponents;
      },
      (err) => {
        console.error(err);
        this.router.navigate(['/404'], { replaceUrl: true });
      }
    );
  }

  ngOnInit(): void {
    this.getEntry();
  }

  ngAfterContentInit(): void {
    this.cs.onEntryChange(() => {
      this.getEntry();
    });
  }

  getBannerProps(component: IPageComponents): IBannerComponent {
    return component.props as IBannerComponent;
  }
  getVisionProps(component: IPageComponents): IVisionComponent {
    return component.props as IVisionComponent;
  }
}
