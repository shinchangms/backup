interface ListState {
  type: string;
  error: any;
}

export const initialState: ListState = {
  type: "INIT",
  error: null,
}