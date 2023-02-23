import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { createCountryAgent, getCountryAgents, updateCountryAgent } from '~/services/api/queries/agents';
import countryAgentFields from '~/configs/meta/mutationMeta/countryAgentFields';
import { PERMISSIONS } from '~/configs/permissions';
import updatableCountryAgentFields from '~/configs/meta/mutationMeta/updatableCountryAgentFields';

const getCountryAgentTableMeta = () => {

  return {
    columns: [
      {
        Header: 'Country Agent Name',
        accessor: 'name',
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
        Header: '',
        accessor: 'actions',
        options: [
          (defaultValues, hideActions) => <ModalFormOpener
            key="edit"
            submitService={updateCountryAgent}
            fields={updatableCountryAgentFields}
            heading={'Let’s Edit a Country Agent!'}
            openerText='Edit'
            openerClassName='submenu_item'
            parentId='table'
            defaultValues={defaultValues}
            refreshEvent='refresh_table'
            size="lg"
            onClose={hideActions}
            doNotReset={true}
            permissions={[PERMISSIONS.AGENT_MANAGEMENT_COUNTRY_AGENT_UPDATE]}
            successMessage='Country agent updated!'
          />,
        ]
      }
    ],
    actions: [<ModalFormOpener
      key={1}
      submitService={createCountryAgent}
      heading={'Let’s Sign up new Country Agent to walkability Family!'}
      fields={countryAgentFields.filter(f => !f.onlyEditable)}
      openerText='+ New Country Agent'
      openerClassName='primaryBtn_sm'
      refreshEvent='refresh_table'
      size="lg"
      successMessage='Country agent created!'
      doNotReset={true}
      permissions={[PERMISSIONS.AGENT_MANAGEMENT_COUNTRY_AGENT_CREATE]}
    />],
    queryService: getCountryAgents
  }
}

export default getCountryAgentTableMeta;