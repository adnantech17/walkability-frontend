import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';

const bannerFields = [
  {
    className: 'col-12 pb-3 pe-5 d-inline-block',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.TEXT,
    key: 'title',
    labelText: 'Title',
    rules: { required: true },
    placeholder: 'Enter Banner Title',
  },
  {
    className: 'col-12 pb-3',
    variant: inputVariants.PLAIN,
    inputType: inputTypes.FILE,
    key: 'image',
    labelText: 'Banner image :',
  },
];

export default bannerFields;