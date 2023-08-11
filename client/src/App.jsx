import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
