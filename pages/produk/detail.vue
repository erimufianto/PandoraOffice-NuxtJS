<template>
<div class="container">
    <div class="col-lg-6">
        <div class="top_header_left">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                <span class="input-group-btn">
                <button class="btn btn-secondary" type="button"><i class="icon-magnifier"></i></button>
                </span>
            </div>
        </div>
    </div>

    <div class="container mt-4 mb-4">
        <div class="categories_main_inner">
            <div class="row row_disable">

            <div class="col-lg-3 float-md-right">
                <kategori/>
            </div>
            <div class="col-lg-9 float-md-right">
                <detail :dataBarang="loadedProduk" :isAdding="true"/>
            </div>

            </div>
        </div>  
    </div>
</div>
</template>

<script>
import axios from 'axios'
import kategori from '@/components/produk/kategori'
import detail from '@/components/produk/DetailProduk'

export default {
    layout: 'layouthome',
    components: {
        kategori
    },
    async asyncData(context, callback) {
        const { data } = await axios.get(
        process.env.myapi + "/graphql?query=query{ barang{ id sku nama dimensi{ panjang lebar tinggi } deskripsi pricing{ id sku_barang tanggal harga harga_promo } image{ id thumbnail image_ori id_barang } kategori{ id_barang id_kategori kategori_nama{ id kategori } } } }"
    );
    callback(null, {
        loadedProduk: data.data.barang
        });
    },    
    created () {
        if(!this.produk.nama) {     
            this.$store.dispatch('produkById', this.$route.params['id'])
        }
    },
    data () {
        return {
            produk: this.$store.getters.produkById(this.$route.params['id'])
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