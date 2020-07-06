export const formatDate = (text) => {
  const date = new Date(text);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return dateTimeFormat.formatToParts(date);
};
