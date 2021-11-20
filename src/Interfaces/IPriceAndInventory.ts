import { AxiosResponse } from "axios";

interface PriceAndInventory {
  barcode: string;
  quantity: number;
  salePrice: number;
  listPrice: number;
}

interface PriceAndInventoryRequest {
  items: PriceAndInventory[];
}

interface PriceAndInventoryResult {
  batchRequestId: string;
}

interface PriceAndInventoryResponse extends AxiosResponse {
  data: PriceAndInventoryResult;
}

export {
  PriceAndInventoryRequest,
  PriceAndInventoryResponse,
  PriceAndInventoryResult,
};
