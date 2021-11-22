import { AxiosResponse } from "axios";

interface DefaultReturningAddress {
  present: boolean;
}

interface SupplierAddress {
  id: number;
  city: string;
  cityCode: number;
  district: string;
  districtId: number;

  fullAddress: string;

  addressType: string;
  country: string;
  postCode: string;
  address: string;
  returningAddress: boolean;
  shipmentAddress: boolean;
  invoiceAddress: boolean;
  isDefault: boolean;
}

interface SuppliersAddressResult {
  supplierAddresses: SupplierAddress[];
  defaultShipmentAddress: SupplierAddress;
  defaultInvoiceAddress: SupplierAddress;
  defaultReturningAddress: DefaultReturningAddress;
}

interface SuppliersAddressResponse extends AxiosResponse {
  data: SuppliersAddressResult;
}

export {
  SuppliersAddressResult,
  SuppliersAddressResponse,
  SupplierAddress,
  DefaultReturningAddress,
};
