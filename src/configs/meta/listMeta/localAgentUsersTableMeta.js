import { Badge } from 'react-bootstrap';
import ModalFormOpener from '~/components/actions/ModalFormOpener';
import updatableUserMutationFields from '~/configs/meta/mutationMeta/updatableUserMutationFields';
import { PERMISSIONS } from '~/configs/permissions';
import { getLocalAgentUserList, updateUser } from '~/services/api/queries/userManagement';

const getLocalAgentUsersTableMeta = () => {
  return {
    columns: [
      {
        Header: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        accessor: 'last_name'
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone_number'
      },
      // {
      //   Header: 'User Type',
      //   accessor: 'user_type',
      // },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Company Name',
        accessor: 'company',
        Cell: ({ value }) => <span> {value.name}</span>
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => <Badge pill bg={`${value === 'active' ? 'success' : 'danger'}`}>{value}</Badge>
      },
      {
        Header: '',
        accessor: 'actions',
        options: [
          (defaultValues, hideActions) => <ModalFormOpener
            key="edit"
            submitService={updateUser}
            fields={updatableUserMutationFields}
            heading={'Let’s Edit a local agent user!'}
            openerText='Edit'
            openerClassName='submenu_item'
            parentId='table'
            defaultValues={defaultValues}
            refreshEvent='refresh_table'
            size="lg"
            onClose={hideActions}
            doNotReset={true}
            successMessage='User updated Successfully!'
            permissions={[PERMISSIONS.USER_MANAGEMENT_USER_UPDATE]}
          />,
        ]
      },
    ],
    actions: [],
    queryService: getLocalAgentUserList
  }
}

export default getLocalAgentUsersTableMeta;