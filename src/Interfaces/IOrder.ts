import { AxiosResponse } from "axios";

interface Address {
  id: number;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  cityCode?: string | number;
  district: string;
  districtId?: string | number;
  postalCode: string;
  countryCode: string;
  fullName: string;
  fullAddress: string;
  company?: string;
}

interface DiscountDetail {
  lineItemPrice: number;
  lineItemDiscount: number;
}

interface Line {
  quantity: number;
  salesCampaignId: number;
  productSize: string;
  merchantSku: string;
  productName: string;
  productCode: number;
  merchantId: number;
  amount: number;
  discount: number;
  price: number;
  discountDetails: DiscountDetail[];
  currencyCode: string;
  productColor: string;
  id: number;
  sku: string;
  vatBaseAmount: number;
  barcode: string;
  orderLineItemStatusName: string;
}

interface PackageHistory {
  createdDate: number;
  status: string;
}

interface Content {
  shipmentAddress: Address;
  orderNumber: string;
  grossAmount: number;
  totalDiscount: number;
  totalPrice: number;
  taxNumber: string | null;
  invoiceAddress: Address;
  customerFirstName: string;
  customerEmail: string;
  customerId: number;
  customerLastName: string;
  id: number;
  cargoTrackingNumber?: number | string | null;
  cargoTrackingLink?: string | null;
  cargoSenderNumber?: string | null;
  cargoProviderName?: string | null;
  lines: Line[];
  orderDate: number;
  tcIdentityNumber: string;
  currencyCode: string;
  packageHistories: PackageHistory[];
  shipmentPackageStatus: string;
  estimatedDeliveryStartDate: number;
  estimatedDeliveryEndDate: number;
  deliveryAddressType: string;
  agreedDeliveryDate: number;
}

interface OrderResult {
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  content: Content[];
}

interface OrderResponse extends AxiosResponse {
  data: OrderResult;
}

enum OrderStatus {
  CREATED = "Created",
  PICKING = "Picking",
  INVOICED = "Invoiced",
  SHIPPED = "Shipped",
  CANCELLED = "Cancelled",
  DELIVERED = "Delivered",
  UNDELIVERED = "UnDelivered",
  RETURNED = "Returned",
  REPACK = "Repack",
  UNPACKED = "UnPacked",
  UNSUPPLIED = "UnSupplied",
}

enum OrderByField {
  PackageLastModifiedDate = "PackageLastModifiedDate",
}

enum OrderByDirection {
  ASC = "ASC",
  DESC = "DESC",
}

interface OrderRequest {
  startDate?: number;
  endDate?: number;
  page?: number;
  size?: number;
  supplierId?: string | number;
  orderNumber?: string;
  status?: OrderStatus;
  orderByField?: OrderByField;
  orderByDirection?: OrderByDirection;
  shipmentPackageIds?: string | number;
}

export {
  Address,
  DiscountDetail,
  Line,
  PackageHistory,
  Content,
  OrderResult,
  OrderResponse,
  OrderStatus,
  OrderByField,
  OrderByDirection,
  OrderRequest,
};
