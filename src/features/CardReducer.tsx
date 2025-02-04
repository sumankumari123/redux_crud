import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";



interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface CardState {
  loading: boolean;
  error: string | boolean;
  productList: todo[];  
}

const initialState: CardState = {
  loading: true,
  error: false,
  productList: [],
};

// Create async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", // Action name
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      return response.data; // Return the data on success
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
);

const CardReducer = createSlice({
  name: "cardData",
  initialState,
  reducers: {
    // updateSelectCategory: (state, action: PayloadAction<string>) => {
    //   state.selectCategory = action.payload;
    // },
    // updateAddToCardData: (state, action: PayloadAction<Product>) => {
    //   state.getAddToCardData.push(action.payload);
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Action creators are generated for each case reducer function
export const {  } =
  CardReducer.actions;

export default CardReducer.reducer;
