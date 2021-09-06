<template>
  <v-app>
    <v-container
      id="auth-body"
      class="fill-height"
      fluid
      style="background-color: whitesmoke;"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="auto" class="ma-0 pa-0">
          <v-img
            contain
            class="mx-auto"
            max-height="120"
            max-width="300"
            :src="require('@/assets/logo.svg')" 
            :alt="'Need-for-drive'"
          />
        </v-col>
        <v-col cols="auto" class="ma-0 pa-0">
          <v-card-title class="headline">
            <span class="auth__logo_text">Need for drive</span>
          </v-card-title>
        </v-col>
        <v-col cols="12" class="mb-1 pb-1">
          <v-spacer />
        </v-col>
        <v-card
          min-width="400"
          class="elevation-12"
        >
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

export default {
data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      v => !!v || 'Пожалуйста, введите пароль',
      v => v.length >= 8 || 'Необходимо минимум 8 символов'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Пожалуйста, введите email',
      v => /.+@.+\..+/.test(v) || 'Введите корректный email',
    ],
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    login () {
      if (this.valid) {
        console.log('email: admin@m.ru / password: password')
        if (this.password === 'password' && this.email === 'admin@m.ru') {
          this.$router.push({ name: 'Admin' })
        }
      }
    }
  }
}
</script>

<style scoped>
  .auth__logo_text {
    color: #3d5170;
    font-weight: 600;
  }
  .auth__form_login {
    font-weight: 400;
    color: #3d5170;
    font-size: 17.5px;
    line-height: 20px;
  }
  .auth__form_tip {
    color: #606266;
    font-size: 10.5px;
  }
  .auth__form_link_text {
    color: #3395ff;
    text-decoration: none;
    font-size: 10.5px;
    line-height: 12px;
  }
  .auth__form_link_text:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .auth__form_btn_text {
    font-weight: 400;
    color: white;
    font-size: 12.5px;
  }
  .v-btn {
    width: 100px;
    text-transform:none;
  }
  .v-messages__message {
    padding: 0;
  }
</style>