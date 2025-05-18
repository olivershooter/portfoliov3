import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SnackbarProvider } from "notistack";

export const Route = createRootRoute({
	component: () => (
		<>
			<SnackbarProvider
				maxSnack={3}
				autoHideDuration={3000}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			>
				<Outlet />
			</SnackbarProvider>
		</>
	),
});
