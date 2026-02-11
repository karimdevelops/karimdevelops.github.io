import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <>
      <div className="flex flex-center mheight-80">
        <Outlet></Outlet>
      </div>
    </>
  );
}
