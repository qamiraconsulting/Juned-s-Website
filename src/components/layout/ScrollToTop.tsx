import { useEffect } from "react";
import { useLocation } from "react-router";

// Scrolls to top on route change, unless the navigation targets an in-page
// hash (e.g. "/#how-it-works"), in which case the browser's native anchor
// scroll takes over instead.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
