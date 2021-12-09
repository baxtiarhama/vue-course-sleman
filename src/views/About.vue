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
                    ئەم پڕۆجێکتە تایبەتە بە کۆرسی وێبی گروپی <a href="https://www.instagram.com/nodecode_/">نۆد</a> هاوشێوەی وێب سایتی
                    <a href="https://neal.fun/spend/" target="_blank">neal.fun</a>
                    هەروەها سۆرسکۆدەکانی
                    <a href="https://github.com/baxtiarhama/vue-course-sleman" target="_blank">لێرە</a>
                    هەیە ئەتوانن سەیری بکەن
                </v-flex>
                <v-flex xs12 lg4 xl4>
                    <v-btn color="primary" block x-large to="/" class="black--text mt-5">پەڕەی سەرەکی</v-btn>
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