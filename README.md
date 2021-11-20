# trendyol-api

Js Trendyol Api with Promise and Typescript support.

HttpClient: axios

# install

```bash
npm install trendyol-api --save
```

or

```bash
yarn add trendyol-api
```

# usage

```js
import Trendyol from "trendyol-api";
const ty = new Trendyol("API_KEY", "API_SECRET", "STORE_ID|MAGAZA_ID");

ty.getBrands().then((res) => {
  console.log(res.data);
});
```

```js
const trendyolApi = require("trendyol-api"),
  Trendyol = trendyolApi.Trendyol;
const ty = new Trendyol("API_KEY", "API_SECRET", "STORE_ID|MAGAZA_ID");

ty.getBrands().then((res) => {
  console.log(res.data);
});
```

# all methods

| Method                  | Description                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| createProduct           | Ürün göndermek için kullanılır.                                                                   |
| updatePriceAndInventory | Ürün fiyatı ve stok miktarını güncellemek için kullanılır.                                        |
| updateProduct           | Ürünün fiyat ve stok miktarı bilgisi hariç diğer bilgilerini güncellemek için kullanılır.         |
| getFilterProduct        | Kayıtlı ürünlerinizi listelemek için kullanılır.                                                  |
| getBatchRequestResult   | Ürün servislerinde verilern batchId sorgulaması için kullanılır.                                  |
| getOrders               | Siparişlerinizi almak için kullanılır.                                                            |
| getOrderWithAllPages    | Siparişleriniz birden fazla sayfada yer alıyorsa tamamını tek bir methodda almak için kullanılır. |
| getShipmentProviders    | Kargo Şirketlerini listemek için kullanılır.                                                      |
| getBrands               | Markaları listelemek için kullanılır.                                                             |
| getBrandsByName         | Markaları ismine göre aramak için kullanılır.                                                     |
| getCategories           | Kategorileri listelemek için kullanılır.                                                          |
| getCategoryAttributes   | Kategori-Özellik listesini almak için kullanılır.                                                 |

## Product

```js
    createProduct(payload: ProductRequest): Promise<ProductResponse>;
    updatePriceAndInventory(payload: PriceAndInventoryRequest): Promise<PriceAndInventoryResponse>;
    updateProduct(payload: UpdateProductRequest): Promise<UpdateProductResponse>;
    getFilterProduct(params?: FilterProductRequest): Promise<FilterProductResponse>;
    getBatchRequestResult(batchRequestId: string): Promise<BatchRequestResultResponse>;
```

## Order

```js
    getOrders(params?: OrderRequest): Promise<OrderResponse>;
    getOrderWithAllPages(): Promise<OrderResponse[]>;
```

## Other

```js
    getShipmentProviders(): Promise<ShipmentProviderResponse>;
    getBrands(params?: BrandRequest): Promise<BrandResponse>;
    getBrandsByName(brandName: string): Promise<BrandByNameResponse>;
    getCategoryAttributes(categoryId: number | string): Promise<CategoryAttributeResponse>;
    getCategories(): Promise<CategoryResponse>;
```
