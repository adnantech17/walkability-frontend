import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { getBookingAutoSuggestForCountryAgents } from '~/services/api/queries/booking';

export const countryAgentBookingListFilterMeta = [
  {
    className: 'issue_block col-4',
    variant: inputVariants.PLAIN_SM,
    inputType: inputTypes.SELECT,
    search: true,
    key: 'search_text',
    labelText: 'Booking Number/ Guest Name',
    placeholder: 'Booking Number/ Guest Name',
    lookupQuery: getBookingAutoSuggestForCountryAgents,
  },
  {
    className: 'issue_block col-4',
    variant: inputVariants.PLAIN_SM,
    inputType: inputTypes.DATE_RANGE,
    key: 'check_in_out',
    labelText: 'Check In / Out Date',
  },
  {
    className: 'issue_block col-4',
    variant: inputVariants.PLAIN_SM,
    inputType: inputTypes.DATE_RANGE,
    key: 'issue_from_to',
    labelText: 'Issue Date From / To',
  },
  {
    className: 'issue_block col-4',
    key: 'filter_by_date_range',
    labelText: 'Filter By',
    inputType: inputTypes.SELECT,
    variant: inputVariants.PLAIN_SM,
    options: [
      { label: 'Today', value: 'today' },
      { label: 'This Week', value: 'this_week' },
      { label: 'This Month', value: 'this_month' },
    ]
  },
  {
    className: 'issue_block col-4',
    key: 'status',
    labelText: 'Status',
    inputType: inputTypes.SELECT,
    variant: inputVariants.PLAIN_SM,
    options: [
      { value: 'ACTIVE', label: 'Active' },
      { value: 'CANCELED', label: 'Canceled' },
      { value: 'TRAVELLED', label: 'Travelled' },
    ]
  },
];
