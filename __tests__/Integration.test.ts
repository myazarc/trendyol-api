import { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import { BatchRequestResultResult } from "../src/Interfaces/IBatchRequestResult";
import { Brand, BrandResult } from "../src/Interfaces/IBrand";
import { CategoryResult } from "../src/Interfaces/ICategory";
import { CategoryAttributeResult } from "../src/Interfaces/ICategoryAttribute";
import { FilterProductResult } from "../src/Interfaces/IFilterProduct";
import { OrderResult } from "../src/Interfaces/IOrder";
import {
  PriceAndInventoryRequest,
  PriceAndInventoryResult,
} from "../src/Interfaces/IPriceAndInventory";
import { ProductRequest, ProductResult } from "../src/Interfaces/IProduct";
import { ShipmentProviderResult } from "../src/Interfaces/IShipmentProvider";
import {
  UpdateProductRequest,
  UpdateProductResult,
} from "../src/Interfaces/IUpdateProduct";

import Trendyol from "../src/trendyol/Integration";

const API_KEY = "apiKey";
const API_SECRET = "apiSecret";
const STORE_ID = "storeId";

const ty = new Trendyol(API_KEY, API_SECRET, STORE_ID);

describe("General", () => {
  it("should be END_POINT correctly", () => {
    expect(ty.END_POINT).toEqual("https://api.trendyol.com/sapigw/");
  });
});

describe("Service", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(ty.getHttpClient());
  });

  afterEach(() => {
    mock.reset();
  });

  const expectGlobal = (result: AxiosResponse) => {
    expect(result.config.auth.username).toEqual(API_KEY);
    expect(result.config.auth.password).toEqual(API_SECRET);
    expect(result.config.baseURL).toEqual("https://api.trendyol.com/sapigw/");
    expect(result.config.headers).toEqual(
      expect.objectContaining({
        "User-Agent": `${STORE_ID} - SelfIntegration`,
      })
    );
  };

  describe("getShipmentProviders", () => {
    it("should be return shipment providers list", async () => {
      const providerList: ShipmentProviderResult[] = [
        {
          id: 6,
          name: "Horoz Kargo Marketplace",
          code: "HOROZMP",
          taxNumber: "4630097122",
        },
        {
          id: 7,
          name: "Aras Kargo Marketplace",
          code: "ARASMP",
          taxNumber: "0720039666",
        },
        {
          id: 8,
          name: "Yurtiçi Kargo International",
          code: "INTYK",
          taxNumber: "9860008925",
        },
      ];

      mock.onGet(`${ty.END_POINT}shipment-providers`).reply(200, providerList);

      const result = await ty.getShipmentProviders();

      expect(mock.history.get[0].url).toEqual(`shipment-providers`);
      expect(result.data).toEqual(providerList);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("getOrders", () => {
    it("should be return order list", async () => {
      const orderList: OrderResult = {
        page: 0,
        size: 50,
        totalPages: 1,
        totalElements: 1,
        content: [
          {
            shipmentAddress: {
              id: 80844024,
              firstName: "Trendyol",
              lastName: "Müşterisi",
              address1:
                "DSM Grup Danışmanlık İletişim ve Satış Tic. A.Ş. Büyükdere Caddesi Noramin İş Merkezi No:237 Kat:B1 ",
              address2: "",
              city: " İstanbul ",
              cityCode: 34,
              district: "Şişli",
              districtId: 54,
              postalCode: "10D",
              countryCode: "TR",
              fullName: "Trendyol Müşterisi",
              fullAddress:
                "DSM Grup Danışmanlık İletişim ve Satış Tic. A.Ş. Büyükdere Caddesi Noramin İş Merkezi No:237 Kat:B1   Şişli  İstanbul ",
            },
            orderNumber: "80869231",
            grossAmount: 51.98,
            totalDiscount: 25.99,
            totalPrice: 25.99,
            taxNumber: null,
            invoiceAddress: {
              id: 80844023,
              firstName: "Trendyol",
              lastName: "Müşterisi",
              company: "",
              address1:
                "DSM Grup Danışmanlık İletişim ve Satış Tic. A.Ş. Büyükdere Caddesi Noramin İş Merkezi No:237 Kat:B1 ",
              address2: "",
              city: " İstanbul ",
              district: "Şişli",
              postalCode: "",
              countryCode: "TR",
              fullName: "Trendyol Müşterisi",
              fullAddress:
                "DSM Grup Danışmanlık İletişim ve Satış Tic. A.Ş. Büyükdere Caddesi Noramin İş Merkezi No:237 Kat:B1   Şişli  İstanbul ",
            },
            customerFirstName: "Trendyol",
            customerEmail: "pf+dym24k@trendyolmail.com",
            customerId: 99993706,
            customerLastName: "Müşterisi",
            id: 11650604,
            cargoTrackingNumber: 7340447182689,
            cargoTrackingLink: "https://kargotakip.trendyol.com/?token=",
            cargoSenderNumber: "733861966410",
            cargoProviderName: "Trendyol Express Marketplace",
            lines: [
              {
                quantity: 2,
                salesCampaignId: 201642,
                productSize: " one size",
                merchantSku: "merchantSku",
                productName:
                  "Kadın Çivit Mavi Geometrik Desenli Kapaklı Clutch sku1234 sku1234, one size",
                productCode: 11954798,
                merchantId: 201,
                amount: 25.99,
                discount: 13.0,
                price: 12.99,
                discountDetails: [
                  {
                    lineItemPrice: 13.0,
                    lineItemDiscount: 12.99,
                  },
                  {
                    lineItemPrice: 12.99,
                    lineItemDiscount: 13.0,
                  },
                ],
                currencyCode: "TRY",
                productColor: "No Color",
                id: 56040534,
                sku: "sku1234",
                vatBaseAmount: 8,
                barcode: "barcode1234",
                orderLineItemStatusName: "ReturnAccepted",
              },
            ],
            orderDate: 1542801149863,
            tcIdentityNumber: "99999999999",
            currencyCode: "TRY",
            packageHistories: [
              {
                createdDate: 1542790350607,
                status: "Created",
              },
              {
                createdDate: 1543789070462,
                status: "Delivered",
              },
              {
                createdDate: 1542872460911,
                status: "Picking",
              },
              {
                createdDate: 1542953901874,
                status: "Shipped",
              },
            ],
            shipmentPackageStatus: "ReturnAccepted",
            estimatedDeliveryStartDate: 1614605119000,
            estimatedDeliveryEndDate: 1615296319000,
            deliveryAddressType: "Shipment",
            agreedDeliveryDate: 1622549842955, // Ürüne belirtilmiş termin süresinden hesaplanan siparişin gecikmeden kargoya verilmesi için son gündür.
          },
        ],
      };

      mock
        .onGet(`${ty.END_POINT}suppliers/${STORE_ID}/orders`)
        .reply(200, orderList);

      const result = await ty.getOrders();

      expect(mock.history.get[0].url).toEqual(`suppliers/${STORE_ID}/orders`);
      expect(result.data).toEqual(orderList);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("getBrands", () => {
    it("should be return brands list", async () => {
      const brandResult: BrandResult = {
        brands: [
          {
            id: 10,
            name: "TrendyolMilla",
          },
          {
            id: 19,
            name: "Milla",
          },
          {
            id: 20,
            name: "Trendyol",
          },
        ],
      };

      mock.onGet(`${ty.END_POINT}brands`).reply(200, brandResult);

      const result = await ty.getBrands();

      expect(mock.history.get[0].url).toEqual(`brands`);
      expect(result.data).toEqual(brandResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("getBrandsByName", () => {
    it("should be return brands list", async () => {
      const brandName = "trend";
      const brandResult: Brand[] = [
        {
          id: 10,
          name: "TrendyolMilla",
        },
        {
          id: 20,
          name: "Trendyol",
        },
      ];

      mock
        .onGet(`${ty.END_POINT}brands/by-name?name=${brandName}`)
        .reply(200, brandResult);

      const result = await ty.getBrandsByName(brandName);

      expect(mock.history.get[0].url).toEqual(
        `brands/by-name?name=${brandName}`
      );
      expect(result.data).toEqual(brandResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("getCategories", () => {
    it("should be return categories list", async () => {
      const categoryResult: CategoryResult = {
        categories: [
          {
            id: 1162,
            name: "Atkı & Bere & Eldiven",
            parentId: 368,
            subCategories: [
              {
                id: 382,
                name: "Atkı",
                parentId: 1162,
                subCategories: [],
              },
              {
                id: 1805,
                name: "Atkı & Bere & Eldiven Set",
                parentId: 1162,
                subCategories: [],
              },
              {
                id: 384,
                name: "Bere",
                parentId: 1162,
                subCategories: [],
              },
              {
                id: 962,
                name: "Boyunluk",
                parentId: 1162,
                subCategories: [],
              },
              {
                id: 385,
                name: "Eldiven",
                parentId: 1162,
                subCategories: [],
              },
            ],
          },
        ],
      };

      mock
        .onGet(`${ty.END_POINT}product-categories`)
        .reply(200, categoryResult);

      const result = await ty.getCategories();

      expect(mock.history.get[0].url).toEqual(`product-categories`);
      expect(result.data).toEqual(categoryResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("getCategoryAttributes", () => {
    it("should be return category attributes list", async () => {
      const categoryId = 1;
      const categoryAttributeResult: CategoryAttributeResult = {
        id: 1,
        name: "Test",
        displayName: "Test",
        categoryAttributes: [],
      };

      mock
        .onGet(`${ty.END_POINT}product-categories/${categoryId}/attributes`)
        .reply(200, categoryAttributeResult);

      const result = await ty.getCategoryAttributes(categoryId);

      expect(mock.history.get[0].url).toEqual(
        `product-categories/${categoryId}/attributes`
      );
      expect(result.data).toEqual(categoryAttributeResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("getBatchRequestResult", () => {
    it("should be return batch request result", async () => {
      const batchRequestId = "5631d1a1-ec81-496f-9407-99876554433-1529820717";
      const getBatchRequestResult: BatchRequestResultResult = {
        batchRequestId: "5631d1a1-ec81-496f-9407-99876554433-1529820717",
        items: [
          {
            requestItem: {
              product: {
                brand: "Apple",
                barcode: "99999999999",
                title: "Apple iPhone X 64 GB Cep Telefonu",
                description: "Apple iPhone X 64 GB Cep Telefonu",
                categoryName: "LG Cep Telefonlar",
                listPrice: 5899.0,
                salePrice: 5649.0,
                currencyType: "TRY",
                vatRate: 18,
                cargoCompany: "YK",
                quantity: 4,
                stockCode: "IphoneX",
                images: [
                  {
                    url: "https://img-trendyol.mncdn.com/mnresize/1200/1800//Assets/ProductImages/oa/54/1886736/2/0190198457226_1_org_zoom.jpg",
                  },
                  {
                    url: "https://img-trendyol.mncdn.com/mnresize/1200/1800//Assets/ProductImages/oa/54/1886736/2/0190198457226_1_org_zoom.jpg",
                  },
                  {
                    url: "https://img-trendyol.mncdn.com/mnresize/1200/1800//Assets/ProductImages/oa/54/1886736/2/0190198457226_1_org_zoom.jpg",
                  },
                ],
                productMainId: "IphoneX",
                gender: "M",
                dimensionalWeight: 0,
                attributes: [],
                variantAttributes: [
                  {
                    attributeName: "Renk",
                    attributeValue: "Siyah",
                  },
                ],
              },
            },
            status: "SUCCESS",
            failureReasons: [],
          },
        ],
        status: "COMPLETED",
        creationDate: 1529734317090,
        lastModification: 1529734653403,
        sourceType: "API",
        itemCount: 1,
      };

      mock
        .onGet(
          `${ty.END_POINT}suppliers/${STORE_ID}/products/batch-requests/${batchRequestId}`
        )
        .reply(200, getBatchRequestResult);

      const result = await ty.getBatchRequestResult(batchRequestId);

      expect(mock.history.get[0].url).toEqual(
        `suppliers/${STORE_ID}/products/batch-requests/${batchRequestId}`
      );
      expect(result.data).toEqual(getBatchRequestResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("getFilterProduct", () => {
    it("should be return product list", async () => {
      const productResult: FilterProductResult = {
        totalElements: 42078,
        totalPages: 4208,
        page: 0,
        size: 10,
        content: [
          {
            id: "1f8eef1aeef3cbfaad2f0ec207945d9f",
            approved: true,
            archived: false,
            productCode: 75984627,
            batchRequestId: "e86bd939-c950-4320-9fd2-1a05dd2d68b1-1593766542",
            supplierId: 123456,
            createDateTime: 1593680142092,
            lastUpdateDate: 1594382124384,
            gender: "Kadın / Kız",
            brand: "Trendyol Test",
            barcode: "Trendyol123456",
            title: "Elbise",
            categoryName: "Giyim",
            productMainId: "test1234",
            description: "İpek Kumaş",
            stockUnitType: "Adet",
            quantity: 0,
            listPrice: 100.0,
            salePrice: 0.0,
            vatRate: 8,
            dimensionalWeight: 3.0,
            stockCode: "test1234",
            images: [
              {
                url: "https://marketplace-supplier-media-center.oss-eu-central-1.aliyuncs.com/prod/119084/ccbc6ef9-9dad-4741-b865-641c2cfae2f6/IMG7783222200.jpg?x-oss-process=style/resized",
              },
              {
                url: "https://marketplace-supplier-media-center.oss-eu-central-1.aliyuncs.com/prod/119084/9510d859-c136-4d3e-9216-fc404a291c88/IMG7783111200.jpg?x-oss-process=style/resized",
              },
            ],
            attributes: [
              {
                attributeId: 338,
                attributeName: "Beden",
                attributeValueId: 5639,
                attributeValue: "36-38",
              },
              {
                attributeId: 343,
                attributeName: "Cinsiyet",
                attributeValueId: 4295,
                attributeValue: "Kadın / Kız",
              },
              {
                attributeId: 346,
                attributeName: "Yaş Grubu",
              },
              {
                attributeId: 12,
                attributeName: "Kol Tipi",
              },
              {
                attributeId: 22,
                attributeName: "Yaka",
              },
              {
                attributeId: 250,
                attributeName: "Stil",
              },
              {
                attributeId: 33,
                attributeName: "Desen",
              },
              {
                attributeId: 179,
                attributeName: "Kalıp",
              },
              {
                attributeId: 101,
                attributeName: "Cep",
              },
              {
                attributeId: 2,
                attributeName: "Boy / Ölçü",
              },
              {
                attributeId: 200,
                attributeName: "Kumaş Tipi",
              },
              {
                attributeId: 102,
                attributeName: "Cep Tipi",
              },
              {
                attributeId: 47,
                attributeName: "Renk",
                attributeValue: "Pudra",
              },
            ],
            platformListingId: "562eb0814ce594daec4de8c5b8cfa1a7",
            stockId: "3f8ed81f39b3da035f84bb2dc9be7c74",
            hasActiveCampaign: false,
            locked: true,
            productContentId: 42733553,
            pimCategoryId: 2731,
            brandId: 969490,
            version: 2,
            color: "Pudra",
            size: "36-38",
            lockedByUnSuppliedReason: false,
            onsale: false,
          },
        ],
      };

      mock
        .onGet(`${ty.END_POINT}suppliers/${STORE_ID}/products`)
        .reply(200, productResult);

      const result = await ty.getFilterProduct();

      expect(mock.history.get[0].url).toEqual(`suppliers/${STORE_ID}/products`);
      expect(result.data).toEqual(productResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("createProduct", () => {
    it("should be create product and return batchId", async () => {
      const batchRequestId = "5631d1a1-ec81-496f-9407-99876554433-1529820717";

      const productResult: ProductResult = {
        batchRequestId,
      };

      mock
        .onPost(`${ty.END_POINT}suppliers/${STORE_ID}/v2/products`)
        .reply(200, productResult);

      const productRequest: ProductRequest = {
        items: [
          {
            barcode: "barkod-1234",
            title: "Bebek Takımı Pamuk",
            productMainId: "1234BT",
            brandId: 1791,
            categoryId: 411,
            quantity: 100,
            stockCode: "STK-345",
            dimensionalWeight: 2,
            description: "Ürün açıklama bilgisi",
            currencyType: "TRY",
            listPrice: 250.99,
            salePrice: 120.99,
            vatRate: 18,
            cargoCompanyId: 10,
            images: [
              {
                url: "https://www.sampleadress/path/folder/image_1.jpg",
              },
            ],
            attributes: [
              {
                attributeId: 338,
                attributeValueId: 6980,
              },
              {
                attributeId: 47,
                customAttributeValue: "PUDRA",
              },
              {
                attributeId: 346,
                attributeValueId: 4290,
              },
            ],
          },
        ],
      };

      const result = await ty.createProduct(productRequest);

      expect(mock.history.post[0].url).toEqual(
        `suppliers/${STORE_ID}/v2/products`
      );
      expect(result.data).toEqual(productResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("updateProduct", () => {
    it("should be update product and return batchId", async () => {
      const batchRequestId = "5631d1a1-ec81-496f-9407-99876554433-1529820717";

      const updateProductResult: UpdateProductResult = {
        batchRequestId,
      };

      mock
        .onPut(`${ty.END_POINT}suppliers/${STORE_ID}/v2/products`)
        .reply(200, updateProductResult);

      const updateProductRequest: UpdateProductRequest = {
        items: [
          {
            barcode: "barkod-1234",
            title: "Bebek Takımı Pamuk",
            productMainId: "1234BT",
            brandId: 1791,
            categoryId: 411,
            stockCode: "STK-123",
            dimensionalWeight: 12,
            description: "Ürün açıklama bilgisi",
            deliveryDuration: 2,
            vatRate: 0,
            images: [
              {
                url: "https://www.sampleadress/path/folder/image_1.jpg",
              },
            ],
            attributes: [
              {
                attributeId: 338,
                attributeValueId: 6980,
              },
              {
                attributeId: 343,
                attributeValueId: 4294,
              },
              {
                attributeId: 47,
                customAttributeValue:
                  "Attribute özelliği(text olarak girebilirsiniz.)",
              },
            ],
            cargoCompanyId: 10,
            shipmentAddressId: 0,
            returningAddressId: 0,
          },
        ],
      };

      const result = await ty.updateProduct(updateProductRequest);

      expect(mock.history.put[0].url).toEqual(
        `suppliers/${STORE_ID}/v2/products`
      );
      expect(result.data).toEqual(updateProductResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });

  describe("updatePriceAndInventory", () => {
    it("should be update product price&inventory and return batchId", async () => {
      const batchRequestId = "5631d1a1-ec81-496f-9407-99876554433-1529820717";

      const updatePriceAndInventoryResult: PriceAndInventoryResult = {
        batchRequestId,
      };

      mock
        .onPost(
          `${ty.END_POINT}suppliers/${STORE_ID}/products/price-and-inventory`
        )
        .reply(200, updatePriceAndInventoryResult);

      const updatePriceAndInventoryRequest: PriceAndInventoryRequest = {
        items: [
          {
            barcode: "8680000000",
            quantity: 100,
            salePrice: 112.85,
            listPrice: 113.85,
          },
        ],
      };

      const result = await ty.updatePriceAndInventory(
        updatePriceAndInventoryRequest
      );

      expect(mock.history.post[0].url).toEqual(
        `suppliers/${STORE_ID}/products/price-and-inventory`
      );
      expect(result.data).toEqual(updatePriceAndInventoryResult);
      expect(result.status).toEqual(200);
      expectGlobal(result);
    });
  });
});
