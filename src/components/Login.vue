<template>
  <div>
    <v-app-bar
      dense
      app
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      />
      <v-toolbar-title class="hidden-sm-and-down">
        <router-link
          :to="{ name: 'home' }"
          tag="span"
          style="cursor: pointer"
          exact
        >
          {{ mainSettings.company_name }}
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        class="d-flex d-sm-none"
        @click="showSearch = true"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <branch />
      <notification-dropdown />
      <user-menu />
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      class="yellow-backgroung"
      app
    >
      <v-list>
        <v-list-item
          v-for="item in availableItems"
          :key="item.title"
          :to="item.to"
        >
          <v-icon v-if="item.ico" left>
            {{ item.ico }}
          </v-icon>
          <v-list-item-content>
            {{ $t(item.title) }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>

<script>
import NotificationDropdown from './NotificationDropdown'
import UserMenu from './UserMenu'
// import Branch from './Branch'
// import { hasRole } from '~/utils/role'
// import { hasPermission, can } from '~/utils/permission'
// import { mapGetters } from 'vuex'

export default {
  components: {
    NotificationDropdown,
    UserMenu,
    Branch
  },
  data: () => ({
    drawer: true,
    items: [
      // {
      //   title: 'menu.users',
      //   to: { name: 'users.index' },
      //   ico: 'mdi-account',
      //   can: ['read_users']
      // }
    ]
  }),
  computed: {
    // availableItems () {
    //   return this.items.filter((item) => {
    //     return (item.can === undefined || this.can(...item.can)) &&
    //       (item.roles === undefined || this.hasRole(...item.roles)) &&
    //       (item.permissions === undefined || this.hasPermission(...item.permissions))
    //   })
    // },
    // ...mapGetters({
    //   mainSettings: 'main-settings/mainSettings'
    // })
  },
  methods: {
    // hasRole,
    // hasPermission,
    // can
  }
}
</script>

<style>
  .yellow-backgroung {
    background: #f4c749!important;
  }
  .yellow-backgroung .v-list {
    border-top: 10px solid black!important;
    border-bottom: 10px solid black!important;
  }
</style>
