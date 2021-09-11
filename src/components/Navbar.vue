<template>
  <div>
    <v-app-bar
      color="white"
      app
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="auto">
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
          />
        </v-col>
        <v-col cols="auto">
          <v-text-field
            class="pt-2"
            :label="'Поиск...'"
            dense
            append-icon="mdi-magnify"
            clearable
          />
        </v-col>
        <v-spacer />
        <v-col cols="auto" class="col__borders ma-4 pb-2">
          <notification-dropdown />
        </v-col>
        <v-col cols="auto" class="ml-4">
          Admin
          <user-menu />
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      class="elevation-5"
      v-model="drawer"
      app
      
    >
      <v-row
        align="center"
        justify="center"
        class="pads__zero"
      >
        <v-col cols="auto" class="ma-0 pa-0">
          <v-img
            contain
            class="mx-auto"
            max-height="25"
            max-width="25"
            :src="require('@/assets/logo.svg')" 
            :alt="'Need-for-drive'"
          />
        </v-col>
        <v-col cols="auto" class="ma-0 pa-0">
          <v-card-title>
            <span class="auth__logo_text">Need for car</span>
          </v-card-title>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
        >
          <v-icon v-if="item.ico" left x-small class="item__content_icon ml-8">
            {{ item.ico }}
          </v-icon>
          <v-list-item-content class="item__content_text">
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import NotificationDropdown from './NotificationDropdown'
import UserMenu from './UserMenu'
// import { mapGetters } from 'vuex'

export default {
  components: {
    NotificationDropdown,
    UserMenu
  },
  data: () => ({
    drawer: true,
    items: [
        {
          title: 'Карточка автомобиля',
          to: { name: 'users.index' },
          ico: 'mdi-account',
          can: ['read_users']
        },
        {
          title: 'Список авто',
          to: { name: 'manager_orders.index' },
          ico: 'mdi-notebook-edit',
          can: ['read_manager_orders']
        },
        {
          title: 'Заказы',
          to: { name: 'logist_orders.index' },
          ico: 'mdi-notebook-edit',
          can: ['read_logist_orders']
        },
        {
          title: 'Menu 4',
          to: { name: 'accountant_orders.index' },
          ico: 'mdi-notebook-edit',
          can: ['read_accountant_orders']
        },
        {
          title: 'Menu 5',
          to: { name: 'accountant_orders.index' },
          ico: 'mdi-notebook-edit',
          can: ['read_accountant_orders']
        },
        {
          title: 'Menu 6',
          to: { name: 'accountant_orders.index' },
          ico: 'mdi-notebook-edit',
          can: ['read_accountant_orders']
        },
        {
          title: 'Menu 7',
          to: { name: 'accountant_orders.index' },
          ico: 'mdi-notebook-edit',
          can: ['read_accountant_orders']
        }
      ]
  }),
  computed: {
    // ...mapGetters({
    //   mainSettings: 'main-settings/mainSettings'
    // })
  },
}
</script>

<style>
  .pads__zero {
    padding-top: 12px;
    margin-bottom: -8px;
    border-bottom: 1px solid #E0E0E0 !important;
  }
  .auth__logo_text {
    color: #3d5170;
    font-weight: 400;
  }
  .v-list .v-list-item--active {
    border-bottom: 1px solid #E0E0E0 !important;
    color: white !important;
  }
  .item__content_icon {
    color: grey !important;
  }
  .item__content_text {
    font-weight: 400;
    color: #3d5170;
  }
  .col__borders {
    border-right: 1px solid #E0E0E0 !important;
    border-left: 1px solid #E0E0E0 !important;
  }
</style>
