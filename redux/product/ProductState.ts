export interface ProductState {
  type: string;
  error: any;
}

export const initialState: ProductState = {
  type: "INIT",
  error: null,
}

