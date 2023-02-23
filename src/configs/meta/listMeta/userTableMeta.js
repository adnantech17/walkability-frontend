import { Badge } from 'react-bootstrap';
import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { createUser, getUsers, updateUser } from '~/services/api/queries/userManagement';
import updatableUserMutationFields from '~/configs/meta/mutationMeta/updatableUserMutationFields';
import userMutationFields from '~/configs/meta/mutationMeta/userMutationFields';
import { PERMISSIONS } from '~/configs/permissions';

const getUserTableMeta = () => {
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
      {
        Header: 'Role',
        accessor: 'role'
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
            heading={'Let’s Edit a Country Agent!'}
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
    actions: [<ModalFormOpener
      key={1}
      submitService={createUser}
      fields={userMutationFields}
      heading={'Create a New User!'}
      openerText='+ New User'
      openerClassName='primaryBtn_sm'
      refreshEvent='refresh_table'
      size="lg"
      successMessage='User created Successfully!'
      doNotReset={true}
      permissions={[PERMISSIONS.USER_MANAGEMENT_USER_CREATE]}
    />],
    queryService: getUsers
  }
}

export default getUserTableMeta;