export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  const hash = href.split("#")[1];
  if (!hash) return;

  const target = document.getElementById(hash);
  if (target) {
    e.preventDefault();

    const headerOffset = 80;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });

    window.history.pushState(null, "", `#${hash}`);
  }
};
