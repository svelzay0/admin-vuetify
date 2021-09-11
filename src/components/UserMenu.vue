<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="100"
    bottom
    offset-y
    transition="scale-transition"
    origin="top right"
  >
    <template #activator="{ on }">
      <v-avatar>
        <img
          :src="require('@/assets/user-avatar.jpg')"
          alt="User"
        >
      </v-avatar>
      <v-btn 
        icon 
        large 
        v-on="on"
      >
        <v-icon 
          x-large 
          dark
        >
          mdi-menu-down
        </v-icon>
      </v-btn>
    </template>

    <v-card height="75px">
      <v-row
        align="center"
        justify="center"
      >
        <v-col 
          cols="auto" 
          class="mt-3"
        >
          <v-btn 
            color="primary" 
            @click.prevent="logout"
          >
            <v-icon>mdi-logout</v-icon>
            Выйти
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-menu>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data: () => ({
    menu: false
  }),

  computed: {
    // ...mapGetters({
    //   user: 'auth/user',
    // })
  },

  methods: {
    async logout () {
      // await this.$store.dispatch('auth/logout')
      // this.$router.push({ name: 'login' })
    }
  }
}
</script>
