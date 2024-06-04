"use client";

import { isParentRoute, routes } from "@/routes";

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ["", ...item].join("/");
  const route = routes[path];
  const { children: Component } = route;
  if (!Component || isParentRoute(route)) return null;
  return Component ? <Component /> : null;
};

export default ItemPage;
