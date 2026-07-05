import { formatDistanceToNow } from "date-fns";
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const cta = (type, title, url) => {
  switch (type) {
    case "mail":
      return `mailto:?subject=Check%20this%20article%20on%20WebJournal&body=${title}%0A%0A${domain + url}`;
    case "facebook":
      return `http://www.facebook.com/sharer/sharer.php?u=${domain + url}`;
    case "linkedIn":
      return `https://www.linkedin.com/shareArticle?mini=true&url=${domain + url}`;
    default:
      return "/";
  }
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
};

export const textToUrl = (text) => {
  return text.replace(" ", "-").toLowerCase();
};

export const urlToText = (text) => {
  return text.replace("-", " ");
};

export const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const formatDate = (isoDate, options) => {
  const date = new Date(isoDate);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  });
  return formattedDate;
};

export function timeAgo(timestamp) {
  return formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true });
}
