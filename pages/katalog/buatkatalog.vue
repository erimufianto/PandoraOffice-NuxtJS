<template>
<div>
    <div v-if="dataKatalog" class="container">
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
            <div class="cart_product_list">
            <h3 class="cart_single_title">Katalog Saya</h3>
                <div class="table-responsive-md">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Produk</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Harga Jual</th>
                                <th scope="col">Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>{{ dataKatalog.id }}</p></td>
                                <td>
                                    <div class="media">
                                        <div class="d-flex">
                                            <img :src="dataKatalog.image[0].thumbnail" style="width:50px;height:50px;" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h4>{{ dataKatalog.nama }}</h4>
                                        </div>
                                    </div>
                                </td>
                                <td><p>Rp {{ dataKatalog.pricing.harga }}</p></td>
                                <td><p>Rp <input type="number" min="0" max="9999999999" style="width:130px;height:40px;" placeholder="0"></p></td>
                                <td><nuxt-link :to="{name: 'katalog', params: {id: loadedDetail.id} }" class="detail_btn">Simpan</nuxt-link></td>                                
                            </tr>
                        </tbody>
                    </table>
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
    props: ['dataKatalog'],
    data() {
        return {
            loadedDetail: {
                id: this.$route.params.id
            }
        }
    },
    mounted(loadedDetail) {
        axios 
            .get(
                process.env.myapi + 
                    "/graphql?query=query{ detailBarangOffice(id:" + 
                    this.loadedDetail.id + 
                    "){ id nama sku image{ thumbnail image_ori } pricing{ harga harga_promo } } }"
            )
            .then (res => 
                (this.dataKatalog = res.data.data.detailBarangOffice[0]))
    },
    methods: {
        addKatalog() {
            axios
                .post(
                    process.env.myapi + 
                        "graphql?query=mutation{ newSellingList(id_user:123,id_barang:" + 
                        this.id + 
                        ",harga:" + 
                        this.harga_jual + "){ id } }"
                )
                .then (res => 
                    (this.SellingList = res.data.data.newSellingList))
        }
    }
}
</script>

