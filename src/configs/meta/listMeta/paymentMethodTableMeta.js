import ModalFormOpener from '~/components/actions/ModalFormOpener';
import paymentMethodFields from '~/configs/meta/mutationMeta/paymentMethodFields';
import { PERMISSIONS } from '~/configs/permissions';
import { createPaymentMethod, getPaymentMethods, updatePaymentMethod } from '~/services/api/queries/settings';

const getPaymentMethodTableMeta = () => {
  return {
    columns: [
      {
        Header: 'Payment Type',
        accessor: 'payment_type'
      },
      {
        Header: 'Account Name',
        accessor: 'account_name',
      },
      {
        Header: 'Account Number',
        accessor: 'account_number',
      },
      {
        Header: 'Active',
        accessor: 'is_active',
        Cell: ({ value }) => value ? 'Yes' : 'No'

      },
      {
        Header: '',
        accessor: 'actions',
        options: [(defaultValues, hideActions) => <ModalFormOpener
          key="edit"
          size={'sm'}
          submitService={updatePaymentMethod}
          fields={paymentMethodFields}
          heading={'Let’s Edit a Payment Method!'}
          openerText='Edit'
          openerClassName='submenu_item'
          parentId='table'
          defaultValues={defaultValues}
          refreshEvent='refresh_table'
          onClose={hideActions}
          doNotReset={true}
          successMessage='Payment method updated!'
          permissions={[PERMISSIONS.BALANCE_MANAGEMENT_PAYMENT_METHOD_UPDATE]}
        />,
        ]
      },
    ],
    actions: [<ModalFormOpener key={1}
      submitService={createPaymentMethod}
      fields={paymentMethodFields}
      heading={'Let’s create new payment method for an Agent!'}
      openerText='+ New Payment Method'
      openerClassName='primaryBtn_sm'
      refreshEvent='refresh_table'
      successMessage='Payment method created!'
      doNotReset={true}
      permissions={[PERMISSIONS.BALANCE_MANAGEMENT_PAYMENT_METHOD_CREATE]}
    />],
    queryService: getPaymentMethods
  }
}

export default getPaymentMethodTableMeta;