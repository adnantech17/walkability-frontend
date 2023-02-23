import inputTypes from '~/constants/form/inputTypes';
import inputVariants from '~/constants/form/inputVariants';
import { getLocalAgentsForDropdown } from '~/services/api/queries/agents';

export const transactionFilterMeta = [
  {
    className: 'issue_block col-4',
    variant: inputVariants.PLAIN_SM,
    inputType: inputTypes.SELECT,
    key: 'agent_id',
    labelText: 'Select an Agent',
    lookupQuery: getLocalAgentsForDropdown,
    permissions: ['agent_management__local_agent_list']
  },
];