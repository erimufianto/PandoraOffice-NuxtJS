<template>

<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div class="l_product_item">
        <div class="l_p_img">
            <img class="img-fluid" :src="thumbnail" alt="">
        </div>
        <div class="l_p_text">
            <ul>
                <li>
                    <nuxt-link :to="{name: 'produk-id-detail', params: {id: id}}" class="detail_btn">Lihat</nuxt-link>
                </li>
            </ul>
            <h4>{{ nama }}</h4>
            <h6 v-if="harga_promo==0"> Rp {{ harga }}</h6>
            <h5 v-else><del>Rp {{ harga }}</del><br>Rp {{ harga_promo }}</h5><br><br> 
            <money v-model="harga" v-bind="money" v-money="{thousands}"></money>  
            <money v-model="harga_promo" v-bind="money" v-money="{thousands}"></money>        
        </div>
    </div>  
</div> 

</template>

<script>
import {Money} from 'v-money'

export default {
    components: {Money},
    name: 'display',
    props: {
        id: {
            type: Number,
            required: true
        },
        nama: {
            type: String,
            required: true
        },
        harga: {
            type: Number,
            required: true
        },
        harga_promo: {
            type: Number,
            required: true
        },
        deskripsi: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        kategori: {
            type: String,
            required: true
        }
    },
    data () {
      return {
        money: {
          precision: false,
          thousands: '.',
          masked: true
        }
      }
    }
}
</script>

<style scoped>

</style>

