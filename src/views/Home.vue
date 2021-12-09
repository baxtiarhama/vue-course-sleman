<template>
  <v-container fluid>
    <v-container>
      <v-layout row wrap justify-space-around fill-height align-center mx-1 mt-5>
        <v-flex xs12>
          <br>
          <br>
          <br>
          <v-img width="250px" class="mx-auto" :src="logo"></v-img>
        </v-flex>
        <v-flex xs12 lg4 xl4>
          <h1>سڵاو گیان</h1>
          من <span class="primary--text">سلێمان هەڵشۆییم</span> ملیاردێرم و پارەم زۆر زۆرە، هەنێک وردەت ئەدەمێ بچۆ سەرفی
          بکە بۆخۆت لەم بازاڕە شت بکڕە بزانم ئەیدەیت بەچی
        </v-flex>
        <v-flex xs12 lg4 xl4>
          <v-btn color="primary" block x-large to="/shop" class="black--text mt-5">خەرجکردنی پارە</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        logo: require('../assets/logo.png')
      }
    },
  }
</script>