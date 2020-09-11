<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          cols="12"
          sm="8"
          md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
              color="primary"
              dark
              flat
          >
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.enter.native="auth" ref="form" v-model="valid">
              <v-text-field
                  label="Login"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="form.username"
                  :rules="nameRules"
                  required
              ></v-text-field>

              <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="form.password"
                  :rules="passRules"
                  required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="auth" :loading="getLoadingUser">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: "Login",
  data: () => {
    return {
      form: {
        username: "",
        password: ""
      },
      valid: false,
      nameRules: [
        v => !!v || 'Name is required'
      ],
      passRules: [
        v => !!v || 'Password is required'
      ],
    }
  },
  computed: {
    ...mapGetters(['getLoadingUser'])
  },
  methods: {
    ...mapActions(['login']),

    auth() {
      if (this.$refs.form.validate()) {
        this.login(this.form)
      }
    }
  }
}
</script>

<style scoped>

</style>