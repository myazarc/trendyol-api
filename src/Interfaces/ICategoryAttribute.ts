import { AxiosResponse } from "axios";

interface Attribute {
  id: number;
  name: string;
}
interface AttributeValue {
  id: number;
  name: string;
}

interface CategoryAttribute {
  categoryId: number;
  attribute: Attribute;
  required: boolean;
  allowCustom: boolean;
  varianter: boolean;
  slicer: boolean;
  attributeValues: AttributeValue[];
}

interface CategoryAttributeResult {
  id: number;
  name: string;
  displayName: string;
  categoryAttributes: CategoryAttribute[];
}

interface CategoryAttributeResponse extends AxiosResponse {
  data: CategoryAttributeResult;
}

export {
  CategoryAttributeResult,
  CategoryAttributeResponse,
  CategoryAttribute,
};
