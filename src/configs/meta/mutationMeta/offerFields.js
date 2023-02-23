import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';

const offerFields = [
  {
    className: 'col-12 d-inline-block pe-3',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXT,
    key: 'title',
    labelText: 'Title',
    rules: { required: true },
  },
  {
    className: 'col-12 d-inline-block pe-3',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXTAREA,
    key: 'short_description',
    labelText: 'Short Description',
    placeholder: 'Write short description',
    rules: { required: true },
  },
  {
    className: 'col-12 d-inline-block pe-3',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXTAREA,
    key: 'description',
    labelText: 'Description',
    placeholder: 'Write description',
    rules: { required: true },
  },
  {
    className: 'col-12 d-inline-block pe-3',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.NUMBER,
    key: 'rate',
    labelText: 'Rate',
    rules: { required: true },
  },
  {
    className: 'col-12 d-inline-block pe-3',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.FILE,
    key: 'image',
    labelText: 'Offer image :',
  },
]

export default offerFields;