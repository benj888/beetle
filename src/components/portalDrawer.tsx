import dynamic from "next/dynamic";
export const PortalDraw = dynamic(
  () =>
    import(
      /* webpackChunkName: "DrawerContent" */
      "./drawersContent"
    ),
  { ssr: false }
); 