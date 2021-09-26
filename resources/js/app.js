require("./bootstrap");

import { App } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import { InertiaProgress } from "@inertiajs/progress";
import { SidebarProvider } from "./Pages/context/SidebarContext";
import { Windmill } from "@windmill/react-ui";

const el = document.getElementById("app");

render(
  <SidebarProvider>
    <Windmill>
      <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={(name) => require(`./Pages/${name}`).default}
      />
    </Windmill>
  </SidebarProvider>,

  el
);

InertiaProgress.init({ color: "#4B5563" });
