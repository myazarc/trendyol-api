import { AxiosResponse } from "axios";

interface ShipmentProviderResult {
  id: number;
  name: string;
  code: string;
  taxNumber: string;
}

interface ShipmentProviderResponse extends AxiosResponse {
  data: ShipmentProviderResult[];
}

export { ShipmentProviderResult, ShipmentProviderResponse };
