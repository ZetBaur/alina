import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../model/user.type';

interface IHeaderState {
  pageTitle: string | null;
  user: IUser;
}

const initialState: IHeaderState = {
  pageTitle: null,
  user: {
    name: null,
    image: null,
  },
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setPageTitle(state, action: PayloadAction<string>) {
      console.log('action', action);
      state.pageTitle = action.payload;
    },

    // setUser(state, action: PayloadAction<IUser>) {
    //   state.user.name = action.payload;
    //   state.user.image = action.payload;
    // },
  },
});

export const { setPageTitle } = headerSlice.actions;
export default headerSlice.reducer;
