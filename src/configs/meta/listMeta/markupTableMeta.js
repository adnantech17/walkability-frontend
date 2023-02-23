import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { createMarkup, getMarkupList, updateMarkup } from '~/services/api/queries/markup';
import markupFields from '~/configs/meta/mutationMeta/markupFields';
import updatableMarkupFields from '~/configs/meta/mutationMeta/updatableMarkupFields';
import { PERMISSIONS } from '~/configs/permissions';

const getMarkupTableMeta = () => {
  return {
    columns: [
      {
        Header: 'Vendor Name',
        accessor: 'key'
      },
      {
        Header: 'Markup amount ( £ )',
        accessor: 'markup_amount',
      },
      {
        Header: 'Markup Type  ',
        accessor: 'markup_type',
      },
      {
        Header: 'Applicable For',
        accessor: 'company_name',

      },
      {
        Header: '',
        accessor: 'actions',
        options: [(defaultValues, hideActions) => {
          return <ModalFormOpener
            key="edit"
            size={'sm'}
            submitService={updateMarkup}
            fields={updatableMarkupFields}
            heading={'Edit Markup Plan for Agents'}
            openerText='Edit'
            openerClassName='submenu_item'
            parentId='table'
            defaultValues={{ ...defaultValues, ...defaultValues?.data, applicable_for: defaultValues?.company_name }}
            refreshEvent='refresh_table'
            onClose={hideActions}
            doNotReset={true}
            successMessage='Markup updated Successfully!'
            permissions={[PERMISSIONS.SETTINGS_MANAGEMENT_MARKUP_UPDATE]}
          />
        }
        ]
      },
    ],
    actions: [<ModalFormOpener key={1}
      submitService={createMarkup}
      fields={markupFields}
      heading={'Select Markup Plan for Agents'}
      openerText='+ New Markup'
      openerClassName='primaryBtn_sm'
      refreshEvent='refresh_table'
      successMessage='New markup created!'
      doNotReset={true}
      permissions={[PERMISSIONS.SETTINGS_MANAGEMENT_MARKUP_CREATE]}
    />],
    queryService: getMarkupList
  }
}

export default getMarkupTableMeta;