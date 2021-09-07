<template>
  <v-app>
    <!-- <navbar /> -->
    <v-main>
      <v-container fluid>
        <div class="d-flex align-center py-3">
          {{ 123 }}
          <div class="display-1">{{ title }}</div>
        </div>
        <router-view :key="key" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import Navbar from '~/components/Navbar'
// import { mapGetters } from 'vuex'

export default {
  name: 'AppLayout',
  // components: {
  //   Navbar
  // },
  // data: () => ({
  //   appName: window.config.appName,
  //   key: 1
  // }),
  // metaInfo () {
  //   return { title: this.title }
  // },
  // computed: {
  //   title () {
  //     return this.$t('routes.' + this.$route.name)
  //   },
  // }
}
</script>