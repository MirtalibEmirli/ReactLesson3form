import React from "react";
import { persist } from "zustand/middleware";
import { create } from "zustand";

export const themeStore = create(
  persist((set) => ({
    theme: "light",
    accesToken: "",
    refreshToken: "",
    toggle: () =>
      set((prevState) => ({
        ...prevState,
        teheme: prevState.theme === "light" ? dark : "light",
      })),
    addAccesToken: (token) =>
      set((prevState) => ({ ...prevState, accesToken: token })),
    addRefreshToken: (token) =>
      set((prevState) => ({ ...prevState, refreshToken: token })),
  }))
);
