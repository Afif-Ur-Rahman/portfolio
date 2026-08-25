import { format, formatDistanceToNow } from "date-fns";

export const DATE_FORMATS = {
  DATE_FORMAT: "MM-DD-YYYY",
  TIME_FORMAT: "HH:mm",
  MODER_DATE_FORMAT: "yyyy-MM-DD",
  APP_DATE_FORMAT: "MM/DD/YYYY",
  DISPLAY_DATE_FORMAT: "MMM DD, YYYY",
};

export const getRelativeTime = (dateString: string): string => {
  return formatDistanceToNow(new Date(dateString), { addSuffix: true });
};

export const formatDateTime = (dateString: string, fullDate?: boolean) => {
  const date = new Date(dateString);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  const isCurrentYear = date.getFullYear() === now.getFullYear();

  if (isToday && !fullDate) {
    return date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  if (isCurrentYear && !fullDate) {
    return date.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
    });
  }

  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const toDateInputValue = (date: string | Date | undefined | null): string => {
  if (!date) return "";
  return format(new Date(date), "yyyy-MM-dd");
};
