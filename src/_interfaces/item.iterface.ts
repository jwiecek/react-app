import {ItemElementsInterface} from './item-elements.interface';

export interface ItemInterface {
  'rev': string;
  'thumbnail': {
    'id': string;
    'url': string;
  };
  'keywords': [];
  'kind': [];
  'created': string;
  'creatorId': string;
  'description': string;
  'classification': string;
  'type': string;
  'locale': string;
  'tags': [];
  'selectedLayouts': [
    {
      'layout': {
        'id': string;
      }
    }
    ];
  'elements': ItemElementsInterface;
  'name': string;
  'lastModifierId': string;
  'typeId': string;
  'links': {
    'thumbnail': {
      'href': string;
    };
    'retire': {
      'href': string;
    };
    'draft': {
      'href': string;
    };
    'self': {
      'href': string;
    };
    'type': {
      'href': string;
    }
  };
  'id': string;
  'lastModified': string;
  'systemModified': string;
  'status': string;
}
