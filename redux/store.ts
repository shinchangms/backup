import { configureStore } from '@reduxjs/toolkit';
import UserReducer from "./user/UserSlice";
import ProjectReducer from "./product/ProductSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    project: ProjectReducer,
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;  