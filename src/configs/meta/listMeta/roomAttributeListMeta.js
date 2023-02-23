import SelectRoom from '~/components/hotelDetails/SelectRoom';
import PopOver from '~/components/popOver/PopOver';
import { renderDateTime } from '~/components/table/utils';
import { PERMISSIONS } from '~/configs/permissions';
import { formatToTitleCase } from '~/utils/string';

const roomAttributeListMeta = () => {
  return {
    columns: [
      {
        Header: 'Boards',
        accessor: 'MealBasisCode',
        Cell: ({ value }) => <span> {formatToTitleCase(value)}</span>
      },
      {
        Header: 'Cancellation Policy',
        accessor: 'NonRefundable',
        Cell: (props) => {
          return props.row.original.NonRefundable ? 'No' : (
            <>
              Yes
              <PopOver>
                {props.row.original.CancellationTerms.map((item, index) => {
                  return (<div className="d-flex" key={index}>
                    <div className="text-center question">
                      <p className="">?</p>
                    </div>
                    <div className="conditions">
                      <ul>
                        <li>Free cancellation until {renderDateTime(item.StartDate)}</li>
                        <li>
                          You will be charged {props.row.original.CurrencyCode} {item.Amount} if you cancel from {renderDateTime(item.StartDate)} till {renderDateTime(item.EndDate)}
                        </li>
                        <li>
                          If you cancel after {renderDateTime(item.EndDate)} the full price of
                          reservation will be charged
                        </li>
                      </ul>
                    </div>
                  </div>)
                })}
              </PopOver>
            </>
          )
        },
      },
      {
        Header: 'Price',
        Cell: (props) => {
          return (
            <>
              {props.row.original.TotalCost} {props.row.original.CurrencyCode}
            </>
          );
        },
      },
      {
        Header: 'Occupants',
        accessor: 'occupants',
        Cell: (props) => {
          return (
            <>
              <>{props.row.original.occupants.adults}{' + '} {props.row.original.occupants.children.length + props.row.original.occupants.infant} {' (Room '}{props.row.original.RoomID}{')'}</>
            </>
          )
        },
      },
      {
        Header: '',
        accessor: 'actions',
        options: [(defaultValues, hideActions, batchSelection) =>
          <SelectRoom
            key="selectButton" onClose={hideActions}
            defaultValues={defaultValues}
            permissions={[PERMISSIONS.BOOKING_MANAGEMENT_HOTEL_BOOK]}
            selectedRooms={batchSelection?.selectedItems}
            setSelectedRooms={batchSelection?.setSelectedItems}
            disabled={
              (batchSelection?.selectedItems || [])
                .filter((i) => i.RoomID === defaultValues.RoomID)
                .find((y) => y.RoomBookingToken !== defaultValues.RoomBookingToken)
                ? true
                : false
            }
            text={!!(batchSelection?.selectedItems || []).find(
              (i) => i.RoomBookingToken === defaultValues.RoomBookingToken
            )
              ? 'Deselect'
              : 'Select'}
            className={`${!!(batchSelection?.selectedItems || []).find(
              (i) => i.RoomBookingToken === defaultValues.RoomBookingToken
            )
              ? 'deselect'
              : 'select'} ${!!(batchSelection?.selectedItems || []).find(
                (i) => i.RoomID === defaultValues.RoomID
              )
                ? 'disabled'
                : ''}`}
          />,
        ],
      },
    ],
  }
}
export default roomAttributeListMeta;


