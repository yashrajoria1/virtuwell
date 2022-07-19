import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContentstackQueryService } from '../../cs.query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-renderer',
  templateUrl: './page.renderer.component.html',
  styleUrls: [],
})
export class PageRenderComponent implements OnInit, AfterContentInit {
  constructor(private cs: ContentstackQueryService, private router: Router) {}

  getEntry() {
    this.cs
      .getEntryWithQuery('full_page', { key: 'url', value: this.router.url })
      .then(
        (entry) => {
          try {
            const pageReferences =
              entry[0][0].page_components[0].page.reference;
            for (const reference of pageReferences) {
              const uid = reference.uid;
              const contentTypeUid = reference['_content_type_uid'];
              this.cs.getEntry(uid).then(console.log);
              console.log(uid, contentTypeUid);
            }
          } catch (error) {
            console.error('Not able to find the path for page references');
          }
        },
        (err) => {
          console.error(err);
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
}
