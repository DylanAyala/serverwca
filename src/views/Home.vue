<template>
<v-row align="center" justify="center">
    <v-col cols="12" class="text-center">
        <div>
            <h1 class="text-h1" @click="playSound">CAPI GATO</h1>
        </div>
    </v-col>
</v-row>

</template>

<script>
import {Howl, Howler} from 'howler';

export default {
  name: 'home',

  components: {
  }, 

  data: () => ({
    //
  }),
  methods: {
    playSound () {
        var audio = new Audio(require('./capi.mp3'))
        audio.play();
        
    }
  }
}
</script>