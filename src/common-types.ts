export type ResourceResponse = {
  ok: boolean;
  error?: string | null;
  total?: number;
};

export type PaginationParams = {
  page: number;
  size: number;
  sort?: -1 | 1;
  order?: 'asc' | 'desc';
};
