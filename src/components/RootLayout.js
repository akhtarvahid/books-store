import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../store/store";

export default function RootLayout() {
  return (
    // Provider - it's HOC which wraps the react application and makes it aware to whole redux state and it provides store to its child level components
    <Provider store={store}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
}
