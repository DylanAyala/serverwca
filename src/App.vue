<template>
  <v-app>
    <v-app id="inspire">
      <v-main>
        <v-container
            style="width: 70%"
        >
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer
          color="gray"
          app
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
