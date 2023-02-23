import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { PERMISSIONS } from '~/configs/permissions';
import { createBanner, getBannerList, updateBanner } from '~/services/api/queries/banner';
import bannerFields from '~/configs/meta/mutationMeta/bannerFields';


const getBannerTableMeta = () => {
  return {
    columns: [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ value }) => {
          return (<img src={value} alt='' style={{ width: '40px', height: '40px', objectFit: 'cover' }} />)
        }
      },
      {
        Header: '',
        accessor: 'actions',
        options: [
          (defaultValues, hideActions) => <ModalFormOpener
            key="edit"
            submitService={updateBanner}
            fields={bannerFields}
            heading={'Let’s Edit a Banner'}
            openerText='Edit'
            openerClassName='submenu_item'
            parentId='table'
            defaultValues={defaultValues}
            refreshEvent='refresh_table'
            size="lg"
            onClose={hideActions}
            doNotReset={true}
            successMessage='Banner updated Successfully!'
            permissions={[PERMISSIONS.ANNOUNCEMENT_BANNER_UPDATE]}
          />,
        ]
      },
    ],
    actions: [<ModalFormOpener
      key={1}
      submitService={createBanner}
      fields={bannerFields}
      heading={'Create a New Banner'}
      openerText='+ New Banner'
      openerClassName='primaryBtn_sm'
      refreshEvent='refresh_table'
      size="lg"
      successMessage='Banner created Successfully!'
      doNotReset={true}
      permissions={[PERMISSIONS.ANNOUNCEMENT_BANNER_CREATE]}
    />],
    queryService: getBannerList
  }
}

export default getBannerTableMeta;



