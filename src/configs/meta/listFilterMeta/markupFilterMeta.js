import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { getMarkupApplicableForFilter } from '~/services/api/queries/markup';

export const markupFilterMeta = [
  {
    className: 'issue_block col-4',
    inputType: inputTypes.SELECT,
    variant: inputVariants.PLAIN_SM,
    key: 'name',
    labelText: 'Select Vendor',
    rules: { required: true },
    options: [
      { value: 'ivector', label: 'I-Vector' },
    ],
  },
  {
    className: 'issue_block col-4',
    inputType: inputTypes.SELECT,
    variant: inputVariants.PLAIN_SM,
    key: 'applicable_for',
    rules: { required: true },
    labelText: 'Select Applicable For',
    lookupQuery: getMarkupApplicableForFilter,
  },
];
