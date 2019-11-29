import {ItemMainImageInterface} from './item-main-image.interface';

export interface ItemElementsInterface {
  author: {elementType: string, value: string};
  body: {values: string[], elementType: string};
  date: {elementType: string};
  heading: {elementType: string, value: string};
  mainImage?: {
    elementType: string;
    value: ItemMainImageInterface;
    typeRef: { id: string }
  };
}
