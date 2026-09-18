import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ColorScheme = "light" | "dark";

const getSystemColorScheme = (): ColorScheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const initialState: { colorScheme: ColorScheme } = {
  colorScheme:
    (localStorage.getItem("colorScheme") as ColorScheme) ??
    getSystemColorScheme(),
};

const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorScheme>) => {
      state.colorScheme = action.payload;
      localStorage.setItem("colorScheme", state.colorScheme);
    },
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;
export const colorSchemeReducer = colorSchemeSlice.reducer;
