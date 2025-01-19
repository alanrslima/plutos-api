export interface AccountQuery {
  list(params: AccountQueryListParams): Promise<AccountQueryListResponse>;
}

export type AccountQueryListParams = {
  userId: string;
};

export type AccountQueryListResponse = {
  id: string;
  name: string;
  initialBalance: number;
  balance: number;
  currency: string;
  createdAt: string;
};
