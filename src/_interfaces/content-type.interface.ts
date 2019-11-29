import {ContentTypeElementsInterface} from './content-type-element.interface';

export interface ContentTypeInterface {
  'id': string;
  'rev': string;
  'name': string;
  'classification': string;
  'path': string;
  'kind': [
    string
    ];
  'thumbnail': {
    'id': string
  };
  'contentThumbnail': {
    'imageElement': string;
    'source': string
  };
  'description': string;
  'creatorId': string;
  'created': string;
  'lastModifierId': string;
  'lastModified': string;
  'status': string;
  'tags': string[];
  'elements': ContentTypeElementsInterface[];
}
