import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { createLocalAgent, getLocalAgents, updateLocalAgent } from '~/services/api/queries/agents';
import localAgentFields from '~/configs/meta/mutationMeta/localAgentFields';
import { PERMISSIONS } from '~/configs/permissions';
import updatableLocalAgentFields from '~/configs/meta/mutationMeta/updatableLocalAgentFields';

const getLocalAgentTableMeta = () => {
  return {
    columns: [
      {
        Header: 'Agent Name',
        accessor: 'name'
      },
      {
        Header: 'Agent ID',
        accessor: 'unique_identifier',
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
        Header: 'Balance',
        accessor: 'balance',
        Cell: ({ value }) => <p>{value.toFixed(2)}</p>
      },
      {
        Header: '',
        accessor: 'actions',
        options: [(defaultValues, hideActions) => <ModalFormOpener
          key="edit"
          submitService={updateLocalAgent}
          fields={updatableLocalAgentFields}
          heading={'Let’s Edit a Local Agent!'}
          openerText='Edit'
          openerClassName='submenu_item'
          parentId='table'
          defaultValues={defaultValues}
          refreshEvent='refresh_table'
          size="lg"
          onClose={hideActions}
          doNotReset={true}
          successMessage='Local agent updated!'
          permissions={[PERMISSIONS.AGENT_MANAGEMENT_LOCAL_AGENT_UPDATE]}
        />
        ]
      },
    ],
    actions: [<ModalFormOpener key={1}
      submitService={createLocalAgent}
      fields={localAgentFields}
      heading={'Let’s Sign up new Local Agent to walkability Family!'}
      openerText='+ New Local Agent'
      openerClassName='primaryBtn_sm'
      refreshEvent='refresh_table'
      size="lg"
      successMessage='Local agent created!'
      doNotReset={true}
      permissions={[PERMISSIONS.AGENT_MANAGEMENT_LOCAL_AGENT_CREATE]}
    />],
    queryService: getLocalAgents
  }
}

export default getLocalAgentTableMeta;