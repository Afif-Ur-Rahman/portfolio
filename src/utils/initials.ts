export const getInitials = (name?: string) => {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  const initials = parts
    .slice(0, 2)
    .map(p => p[0]?.toUpperCase())
    .join("");
  return initials || "?";
};
