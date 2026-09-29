import { ViewTransition } from "react";

/**
 * Templates remount on navigation, so the page content enters and exits
 * through the browser's View Transitions API. Header stays anchored
 * (see `site-header` in globals.css); reduced motion disables it.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
