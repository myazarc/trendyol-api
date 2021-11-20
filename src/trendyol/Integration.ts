import axios from "axios";
import { OrderRequest, OrderResponse, OrderResult } from "../Interfaces/IOrder";
import { ShipmentProviderResponse } from "../Interfaces/IShipmentProvider";
import {
  BrandByNameResponse,
  BrandRequest,
  BrandResponse,
} from "../Interfaces/IBrand";
import { CategoryResponse } from "../Interfaces/ICategory";
import { CategoryAttributeResponse } from "../Interfaces/ICategoryAttribute";
import { ProductResponse, ProductRequest } from "../Interfaces/IProduct";
import { BatchRequestResultResponse } from "../Interfaces/IBatchRequestResult";
import {
  PriceAndInventoryResponse,
  PriceAndInventoryRequest,
} from "../Interfaces/IPriceAndInventory";
import {
  FilterProductRequest,
  FilterProductResponse,
} from "../Interfaces/IFilterProduct";
import {
  UpdateProductRequest,
  UpdateProductResponse,
} from "../Interfaces/IUpdateProduct";

class Trendyol {
  public END_POINT = "https://api.trendyol.com/sapigw/";
  private _;
  constructor(
    private API_KEY: string,
    private API_SECRET: string,
    private STORE_ID: string
  ) {
    this._ = axios.create({
      headers: {
        "User-Agent": `${this.STORE_ID} - SelfIntegration`,
      },
      auth: {
        username: this.API_KEY,
        password: this.API_SECRET,
      },
      baseURL: this.END_POINT,
    });
  }

  getOrders(params: OrderRequest = {}): Promise<OrderResponse> {
    return this._.get(this.getOrderServiceUrl(), {
      params,
    });
  }

  async getOrderWithAllPages(): Promise<OrderResponse[]> {
    const orderRes: OrderResponse = await this.getOrders();
    const orders: OrderResult = orderRes.data;
    if (orders.totalPages < 1) {
      return Promise.resolve([orderRes]);
    }

    const promisesAll = Promise.all(
      [...Array(orders.totalPages).keys()].map((pageNo) => {
        if (pageNo == 0) {
          return Promise.resolve(orderRes);
        }
        return this.getOrders({ page: pageNo });
      })
    );

    return promisesAll;
  }

  getShipmentProviders(): Promise<ShipmentProviderResponse> {
    return this._.get(this.getShipmetProviderServiceUrl());
  }

  getBrands(params: BrandRequest = {}): Promise<BrandResponse> {
    return this._.get(this.getBrandServiceUrl(), {
      params,
    });
  }

  getBrandsByName(brandName: string): Promise<BrandByNameResponse> {
    return this._.get(this.getBrandServiceByNameUrl(brandName));
  }

  getCategories(): Promise<CategoryResponse> {
    return this._.get(this.getCategoryServiceUrl());
  }

  getCategoryAttributes(
    categoryId: number | string
  ): Promise<CategoryAttributeResponse> {
    return this._.get(this.getCategoryAttributeServiceUrl(categoryId));
  }

  createProduct(payload: ProductRequest): Promise<ProductResponse> {
    return this._.post(this.getCreateProductServiceUrl(), payload);
  }

  updatePriceAndInventory(
    payload: PriceAndInventoryRequest
  ): Promise<PriceAndInventoryResponse> {
    return this._.post(this.getUpdatePriceAndInventoryServiceUrl(), payload);
  }

  updateProduct(payload: UpdateProductRequest): Promise<UpdateProductResponse> {
    return this._.put(this.getUpdateProductServiceUrl(), payload);
  }

  getBatchRequestResult(
    batchRequestId: string
  ): Promise<BatchRequestResultResponse> {
    return this._.get(this.getBatchRequestResultServiceUrl(batchRequestId));
  }

  getFilterProduct(
    params: FilterProductRequest = {}
  ): Promise<FilterProductResponse> {
    return this._.get(this.getFilterProductServiceUrl(), { params });
  }

  private getOrderServiceUrl(): string {
    return `suppliers/${this.STORE_ID}/orders`;
  }

  private getShipmetProviderServiceUrl(): string {
    return `shipment-providers`;
  }

  private getBrandServiceUrl(): string {
    return `brands`;
  }

  private getBrandServiceByNameUrl(brandName: string): string {
    return `brands/by-name?name=${brandName}`;
  }

  private getCategoryServiceUrl(): string {
    return `product-categories`;
  }

  private getCategoryAttributeServiceUrl(categoryId: string | number): string {
    return `product-categories/${categoryId}/attributes`;
  }

  private getCreateProductServiceUrl(): string {
    return `suppliers/${this.STORE_ID}/v2/products`;
  }

  private getBatchRequestResultServiceUrl(batchRequestId: string): string {
    return `suppliers/${this.STORE_ID}/products/batch-requests/${batchRequestId}`;
  }

  private getFilterProductServiceUrl(): string {
    return `suppliers/${this.STORE_ID}/products`;
  }

  private getUpdatePriceAndInventoryServiceUrl(): string {
    return `suppliers/${this.STORE_ID}/products/price-and-inventory`;
  }

  private getUpdateProductServiceUrl(): string {
    return `suppliers/${this.STORE_ID}/v2/products`;
  }
}

export default Trendyol;
