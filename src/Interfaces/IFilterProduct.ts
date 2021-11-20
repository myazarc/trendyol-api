import { AxiosResponse } from "axios";

enum DateQueryType {
  CREATED_DATE = "CREATED_DATE",
  LAST_MODIFIED_DATE = "LAST_MODIFIED_DATE",
}
interface FilterProductRequest {
  approved?: boolean;
  barcode?: string;
  startDate?: number;
  endDate?: number;
  page?: number;
  dateQueryType?: DateQueryType;
  size?: number;
  supplierId?: number;
  stockCode?: string;
  archived?: boolean;
  productMainId?: string;
}

interface FilterProductResult {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  //TODO: edit inner item
  content: any[];
}

interface FilterProductResponse extends AxiosResponse {
  data: FilterProductResult;
}

export {
  FilterProductRequest,
  FilterProductResponse,
  FilterProductResult,
  DateQueryType,
};
