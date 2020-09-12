<template>
  <v-container>
    <v-row justify="center">

      <v-col cols="3" class="text-center text col">
        <v-card :color="setColor" >

          <h5 class="d-flex text--disabled pa-2">Upime</h5>

          <v-divider></v-divider>

          <h1 class="pa-2">1/ days</h1>
          <h6 class="text--disabled pa-2">9 Hours, 27 Minutes, 46 Secs</h6>

          <v-divider></v-divider>

          <p class="text--disabled pa-2">September 1, 2020</p>

        </v-card>
      </v-col>

      <v-col cols="3" class="text-center">
        <v-card :color="setColor">

          <h3 class="d-flex pa-2 text--disabled">CPU Load</h3>

        <v-divider></v-divider>

        </v-card>
      </v-col>
      <v-col cols="3" class="text-center">
        <v-card :color="setColor">hola</v-card>
        <v-divider></v-divider>
        <v-card :color="setColor">hola</v-card>
      </v-col>
      <v-col cols="3" class="text-center">
        <v-card :color="setColor">hola</v-card>
        <v-divider></v-divider>
        <v-card :color="setColor">hola</v-card>
      </v-col>

    </v-row>
    <v-card> hola</v-card>
  </v-container>
</template>

<script>
import {Howl, Howler} from 'howler';

export default {
  name: 'home',
  components: {},

  data: () => ({
    //
  }),
  computed: {
    setPrimaryColor() {
      return '#212121'
    },
    setSecondaryColor() {
      return 'blue'
    }
  },
  methods: {}
}
</script>