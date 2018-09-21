<template>
<div>

    <div v-if="riwayatCart" class="container mt-4 mb-4">
        <h3 class="cart_single_title">Daftar Pesanan</h3>                                                       

        <div class="table-responsive-md">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">ID Pesanan</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Nama Pemesan</th>
                        <th scope="col">Status</th>
                        <th scope="col">Detail Pesanan</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>{{ 1 }}</p></td>
                        <td><p align="left">{{ riwayatCart.id }}</p></td>
                        <td><p>{{ riwayatCart.tanggal }}</p></td>
                        <td><p>{{ riwayatCart.pengiriman.nama_penerima }}</p></td>
                        <td><p class="text-success">{{ riwayatCart.status.status }}</p></td>
                        <td><nuxt-link to="/cart/detail"><i class="fa fa-pencil-square-o" style="font-size:22px;margin-top:3px;"></i></nuxt-link></td>
                        <td><a @click="deleteProduk(id)"><i class="fa fa-trash" style="font-size:22px;margin-top:3px;color:red"></i></a></td>
                    </tr>       
                </tbody>
            </table>
        </div>
    </div>

    <div v-if="!riwayatCart" class="container">
        
        <section class="emty_cart_area p_100">
            <div class="container">
                <div class="emty_cart_inner">
                    <i class="icon-handbag icons"></i>
                    <h3>Anda tidak memiliki daftar pesanan</h3>
                    <h4>Kembali ke <a href="/produk">produk</a></h4>
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
    props:['riwayatCart'],
    data() {
        return {
            jumlah_barang: "",
            
        }
    },
    mounted(riwayatCart) {
        axios 
            .get(
                process.env.myapi + 
                    "/graphql?query=query { pesananHeader(username: "+
                    this.username +
                    ") { id nomor tanggal status { status } pengiriman { nama_penerima } } }"
            )
            .then (res => 
                (this.riwayatCart = res.data.data.pesananHeader[0]))
    }
}
</script>