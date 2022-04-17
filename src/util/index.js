import moment from "moment";
import i18n from "@/i18n";

export function formatDate(date, format, locale = "ko") {
  const localLocale = moment(date);
  localLocale.locale(locale);
  return localLocale.format(format);
}

export function translate(key, defaultValue) {
  return i18n.te(key) ? i18n.t(key) : defaultValue;
}
