<template>

<div class="col-lg-3 col-sm-6">
    <div class="l_product_item">
        <div class="l_p_img">
            <img class="img-fluid" :src="thumbnail" alt="">
        </div>
        <div class="l_p_text">
            <ul>
                <li>
                    <nuxt-link :to="detail_id" class="detail_btn">Lihat</nuxt-link>
                </li>
            </ul>
            <h4>{{ nama }}</h4>
            <h6 v-if="harga_promo==0"> {{ "Rp. "+ harga }}</h6>
            <h5 v-else><del>Rp. {{ harga }}</del><br>Rp. {{ harga_promo }}</h5>
        </div>
    </div>  
</div> 

</template>

<script>
export default {
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
        }
    },
    computed: {
        detail_id () {
        return '/produk/' + this.id + '/detail'
        }
    },
}
</script>

<style scoped>

</style>

