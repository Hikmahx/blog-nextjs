"use client";
import React from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

// Create the store instance the first time this renders
const store: AppStore = makeStore();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
