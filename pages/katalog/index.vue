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
        <div class="cart_product_list">
        <h3 class="cart_single_title">Katalog Saya</h3>
            <div class="table-responsive-md">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">katalog</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Harga Jual</th>
                            <th scope="col">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="katalog in dataKatalog"
                            :key="katalog.id"
                            :id="katalog.id"
                            :nama="katalog.nama"
                            :sku="katalog.sku"
                            :harga="katalog.pricing.harga"
                            :harga_input="katalog.pricing.harga_input"
                            :thumbnail="katalog.image[0].thumbnail">
                            <td><p>{{ katalog.id }}</p></td>
                            <td>
                                <div class="media">
                                    <div class="d-flex">
                                        <img :src="katalog.image[0].thumbnail" style="width:50px;height:50px;" alt="">
                                    </div>
                                    <div class="media-body">
                                        <h4>{{ katalog.nama }}</h4>
                                    </div>
                                </div>
                            </td>
                            <td><p>{{ katalog.pricing.harga }}</p></td>
                            <td><p>Rp <input type="number" min="0" max="9999999999" style="width:130px;height:40px;" placeholder="0"></p></td>
                            <td><button type="submit" class="detail_btn" onclick="window.location.href = '/katalog/detail'">Detail</button></td>
                            <td><a @click="deleteProduk(id)"><i class="fa fa-trash" style="font-size:22px;margin-top:3px;color:red"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'layouthome',
    mounted(katalog) {
        axios 
            .post(
                process.env.myapi + 
                    "graphiql?query=mutation{ newSellingList(user_id:" + this.user.id + ",sku_barang:" +  this.sku + ",harga:" + this.harga_input+ "){ id user_id sku_barang harga } }"
            )
            .then (res => (this.dataKatalog = res.data.data.newSellingList))
    },
    computed: {
        katalog() {
            return this.$store.getters.katalog
        },
    },
    methods: {
        removeItem(item) {
            this.$store.commit('removeItem', item)
            this.$toast.open({
                message: 'katalog telah dihapus dari katalog',
                type: 'is-danger'
            })
        }
    }
}
</script>

