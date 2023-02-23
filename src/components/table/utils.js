import moment from 'moment';
import { CURRENCY_SYMBOLS } from '~/configs/currencySymbols';
import { AMOUNT_DISPLAY_FORMAT_1, DATE_DISPLAY_FORMAT_1, DATE_DISPLAY_FORMAT_4 } from '~/configs/format';
import { getData } from '~/services/storage';
import { getLocaleDecimalValue } from '~/utils/formatter';

export const renderDateTime = (value) => {
  return moment(value).format(DATE_DISPLAY_FORMAT_4)
}

export const renderDate = (value, format) => {
  return moment(value).format(format || DATE_DISPLAY_FORMAT_1)
}

export const renderAmount = (text, formatVariant = AMOUNT_DISPLAY_FORMAT_1, locale = getData('agent_country')) => {
  const localeValue = getLocaleDecimalValue(text)
  return text !== undefined ? formatVariant === AMOUNT_DISPLAY_FORMAT_1 ? `${CURRENCY_SYMBOLS[locale]} ${localeValue}` : `${localeValue} ${CURRENCY_SYMBOLS[locale]} ` : ''
}