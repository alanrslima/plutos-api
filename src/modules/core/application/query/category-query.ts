export interface CategoryQuery {
  list(params: CategoryQueryListParams): Promise<CategoryQueryListResponse>;
}

export type CategoryQueryListParams = {
  userId: string;
};

export type CategoryQueryListResponse = {
  id: string;
  name: string;
};
