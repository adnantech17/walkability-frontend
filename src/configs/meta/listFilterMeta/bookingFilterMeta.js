import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { getBookingAutoSuggest } from '~/services/api/queries/booking';

export const bookingFilterMeta = [
  {

    className: 'issue_block col-xxl-3 col-xl-4',
    variant: inputVariants.PLAIN_SM,
    inputType: inputTypes.SELECT,
    search: true,
    key: 'search_text',
    labelText: 'Booking Number/ Guest Name',
    placeholder: 'Booking Number/ Guest Name',
    lookupQuery: getBookingAutoSuggest,
  },

  {
    className: 'issue_block col-xxl-3 col-xl-4',
    variant: inputVariants.PLAIN_SM,
    inputType: inputTypes.DATE_RANGE,
    key: 'check_in_out',
    labelText: 'Check In / Out Date',
  },
  {
    className: 'issue_block col-xxl-3 col-xl-4',
    variant: inputVariants.PLAIN_SM,
    inputType: inputTypes.DATE_RANGE,
    key: 'issue_from_to',
    labelText: 'Issue Date From / To',
  },
  {
    className: 'issue_block col-xxl-3 col-xl-4',
    key: 'status',
    // placeholder: 'Select a status',
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
