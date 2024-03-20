import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../navigation";

export default function Layout() {
  return (
    <React.Fragment>
      <NavBar />
      <main
        style={{
          minHeight: "calc(100vh - 54px)",
          display: "flex",
          flexDirection: "column"
        }}
      >


        
        <Outlet />
      </main>
    </React.Fragment>
  );
}
