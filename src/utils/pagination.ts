export interface PaginationParams {
  page: number;
  limit: number;
}

export const getPaginationParams = (query: any): PaginationParams => {
  return {
    page: Number(query.page) || 1,
    limit: Number(query.limit) || 10,
  };
};
