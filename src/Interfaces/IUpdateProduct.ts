import { AxiosResponse } from "axios";
import { Image, VatRate, Attribute } from "./IProduct";

interface UpdateProduct {
  barcode: string;
  title: string;
  productMainId: string;
  brandId: number | string;
  categoryId: number | string;
  stockCode: string;
  dimensionalWeight: number;
  description: string;
  cargoCompanyId: number;
  images: Image[];
  vatRate: VatRate;
  attributes: Attribute[];

  deliveryDuration?: number;
  shipmentAddressId?: number;
  returningAddressId?: number;
}

interface UpdateProductRequest {
  items: UpdateProduct[];
}

interface UpdateProductResult {
  batchRequestId: string;
}

interface UpdateProductResponse extends AxiosResponse {
  data: string;
}

export {
  UpdateProductRequest,
  UpdateProduct,
  Attribute,
  VatRate,
  Image,
  UpdateProductResponse,
  UpdateProductResult,
};
