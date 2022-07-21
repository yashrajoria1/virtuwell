import { Injectable } from '@angular/core';
import { ContentstackService } from '../modules/contentstack/contentstack.service';
import * as Utils from '@contentstack/utils';
@Injectable({ providedIn: 'root' })
export class ContentstackQueryService {
  constructor(private cs: ContentstackService) {}
  renderOption = {
    ['span']: (node: Utils.Node, next: Utils.Next) => {
      return next(node.children);
    },
  };

  onEntryChange = this.cs.stack().livePreview;

  getEntry(
    contentTypeUid: string,
    references = [],
    jsonRtePath = []
  ): Promise<any> {
    return this.cs
      .stack()
      .contentstack.ContentType(contentTypeUid)
      .Query()
      .includeReference(references)
      .toJSON()
      .find()
      .then(
        (entry: Utils.EntryEmbedable) => {
          jsonRtePath.length > 0 &&
            Utils.jsonToHTML({
              entry,
              paths: jsonRtePath,
              renderOption: this.renderOption,
            });
          return entry;
        },
        (err: Error) => {
          console.error(err, 'err');
        }
      );
  }

  getPageComponents(url: string): Promise<IPageComponents[]> {
    return this.getEntryWithQuery('full_page', { key: 'url', value: url }).then(
      (entry) => {
        try {
          const pageReferences = entry[0][0].page_components[0].page.reference;
          const result = [];
          for (const reference of pageReferences) {
            const entryUid = reference.uid;
            const contentType = reference['_content_type_uid'];
            result.push(
              this.getEntryWithContent(contentType, entryUid).then((props) => ({
                props,
                contentType,
              }))
            );
          }
          return Promise.all(result);
        } catch (error) {
          throw `Not able to find the path for page references ${error}`;
        }
      }
    );
  }

  getEntryWithContent(
    contentTypeUid: string,
    entryId: string
  ): Promise<AllComponentProps> {
    return this.cs
      .stack()
      .contentstack.ContentType(contentTypeUid)
      .Entry(entryId)
      .toJSON()
      .fetch()
      .then(
        (entry: Utils.EntryEmbedable) => {
          return entry;
        },
        (err: Error) => {
          console.error(err, 'err');
        }
      );
  }

  getEntryWithQuery(
    contentTypeUid: string,
    { key, value }: { key: string; value: string },
    references: string[] = [],
    jsonRtePath: string[] = []
  ): Promise<any> {
    return this.cs
      .stack()
      .contentstack.ContentType(contentTypeUid)
      .Query()
      .where(key, value)
      .includeReference(references)
      .toJSON()
      .find()
      .then(
        (entry: Utils.EntryEmbedable) => {
          jsonRtePath.length > 0 &&
            Utils.jsonToHTML({
              entry,
              paths: jsonRtePath,
              renderOption: this.renderOption,
            });
          return entry;
        },
        (err: Error) => {
          console.error(err, 'err');
        }
      );
  }
}
