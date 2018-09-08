<template>
<div class="container">

    <div class="container mt-4 mb-4">
        <div class="calculate_shoping_area">
            <h3 class="cart_single_title">Data Pengiriman</h3>
                <div class="billing_details">
                    <form class="billing_inner row" action="beli" method="post" id="contactForm" novalidate="novalidate">                                
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
                            <button type="submit" class="detail_btn" onclick="window.location.href = '/cart'">Simpan</button>
                        </div>
                    </form>
                </div>
        </div>  
    </div>

</div>
</template>

<script>

export default {
    layout: 'layouthome',
 
}
</script>

