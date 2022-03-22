import moment from "moment";

export function formatDate(date, format, locale = "ko") {
  const localLocale = moment(date);
  localLocale.locale(locale);
  return localLocale.format(format);
}
