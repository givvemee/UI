// depth 가 깊어질 수 있음을 고려
const routePaths = ["/", "/test1", "/test2", "/test2/vanilla", "/test2/react"];
export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};

export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};

export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};
export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: ["/test1", "/test2"],
  },
  "/test1": {
    key: "/test1",
    link: "/test1",
    name: "테스트 1",
    children: null,
  },
  "/test2": {
    key: "/test2",
    link: "/test2/vanilla",
    name: "테스트 2",
    children: ["/test2/vanilla", "/test2/react"],
  },
  "/test2/vanilla": {
    key: "/test2/vanilla",
    link: "/test2/vanilla",
    name: "vanilla",
    children: null,
  },
  "/test2/react": {
    key: "/test2/react",
    link: "/test2/react",
    name: "react",
    children: null,
  },
};

// 부모만 자식을 array 로 가지고 있기 때문에 isArray로 판단
export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);