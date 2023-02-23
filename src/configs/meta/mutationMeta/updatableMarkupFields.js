import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { markupApplicableLookupQuery } from '~/services/api/queries/markup';

const updatableMarkupFields = [
  {
    className: 'col-12',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'key',
    labelText: 'Select Vendor',
    rules: { required: true, disabled: true },
    options: [
      { value: 'ivector', label: 'I-Vector' },
    ],

  },
  {
    className: 'col-6 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.NUMBER,
    key: 'markup_amount',
    labelText: 'Markup Amount',
    defaultValue: 0.00,
    rules: { required: true },
  },
  {
    className: 'col-6 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.SELECT,
    key: 'markup_type',
    labelText: 'Markup Type',
    rules: { required: true },
    options: [
      { value: 'flat', label: 'Flat' },
      { value: 'percentage', label: 'Percentage' },
    ],
  },
  {
    className: 'col-12 d-inline-block',
    variant: inputVariants.OUTLINED,
    inputType: inputTypes.TEXT,
    key: 'applicable_for',
    labelText: 'Applicable For',
    rules: { required: true, disabled: true },
    lookupQuery: markupApplicableLookupQuery,
    readOnly: true,
  },

]

export default updatableMarkupFields;