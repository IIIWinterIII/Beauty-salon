import Cart from "./pages/Cart.tsx";
import Home from "./pages/Home.tsx";
import Price from "./pages/Price.tsx";
import Contact from "./pages/Contact.tsx";
import { ComponentType } from "react";

interface Route {
    path: string,
    name: string,
    component: ComponentType,
}

const routes: Route[] = [
  {
    path: "/",
    name: "Главная",
    component: Home,
  },
  {
    path: "/cart",
    name: "Мастера",
    component: Cart,
  },
  {
    path: "/price",
    name: "Цены",
    component: Price,
  },
  {
    path: "/contact",
    name: "Контакты",
    component: Contact,
  },
];

export default routes;
