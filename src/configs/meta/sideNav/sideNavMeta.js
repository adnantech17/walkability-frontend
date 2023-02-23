import { ANNOUNCEMENT_BANNER_PATH, ANNOUNCEMENT_OFFER_PATH, APPROVE_DEPOSIT_PATH, BALANCE_HISTORY_PATH, BOOKING_LIST, COUNTRY_AGENT_PATH, COUNTRY_AGENT_SALES, HOME_PATH, LOCAL_AGENT_PATH, LOCAL_AGENT_SALES, LOCAL_AGENT_USER_LIST_PATH, MARKUP_SETTINGS_HISTORY_PATH, MARKUP_SETTINGS_PATH, MY_LOCAL_AGENT_BOOKING_PATH, PAYMENT_METHODS_PATH, PURCHASE_CURRENCY_ADJUSTMENT_PATH, PURCHASE_CURRENCY_HISTORY_PATH, SEARCH_NEW_BOOKING_PATH, SELLING_CURRENCY_HISTORY_PATH, TRANSACTION_LIST_PATH, USER_LIST_PATH } from '~/constants/route';

const sideNavMeta = [
  {
    group: 'Main',
    key: 'main',
    menus: [
      {
        path: HOME_PATH,
        title: 'Overview',
        key: 'overview',
        icon: 'fa fa-home',
      },
      {
        title: 'Agent Management',
        key: 'agent-management',
        icon: 'fa fa-sliders',
        subMenus: [
          {
            path: COUNTRY_AGENT_PATH,
            title: 'Country Agent',
            key: 'country-agent',
          },
          {
            path: LOCAL_AGENT_PATH,
            title: 'Local Agent',
            key: 'local-agent',
          },
        ]
      },
      {
        title: 'Sales Management',
        key: 'sales-management',
        icon: 'fa fa-gear',
        subMenus: [
          {
            path: LOCAL_AGENT_SALES,
            title: 'Local Agent Sales',
            key: 'local-agent-booking-list',
            subMenus: [
              {
                path: LOCAL_AGENT_SALES,
                title: 'Hotel Booking List',
                key: 'local-agent-booking-list',
              }, ,
            ]
          },
          {
            path: COUNTRY_AGENT_SALES,
            title: 'Country Agent Sales',
            key: 'country-agent-booking-list',
            subMenus: [
              {
                path: COUNTRY_AGENT_SALES,
                title: 'Hotel Booking List',
                key: 'country-agent-booking-list',
              },
            ]
          },
          {
            path: MY_LOCAL_AGENT_BOOKING_PATH,
            title: 'Hotel Booking List',
            key: 'my-local-agent-bookings',
          },
        ]
      },
      {
        title: 'My Bookings',
        key: 'my-bookings',
        icon: 'fa fa-book',
        subMenus: [
          {
            path: SEARCH_NEW_BOOKING_PATH,
            title: 'Search New Booking',
            key: 'search-new-booking'
          },
          {
            path: BOOKING_LIST,
            title: 'Booking List',
            key: 'booking-list'
          },
        ]
      },
      {
        title: 'User Management',
        key: 'user-management',
        icon: 'fa fa-user',
        subMenus: [
          {
            path: USER_LIST_PATH,
            title: 'User List',
            key: 'user-list',
          },
          {
            path: LOCAL_AGENT_USER_LIST_PATH,
            title: 'Local Agent User List',
            key: 'local-agent-user-list',
          },
        ]
      },
      {
        title: 'Balance Management',
        key: 'balance-management',
        icon: 'fa fa-dollar',
        subMenus: [
          {
            path: APPROVE_DEPOSIT_PATH,
            title: 'Approve Deposit',
            key: 'approve-deposit',
          },
          {
            path: BALANCE_HISTORY_PATH,
            title: 'Balance History',
            key: 'balance-history',
          },
          {
            path: TRANSACTION_LIST_PATH,
            title: 'Transactions',
            key: 'transaction',
          },
        ]
      },
      {
        title: 'Settings',
        key: 'settings',
        icon: 'fa fa-gear',
        subMenus: [
          {
            path: PAYMENT_METHODS_PATH,
            title: 'Payment Methods',
            key: 'payment-methods',
          },
          {
            path: MARKUP_SETTINGS_PATH,
            title: 'Markup Settings',
            key: 'markups',
            subMenus: [
              {
                path: MARKUP_SETTINGS_PATH,
                title: 'Markup List',
                key: 'markup-list',
              },
              {
                path: MARKUP_SETTINGS_HISTORY_PATH,
                title: 'Markup History',
                key: 'markup-history',
              },
            ]
          },
          {
            title: 'Currency Settings',
            key: 'currency-settings-history',
            subMenus: [
              {
                path: SELLING_CURRENCY_HISTORY_PATH,
                title: 'Selling Currency',
                key: 'selling-currency-history',
              },
              {
                path: PURCHASE_CURRENCY_HISTORY_PATH,
                title: 'Purchase Currency',
                key: 'purchase-currency-history',
              },
              {
                path: PURCHASE_CURRENCY_ADJUSTMENT_PATH,
                title: 'Currency Adjustment',
                key: 'purchase-currency-adjustment',
              },
            ]
          },
          {
            title: 'Announcement',
            key: 'announcement',
            subMenus: [
              {
                path: ANNOUNCEMENT_BANNER_PATH,
                title: 'Banner List',
                key: 'announcement-banner',
              },
              {
                path: ANNOUNCEMENT_OFFER_PATH,
                title: 'Offer List',
                key: 'announcement-offer',
              },
            ]
          },
        ]
      },
    ]
  },
];
export default sideNavMeta;