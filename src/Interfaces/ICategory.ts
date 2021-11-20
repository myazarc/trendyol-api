import { AxiosResponse } from "axios";

interface Category {
  id: number;
  name: string;
  parentId: number;
  subCategories: Category[];
}

interface CategoryResult {
  categories: Category[];
}

interface CategoryResponse extends AxiosResponse {
  data: CategoryResult;
}

export { CategoryResult, CategoryResponse, Category };
