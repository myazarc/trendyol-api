import { AxiosResponse } from "axios";

interface Item {
  //TODO: edit inner item
  requestItem: any;
  status: string;
  //TODO: edit inner item
  fauilureReasons: any[];
}

interface BatchRequestResultResult {
  batchRequestId: string;
  items: Item[];
  status: string;
  creationDate: number;
  lastModification: number;
  sourceType: string;
  itemCount: number;
  failedItemCount: number;
  batchRequestType: string;
}

interface BatchRequestResultResponse extends AxiosResponse {
  data: BatchRequestResultResult;
}

export { BatchRequestResultResult, BatchRequestResultResponse };
