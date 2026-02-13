import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <TooltipProvider>
      <div className="flex justify-center items-center min-h-[90vh]">
        <Outlet></Outlet>
      </div>
    </TooltipProvider>
  );
}
