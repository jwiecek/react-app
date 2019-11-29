export interface ItemMainImageInterface {
  'leadImage': {
    'mode': string;
    'profiles': [
      string
      ];
    'renditions': {
      'lead': {
        'source': string;
        'width': number;
        'height': number;
        'transform': {
          'scale': number;
          'crop': {
            'x': number;
            'y': number;
            'width': number;
            'height': number
          }
        };
        'url': string
      };
      'card': {
        'source': string;
        'width': number;
        'height': number;
        'transform': {
          'scale': number;
          'crop': {
            'x': number;
            'y': 37;
            'width': number;
            'height': number
          }
        };
        'url': string
      };
      'default': {
        'width': number;
        'source': string;
        'height': number;
        'url': string
      }
    };
    'asset': {
      'fileName': string;
      'altText': string;
      'fileSize': number;
      'width': number;
      'mediaType': string;
      'id': string;
      'resourceUri': string;
      'height': number
    };
    'elementType': string;
    'url': string
  };
  'leadImageCaption': {
    'elementType': string;
    'value': string
  };
  'leadImageCredit': {
    'elementType': string;
    'value': string
  };
}
