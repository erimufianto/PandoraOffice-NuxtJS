<template>
<div>
<div class="container">

    <h3 class="cart_single_title">Data Pengiriman</h3>
        <div class="billing_details">
            <form class="billing_inner row" action="cart" method="post" id="contactForm" novalidate="novalidate">                                
                <div class="form-group col-lg-12">
                    <label for="name">Alamat tujuan</label>
                    <input type="text" class="form-control" id="alamat" name="alamat" disabled="">
                </div>  
                <div class="form-group col-lg-6">
                    <label for="name">Kelurahan</label>
                    <input type="text" class="form-control" id="kelurahan" name="kelurahan" disabled="">
                </div>
                <div class="form-group col-lg-6">
                    <label for="name">Kecamatan</label>
                    <input type="text" class="form-control" id="kecamatan" name="kecamatan" disabled="">
                </div>             
                <div class="form-group col-lg-6">
                    <label for="name">Kode Pos</label>
                    <input type="number" min="0" class="form-control" id="zip" name="zip" disabled="">
                </div>                                                
                <div class="form-group col-lg-6">
                    <label for="name">Kota</label>
                    <input type="text" class="form-control" id="kota" name="kota" disabled="">
                </div>
                <div class="form-group col-lg-6">
                    <label for="name">Provinsi</label>
                    <input type="text" class="form-control" id="provinsi" name="provinsi" disabled="">
                </div>                
                <div class="form-group col-lg-12">
                    <label for="name">Nama Penerima</label>
                    <input type="text" class="form-control" id="nama" name="nama" disabled="">
                </div>
                <div class="form-group col-lg-6">
                    <label for="name">No. Telepon</label>
                    <input type="number" min="0" class="form-control" id="tlp" name="telepon" disabled="">
                </div>
            </form>
        </div>

</div>  
</div>       
</template>

<script>
import cart from '@/components/cart/cart'

export default {
    components: {
        cart
    }
}
</script>