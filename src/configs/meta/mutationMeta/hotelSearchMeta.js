import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { getDestinations } from '~/services/api/queries/destination';
import { getNationality } from '~/services/api/queries/nationality';

const renderLabel = ({ rooms = [] }) => {
  let totalRooms = rooms?.length || 0;
  let totalGuests = 0;
  if (rooms.length > 0) {
    rooms.map(el => {
      el?.adults && (totalGuests = totalGuests + el.adults);
      el?.children?.length > 0 && (totalGuests = totalGuests + el.children.length);
    });
  }

  if (totalGuests === 0) {
    return 'Select Guests'
  } else {
    return `
      ${totalRooms} ${totalRooms < 2 ? 'room' : 'rooms'}
      for
      ${totalGuests} ${totalGuests < 2 ? 'guest' : 'guests'}`;
  }
}

const hotelSearchMeta = [
  {
    className: 'col-4 d-inline-block',
    variant: inputVariants.PLAIN_SQUARE,
    inputType: inputTypes.SELECT,
    search: true,
    isGrouped: true,
    key: 'search_text',
    labelText: 'Destination',
    placeholder: 'Type country, city, hotel name',
    lookupQuery: getDestinations,
    rules: { required: true },
  },
  {
    className: 'col-3 d-inline-block',
    variant: inputVariants.PLAIN_SQUARE,
    inputType: inputTypes.DATE_RANGE,
    key: 'travel_time',
    labelText: 'Pick date',
    rules: { required: true },
  },
  {
    key: 'rooms_select',
    className: 'col-3 d-inline-block popover-list',
    labelText: 'Room',
    variant: inputVariants.PLAIN_SQUARE,
    inputType: inputTypes.POPOVER_LIST_INPUT,
    renderExtraText: ({ value }) => (
      renderLabel(value)
    ),
    meta:
      [
        {
          className: 'row list-input',
          inputType: inputTypes.LIST_INPUT,
          key: 'rooms',
          defaultValue: [{ adults: 0, children: [] }],
          labelPrefix: 'Room',
          addButtonText: '+ Add a room',
          listItemClassName: 'row',
          fields: [
            {
              className: 'col-6',
              variant: inputVariants.PLAIN,
              inputType: inputTypes.COUNTER,
              key: 'adults',
              readOnly: true,
              defaultValue: 0,
              rules: { required: true, min: 1, max: 15 },
              labelText: 'Adults  (18 years +)',
            },
            {
              className: 'col-6 p-0',
              inputType: inputTypes.LIST_INPUT,
              key: 'children',
              labelText: 'Children',
              addButtonText: '+ Add',
              listItemClassName: 'col-6 d-inline-block child-input-form',
              limit: 8,
              fields: [
                {
                  className: 'children-selection-dropdown d-inline-block col-12 pe-2',
                  inputType: inputTypes.SELECT,
                  variant: inputVariants.PLAIN_SM,
                  placeholder: 'Age',
                  rules: { required: true },
                  autoOpen: true,
                  options: [
                    ...new Array(17).fill().map((e, idx) => {
                      return { value: idx, label: idx + ' years' }
                    })
                  ],
                  key: 'age',
                  rowLabelPrefix: 'Child',
                },
              ]
            }
          ]
        },
      ]
  },
  {
    className: 'col-2 d-inline-block',
    variant: inputVariants.PLAIN_SQUARE,
    inputType: inputTypes.SELECT,
    search: true,
    key: 'nationality',
    labelText: 'Nationality',
    placeholder: 'Type nationality',
    lookupQuery: getNationality,
    rules: { required: true },
  },
];

export default hotelSearchMeta;
