import React from "react";
import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const Layout:React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}