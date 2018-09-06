<template>
<div>
<div class="container">

    <div class="row"> 
    <div class="col-lg-4">                      
        <img class="img-thumbnail" :src="thumbnail" alt="">     
    </div>

    <div class="col-lg-5">
        <div class="product_details_text">
            <h3>{{ nama }}</h3>
            <h4 v-if="harga_promo==0"> {{ "Rp. "+ harga }}</h4>
            <h4 v-else><del>{{ "Rp. " + harga }}</del><br>Rp. {{ harga_promo }}</h4>
            <p>{{ deskripsi }}</p>
                <button type="submit" class="detail_btn" style="margin-right:10px;" @click="addKatalog(produk)">Tambah Katalog</button>
                <button type="submit" class="submit_btn" onclick="window.location.href = 'beli'">Beli</button>                       
        </div>
    </div>
    </div>

</div>  
</div>       
</template>

<script>
import axios from 'axios'

export default {
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
        thumbnail: {
            type: String,   
            required: true
        }
    },
    data() {
        return {
        modalActive: false
        }
    },
    methods: {
        addKatalog(produk) {
            this.$store.commit('addKatalog', produk)
            this.$toast.open({
                message: 'Barang telah ditambahkan di katalog',
                type: 'is-success'
            })
        }
    }
}
</script>