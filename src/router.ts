import type { RouteDefinition } from "svelte-spa-router";
import Home from "./pages/Home.svelte";
import Sub from "./pages/Sub.svelte";

const routes: RouteDefinition = {
  '/': Home,
  '/sub': Sub
}

export default routes
