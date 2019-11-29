export interface ContentTypeElementsInterface {
  elementType: string;
  fieldLabel?: string;
  label: string;
  key?: string;
  fieldType?: string;
  helpText?: string;
  minimumValues?: number;
  placeholder?: {
    show: boolean,
    text: string
  };
  typeRef?: {
    id: string
  };
}
