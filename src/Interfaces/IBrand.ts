import { AxiosResponse } from "axios";

interface Brand {
  id: number;
  name: string;
}

interface BrandResult {
  brands: Brand[];
}

interface BrandByNameResponse extends AxiosResponse {
  data: Brand[];
}

interface BrandResponse extends AxiosResponse {
  data: BrandResult;
}

interface BrandRequest {
  page?: number;
  size?: number;
}

export { BrandResult, BrandResponse, Brand, BrandRequest, BrandByNameResponse };
