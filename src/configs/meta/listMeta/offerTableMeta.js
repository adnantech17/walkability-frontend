import ModalFormOpener from '~/components/actions/ModalFormOpener';
import { PERMISSIONS } from '~/configs/permissions';
import { createOffer, getOfferList, updateOffer } from '~/services/api/queries/offers';
import offerFields from '~/configs/meta/mutationMeta/offerFields';


const getOfferTableMeta = () => {
  return {
    columns: [
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'rate',
        accessor: 'rate',
        Cell: ({ value }) => {
          return `${value} %`
        }
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
            submitService={updateOffer}
            fields={offerFields}
            heading={'Let’s Edit a Offer'}
            openerText='Edit'
            openerClassName='submenu_item'
            parentId='table'
            defaultValues={defaultValues}
            refreshEvent='refresh_table'
            size="lg"
            onClose={hideActions}
            doNotReset={true}
            successMessage='Offer updated Successfully!'
            permissions={[PERMISSIONS.ANNOUNCEMENT_OFFER_UPDATE]}
          />,
        ]
      },
    ],
    actions: [<ModalFormOpener
      key={1}
      submitService={createOffer}
      fields={offerFields}
      heading={'Create a New Offer'}
      openerText='+ New Offer'
      openerClassName='primaryBtn_sm'
      refreshEvent='refresh_table'
      size="lg"
      successMessage='Offer created Successfully!'
      doNotReset={true}
      permissions={[PERMISSIONS.ANNOUNCEMENT_BANNER_CREATE]}
    />],
    queryService: getOfferList
  }
}

export default getOfferTableMeta;



