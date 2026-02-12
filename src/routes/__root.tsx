import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <TooltipProvider>
      <div className="flex flex-center mheight-80">
        <Outlet></Outlet>
      </div>
    </TooltipProvider>
  );
}
