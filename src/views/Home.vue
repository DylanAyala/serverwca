<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="text-center">
        <v-card :color="setPrimaryColor">
          <v-row>
            <v-col cols="12" class="ma-0 pa-0">
              <h5 class="text--disabled pa-2">Upime</h5>
            </v-col>
          </v-row>

          <v-divider></v-divider>
          <h1 class="pa-3 mt-3 pr-1">1 <p style="color: #689F38; display: inline;" class="pa-2 pl-1">days</p></h1>
          <h6 class="text--disabled pa-3 mb-1">9 Hours, 27 Minutes, 46 Secs</h6>

          <v-divider></v-divider>

          <p class="text--disabled pa-2">September 1, 2020</p>

        </v-card>
      </v-col>

      <v-col cols="3" class="text-center">
        <v-card :color="setPrimaryColor">

          <h3 class="d-flex pa-2 text--disabled">CPU Load</h3>

          <v-divider></v-divider>

        </v-card>
      </v-col>
      <v-col cols="3" class="text-center">
        <v-card :color="setPrimaryColor">hola</v-card>
        <v-divider></v-divider>
        <v-card :color="setPrimaryColor">hola</v-card>
      </v-col>
      <v-col cols="3" class="text-center">
        <v-card :color="setPrimaryColor">hola</v-card>
        <v-divider></v-divider>
        <v-card :color="setPrimaryColor">hola</v-card>
      </v-col>

    </v-row>
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
<style>

</style>