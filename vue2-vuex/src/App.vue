<template>
  <div id="app2">
    <h1>{{platform}}</h1>
    <input type="button" name="test" value="test" v-on:click="test">
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      
    }
  },
  computed: mapState({

    platform: state => state.platform,

  }),
  mounted() {

    this.$store.dispatch('setApp', 'android');
    
  },
  methods: {

    test: function() {
      this.$store.dispatch('setApp', 'android1111');
      console.log(this.platform)
    }
    
  }
}


</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
