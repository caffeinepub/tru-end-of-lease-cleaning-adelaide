import { Layout } from "@/components/layout/Layout";
import { AboutPage } from "@/pages/About";
import { ContactPage } from "@/pages/Contact";
import { HomePage } from "@/pages/Home";
import { QuotePage } from "@/pages/Quote";
import {
  Navigate,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { BathroomToiletCleaningPage } from "@/pages/services/BathroomToiletCleaning";
import { BondCleaningPage } from "@/pages/services/BondCleaning";
import { CarpetSteamCleaningPage } from "@/pages/services/CarpetSteamCleaning";
// Service pages
import { EndOfLeaseCleaningPage } from "@/pages/services/EndOfLeaseCleaning";
import { GarageOutdoorCleaningPage } from "@/pages/services/GarageOutdoorCleaning";
import { OvenKitchenCleaningPage } from "@/pages/services/OvenKitchenCleaning";
import { WindowCleaningPage } from "@/pages/services/WindowCleaning";

import { suburbsData } from "@/data/suburbs";
// Suburb pages
import { SuburbPage } from "@/pages/suburbs/SuburbTemplate";

// Root route with layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Main pages
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const quoteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quote",
  component: QuotePage,
});

// Services overview redirect
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: () => <Navigate to="/services/end-of-lease-cleaning" />,
});

// Service pages
const endOfLeaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/end-of-lease-cleaning",
  component: EndOfLeaseCleaningPage,
});

const bondCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bond-cleaning",
  component: BondCleaningPage,
});

const carpetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/carpet-steam-cleaning",
  component: CarpetSteamCleaningPage,
});

const ovenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/oven-kitchen-cleaning",
  component: OvenKitchenCleaningPage,
});

const windowRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/window-cleaning",
  component: WindowCleaningPage,
});

const bathroomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bathroom-toilet-cleaning",
  component: BathroomToiletCleaningPage,
});

const garageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/garage-outdoor-cleaning",
  component: GarageOutdoorCleaningPage,
});

// Suburb pages — one per suburb
const suburbRoutes = suburbsData.map((suburb) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/suburbs/${suburb.slug}`,
    component: () => <SuburbPage suburb={suburb} />,
  }),
);

// Build route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
  quoteRoute,
  servicesRoute,
  endOfLeaseRoute,
  bondCleaningRoute,
  carpetRoute,
  ovenRoute,
  windowRoute,
  bathroomRoute,
  garageRoute,
  ...suburbRoutes,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
