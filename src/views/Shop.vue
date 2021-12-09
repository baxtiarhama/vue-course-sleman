<template>
  <v-container fluid>
    <v-layout row wrap justify-space-around>
      <v-flex xs12 lg4 xl4>
        <v-app-bar fixed app color="primary" light>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 lg4 xl4>
              <v-avatar size="40">
                <img src="../assets/logo.png" alt="alt">
              </v-avatar>

              فەرموو
              {{changeNumbers(currentBudget)}} دینار لە گیرفانتایە
            </v-flex>
          </v-layout>
        </v-app-bar>
        <v-app-bar fixed bottom app color="transparent" light>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 lg4 xl4>

              <v-btn color="success" @click="openDialog" :disabled="cart.total_price == 0" block x-large>پارەدان</v-btn>
            </v-flex>
          </v-layout>
        </v-app-bar>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 v-for="(item, index) in cart.items" :key="index">
              <v-card class="ma-1 rounded-lg elevation-5">
                <v-img class="ma-4" height="400" contain :src="item.image"></v-img>
                <v-card-title primary-title class="my-3">
                  <div>{{item.name}}</div>
                  <v-spacer></v-spacer>
                  {{changeNumbers(item.price)}} دینار
                </v-card-title>
                <v-card-subtitle>
                  ئەو پارەیە ({{changeNumbers(currentBudget/item.price)}}) دانە لەمە ئەکات
                </v-card-subtitle>
                <v-card-text class="my-4 text-center">
                  <v-layout row wrap>
                    <v-flex xs4>
                      <v-btn :disabled="currentBudget < item.price" icon x-large color="success"
                        @click="changeQty(index,'add')">
                        <v-icon>fas fa-plus</v-icon>
                      </v-btn>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field outlined class="centered-input" readonly v-model="item.qty"></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-btn icon x-large :disabled="item.qty < 1" color="error" @click="changeQty(index,'remove')">
                        <v-icon>fas fa-minus</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" :overlay="false" max-width="500px" transition="scale-transition">
      <v-card>
        <br>
        <v-img class="mt-3" :src="logo"></v-img>
        <v-card-text v-if="topItem && topItem.qty > 10">
          هەر بە جددی یەعنی تۆ بەتەمایت
          {{topItem.qty}}
          دانە
          {{topItem.name}}
          بکڕیت؟
        </v-card-text>
        <v-card-text v-else-if="topItem && topItem.qty < 3">
          مەعقولە من هاتووم {{changeNumbers(wallet_price)}} دینارم داوە بەتۆ شت بکڕیت
          تۆ هاتوویت {{topItem.qty}} دانە
          {{topItem.name}}ت
          کڕیوە؟
        </v-card-text>
        <v-card-text v-else>
          لە خزمەتتام کەسی خۆم ئەو
          دانە {{topItem.qty}}
          {{topItem.name}}'ە
          لە خزمەتتایە
        </v-card-text>
        <v-card-text>
          <v-btn block to="/end-game" v-if="topItem && topItem.qty > 10" color="success">تۆ پارەکە بدە حەقت چیە</v-btn>
          <v-btn block to="/end-game" v-else-if="topItem && topItem.qty < 2" color="success">ئەیچی ئەوەنە بەسە</v-btn>
          <v-btn block to="/end-game" v-else color="success">دەستخۆش گیان</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        // wallet_price: 1000,
        dialog: false,
        logo: require('../assets/logo.png'),
        topItem: {},
        wallet_price: 1000000000000,
        items: [{
            qty: 0,
            id: 1,
            name: 'پاتڕۆڵ',
            image: require('../assets/items/item (1).png'),
            price: 15000000
          },
          {
            qty: 0,
            id: 2,
            name: 'قتویەک کۆلا',
            image: require('../assets/items/item (2).png'),
            price: 1000
          },
          {
            qty: 0,
            id: 3,
            name: 'ماتۆڕ',
            image: require('../assets/items/item (3).png'),
            price: 800000
          },
          {
            qty: 0,
            id: 4,
            name: 'سەروپێ',
            image: require('../assets/items/item (4).png'),
            price: 5000
          },
          {
            qty: 0,
            id: 5,
            name: 'جلی کوردی',
            image: require('../assets/items/item (5).png'),
            price: 100000
          },
          {
            qty: 0,
            id: 6,
            name: 'بی ئێمی 525',
            image: require('../assets/items/item (6).png'),
            price: 6000000
          },
          {
            qty: 0,
            id: 7,
            name: 'لەفەی فەلافل',
            image: require('../assets/items/item (7).png'),
            price: 500
          },
          {
            qty: 0,
            id: 9,
            name: 'کیلۆ گوڵەبەڕۆژە',
            image: require('../assets/items/item (9).png'),
            price: 4000
          },
          {
            qty: 0,
            id: 10,
            name: 'شاورمە',
            image: require('../assets/items/item (10).png'),
            price: 1500
          },
          {
            qty: 0,
            id: 11,
            name: 'کڵاشی هەورامی',
            image: require('../assets/items/item (11).png'),
            price: 95000
          },
          {
            qty: 0,
            id: 12,
            name: 'بەرمیلە نەوت',
            image: require('../assets/items/item (12).png'),
            price: 160000
          },
          {
            qty: 0,
            id: 13,
            name: 'خەنەی خەسوو تەقێن',
            image: require('../assets/items/item (13).png'),
            price: 7000
          },
          {
            qty: 0,
            id: 14,
            name: 'پاسکیلی ئەبوگێڕ',
            image: require('../assets/items/item (14).png'),
            price: 55000
          },
          {
            qty: 0,
            id: 15,
            name: 'خورماخۆرە',
            image: require('../assets/items/item (15).png'),
            price: 25000
          },
          {
            qty: 0,
            id: 16,
            name: 'صەموونی گەرم',
            image: require('../assets/items/item (16).png'),
            price: 250
          },
          {
            qty: 0,
            id: 17,
            name: 'ئایپاد',
            image: require('../assets/items/item (17).png'),
            price: 1000000
          },
          {
            qty: 0,
            id: 18,
            name: 'سادە',
            image: require('../assets/items/item (18).png'),
            price: 2500
          },
          {
            qty: 0,
            id: 19,
            name: 'ئایفۆن ١٣',
            image: require('../assets/items/item (19).png'),
            price: 1500000
          },
          {
            qty: 0,
            id: 20,
            name: 'نەفەرێ کەباب',
            image: require('../assets/items/item (20).png'),
            price: 16000
          },
        ],
      }
    },
    computed: {
      currentBudget() {
        return (this.wallet_price - this.cart.total_price)
      },
      cart() {
        let i = []
        i = this.items.filter(f => {
          return f.qty > 0
        })
        let total_price = 0
        let result = {
          total_price: 0,
          items: this.items.sort((a, b) => {
            return a.price - b.price
          }),
        }
        for (let index = 0; index < i.length; index++) {
          const e = i[index];
          total_price += (e.qty * e.price)
        }
        result.total_price = total_price
        return result
      },

    },
    methods: {
      openDialog() {
        let t = this.cart.items

        t = t.sort((a, b) => {
          return b.qty - a.qty
        })

        this.topItem = t[0]
        this.dialog = true
      },
      changeNumbers(c) {
        c = parseFloat(c).toFixed(0)
        return new Intl.NumberFormat().format(c)
      },
      changeQty(index, type) {
        if (type == 'add') {
          this.items[index].qty++;
        } else {
          if (this.items[index].qty > 0) {
            this.items[index].qty--;
          }
        }
      }
    },
  }
</script>
<style>
  .centered-input input {
    text-align: center
  }
</style>