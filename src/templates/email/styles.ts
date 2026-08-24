export const BASE_STYLES = {
  background: "#0B1240",
  cardBackground: "#0D1650",
  cardInner: "#131C5C",
  accent: "#DAB025",
  accentDark: "#B8931E",
  textPrimary: "#EDEFFB",
  textSecondary: "#B9BEDD",
  textMuted: "#8087B3",
  divider: "rgba(218,176,37,0.2)",
};

export const sanitize = (value?: string) => value?.replace(/[<>]/g, "") ?? "";
