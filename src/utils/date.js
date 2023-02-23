import moment from 'moment';

export function formatDate(date) {
  const options = { weekday: 'long' };
  return `${date.toLocaleDateString('en-US')}, ${date.toLocaleDateString('en-US', options)}`
}

export const getDuration = (startDate, endDate, unit = 'days') => {
  const start = moment(startDate)
  const end = moment(endDate)
  return end.diff(start, unit);
}

