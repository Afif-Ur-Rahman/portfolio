export const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  const hash = href.split("#")[1];
  if (!hash) return;

  const target = document.getElementById(hash);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    // keep the URL in sync without a full navigation
    window.history.pushState(null, "", `#${hash}`);
  }
};
