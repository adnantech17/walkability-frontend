export const getLocaleDecimalValue = (val, digit = 2, locale) => {
  if (typeof val !== 'number') return val
  return val.toLocaleString(locale, {
    minimumFractionDigits: digit,
    maximumFractionDigits: digit
  })
}
