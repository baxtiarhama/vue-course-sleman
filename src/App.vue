<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      //
    }),
    mounted() {
      this.$vuetify.theme.dark = true
      this.$vuetify.rtl = true
    },
  };
</script>
<style>
   @import url('./assets/font.css');

  * {
    font-family: 'Rudaw';
    font-weight: normal;
    font-style: normal;
  }
</style>