import { AxiosResponse } from "axios";

interface Image {
  url: string;
}

enum VatRate {
  VAT_0 = 0,
  VAT_1 = 1,
  VAT_8 = 8,
  VAT_18 = 18,
}

interface Attribute {
  attributeId: number;
  attributeValueId?: number | string;
  customAttributeValue?: string | number;
}

interface Product {
  barcode: string;
  title: string;
  productMainId: string;
  brandId: number | string;
  categoryId: number | string;
  quantity: number;
  stockCode: string;
  dimensionalWeight: number;
  description: string;
  currencyType: string;
  listPrice: number;
  salePrice: number;
  cargoCompanyId: number;
  images: Image[];
  vatRate: VatRate;
  attributes: Attribute[];

  deliveryDuration?: number;
  shipmentAddressId?: number;
  returningAddressId?: number;
}

interface ProductRequest {
  items: Product[];
}

interface ProductResult {
  batchRequestId: string;
}

interface ProductResponse extends AxiosResponse {
  data: string;
}

export {
  ProductRequest,
  Product,
  Attribute,
  VatRate,
  Image,
  ProductResponse,
  ProductResult,
};
