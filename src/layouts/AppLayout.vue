<template>
  <v-app>
    <navbar />
    <v-main class="app">
      <v-container fluid>
        <div class="d-flex align-center py-3">
          <div class="display-1">{{ title }}</div>
        </div>
        <router-view :key="key" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'AppLayout',
  components: {
    Navbar
  },
  data: () => ({
    key: 1
  }),
  metaInfo () {
    return { title: this.title }
  },
  computed: {
    title () {
      return this.$route.name
    }
  },
}
</script>