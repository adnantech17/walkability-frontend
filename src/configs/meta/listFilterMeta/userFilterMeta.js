import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';

export const userFilterMeta = [
  {
    className: 'issue_block col-lg-8',
    key: 'search',
    labelText: 'Search',
    placeholder: 'Search by First name, Last name, Email, Phone etc…',
    inputType: inputTypes.TEXT,
    variant: inputVariants.PLAIN_SM,
  },
];
