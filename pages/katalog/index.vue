<template>
<div>
    <div v-if="listKatalog" class="container">
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
                                <th scope="col">ID</th>
                                <th scope="col">Produk</th>
                                <th scope="col">Harga Jual</th>
                                <th scope="col">Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>{{ listKatalog.id }}</p></td>
                                <td>
                                    <div class="media">
                                        <div class="d-flex">
                                            <img   style="width:50px;height:50px;" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h4>{{ listKatalog.nama }}</h4>
                                        </div>
                                    </div>
                                </td>
                                <td><p>Rp {{ listKatalog.harga }}</p></td>
                                <td><nuxt-link :to="{name: 'produk-id-detail', params: {id: listKatalog.id}}" class="detail_btn">Detail</nuxt-link></td>
                                <td><a @click="deleteKatalog(listKatalog)"><i class="fa fa-remove" style="font-size:25px;margin-top:3px;color:red"></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>    
    </div>

    <div v-if="!listKatalog" class="container">
        
        <section class="emty_cart_area p_100">
            <div class="container">
                <div class="emty_cart_inner">
                    <i class="icon-basket"></i>
                    <h3>Anda tidak memiliki katalog</h3>
                    <h4>Kembali ke <a href="/produk">PRODUK</a></h4>
                </div>
            </div>
        </section>

    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'layouthome',
    props: ['listKatalog'],
    mounted() {
        axios 
            .get(
                process.env.myapi + 
                    "/graphql?query=query{ tampilKatalog(id_user:123){ id id_user harga barang{ id nama image{ thumbnail } } } }"
            )
            .then (res => 
                (this.listKatalog = res.data.data.tampilKatalog))
    },
    // methods: {
    //     deleteKatalog(dataKatalog) {
    //         this.$store.commit('deleteKatalog', dataKatalog)
    //         this.$toast.open({
    //             message: 'katalog telah dihapus dari katalog',
    //             type: 'is-danger'
    //         })
    //     }
    // }
}
</script>

