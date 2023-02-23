import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';

export const localAgentFilterMeta = [
  {
    className: 'issue_block col-lg-8',
    labelText: 'Search',
    key: 'search',
    placeholder: 'Search by Local Agent name , Agent ID , Email , Phone etc…',
    inputType: inputTypes.TEXT,
    variant: inputVariants.PLAIN_SM
  },
];
