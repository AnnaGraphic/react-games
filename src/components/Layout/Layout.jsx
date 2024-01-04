import { Nav } from "../Nav/Nav";
import { Outlet } from "react-router-dom";

export function Layout () {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}