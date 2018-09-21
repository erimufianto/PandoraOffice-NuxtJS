<template>
<div class="container">

    <div class="container mt-4 mb-4">
        <div class="row"> 
            <div class="col-lg-8">
                <div v-if="loadedCart" class="cart_product_list">
                    <h3 class="cart_single_title">Pesanan Baru</h3>           
                    <div class="table-responsive-md">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Produk</th>
                                    <th scope="col"></th>
                                    <th scope="col">Harga</th>
                                    <th scope="col">Jumlah</th>
                                    <th scope="col">Total Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="media">
                                            <div class="d-flex">
                                                <img :src="loadedCart.image[0].thumbnail" style="width:100px;height:100px;">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <div class="media-body">
                                                <h4>{{ loadedCart.nama }}</h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>Rp {{ loadedCart.pricing.harga}}</p>
                                    </td>
                                    <td>
                                        <div class="quantity mt-1">
                                            <div class="custom">
                                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="icon_minus-06"></i></button>
                                                <input disabled v-model="jumlah_barang" type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty" style="width:110px;height:40px;">
                                                <button this.jumlah_barang="counter++" onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="icon_plus"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{{ loadedCart.pricing_harga * jumlah_barang }}</p>
                                    </td>                            
                                </tr>                        
                            </tbody>
                        </table>                        
                    </div>
                </div>    

                <div v-if="loadedCart" class="calculate_shoping_area">
                <h3 class="cart_single_title">Data Pengiriman</h3>
                    <div class="billing_details">
                        <form class="billing_inner row" method="post" id="contactForm" novalidate="novalidate">                                
                            <div class="form-group col-lg-12">
                                <label for="name">Alamat tujuan<span>*</span></label>
                                <input type="text" class="form-control" id="alamat" name="alamat" required>
                            </div>  
                            <div class="form-group col-lg-6">
                                <label for="name">Kelurahan</label>
                                <input type="text" class="form-control" id="kelurahan" name="kelurahan" required>
                            </div>
                            <div class="form-group col-lg-6">
                                <label for="name">Kecamatan</label>
                                <input type="text" class="form-control" id="kecamatan" name="kecamatan" required>
                            </div>                  
                            <div class="form-group col-lg-6">
                                <label for="name">Kode Pos<span>*</span></label>
                                <input type="number" min="0" class="form-control" id="zip" name="zip" required>
                            </div>                                           
                            <div class="form-group col-lg-6">
                                <label for="name">Kota<span>*</span></label>
                                <input type="text" class="form-control" id="kota" name="kota" required>
                            </div>
                            <div class="form-group col-lg-6">
                                <label for="name">Provinsi<span>*</span></label>
                                <input type="text" class="form-control" id="provinsi" name="provinsi" required>
                            </div>                
                            <div class="form-group col-lg-12">
                                <label for="name">Nama Penerima<span>*</span></label>
                                <input type="text" class="form-control" id="nama" name="nama" required>
                            </div>
                            <div class="form-group col-lg-6">
                                <label for="name">No. Telepon<span>*</span></label>
                                <input type="number" min="0" class="form-control" id="tlp" name="telepon" required>
                            </div>
                            <div class="form-group col-lg-12">
                                <button type="submit" class="detail_btn">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>         
            </div>
                                             
            <div v-if="loadedCart" class="col-lg-4">
                <div class="total_amount_area">
                    <div class="cart_totals">
                        <h3 class="cart_single_title">Biaya</h3>
                        <div class="cart_total_inner">
                            <ul>
                                <li><a><span>Total Harga</span> Rp {{ loadedCart.pricing_harga * jumlah_barang }}</a></li>
                                <li><a><span>Shipping Cost</span> Rp 250.000</a></li>
                                <li><a><span>Total Biaya</span> Rp 5.250.000</a></li>
                            </ul>
                        </div>
                        <div class="float-right">
                            <nuxt-link :to="{name: 'cart'}" class="submit_btn">Pesan</nuxt-link>
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
    props:['loadedCart'],
    data() {
        return {
            jumlah_barang: "",
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
                (this.loadedCart = res.data.data.detailBarangOffice[0]))
    },
    // methods: {
    //     addCart() {
    //         axios
    //             .post(
    //                 process.env.myapi + 
    //                     "graphiql?query=mutation{ pesan(id_barang:"+ 
    //                     this.produk.id +
    //                     ",nama_penerima:"+ 
    //                     this.nama_penerima +
    //                     ",biodata_penerima:{jalan:"+ 
    //                     this.jalan +
    //                     ",kelurahan:"+ 
    //                     this.kelurahan+
    //                     ",kecamatan:" + 
    //                     this.kecamatan+
    //                     ",kota:"+
    //                     this.kota +
    //                     ",kodepos:"+ 
    //                     this.kodepos +
    //                     ",no_telp:" + 
    //                     this.no_telp +
    //                     "},jumlah_barang:" + 
    //                     this.jumlah_barang +
    //                     ",id_user:" + this.id_user +
    //                     "){ id } }"
    //             )
    //             .then (res => 
    //                 (this.dataPesanan = res.data.data.pesan))
    //     }
    // }
}
</script>