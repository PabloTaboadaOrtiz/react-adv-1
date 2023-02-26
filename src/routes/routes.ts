import { lazy, LazyExoticComponent } from "react";
import { LazyPages1, LazyPages2, LazyPages3, NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () => import(/*webpackChunkName:"LazyLayout"*/ "../01-lazyload/layout/LazyLayout")
);
const Lazy2 = lazy(
  () => import(/*webpackChunkName:"LazyPage2"*/ "../01-lazyload/pages/LazyPages2")
);
const Lazy3 = lazy(
  () => import(/*webpackChunkName:"LazyPage3"*/ "../01-lazyload/pages/LazyPages3")
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload",
    Component: LazyLayout,
    name: "LazyLoad",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "no Lazy",
  },
];
