<template>
<div class="container">

    <div class="container mt-4 mb-4">
        <div class="categories_main_inner">
            <div class="row row_disable">
            
           <div v-if="loadedDetail" class="col-lg-9 float-md-right">
                <h3 class="cart_single_title">Detail Produk</h3>
                <div class="row"> 
                    <div class="col-lg-4">                      
                        <img class="img-thumbnail" :src="loadedDetail.image[0].thumbnail" alt="">     
                    </div>

                    <div class="col-lg-5">
                        <div class="product_details_text">
                            <h3>{{ loadedDetail.nama }}</h3>
                            <h5 v-if="loadedDetail.pricing.harga_promo==0">Rp {{ loadedDetail.pricing.harga }}</h5>
                            <h4 v-else><del>Rp {{ loadedDetail.pricing.harga }}</del><br>Rp {{ loadedDetail.pricing.harga_promo }}</h4>
                            <p>{{ loadedDetail.deskripsi }}</p>
                                <nuxt-link :to="{name: 'katalog-buatkatalog', params: {id: loadedDetail.id}}" class="detail_btn" style="margin-right:10px;">Tambah Katalog</nuxt-link>
                                <nuxt-link :to="{name: 'cart-order', params: {id: loadedDetail.id}}" class="submit_btn">Beli</nuxt-link>                                                      
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>  
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'layouthome',
    props:['loadedDetail'],
    data() {
        return {
            produk: {
                id: this.$route.params.id
            }
        }
    },
    mounted(produk) {
        axios 
            .get(
                process.env.myapi + 
                    "/graphql?query=query{ detailBarangOffice(id:" + 
                    this.produk.id + 
                    "){ id nama sku deskripsi image{ thumbnail image_ori } pricing{ harga harga_promo } } }"
            )
            .then (res => 
                (this.loadedDetail = res.data.data.detailBarangOffice[0]))
    },
}
</script> 

