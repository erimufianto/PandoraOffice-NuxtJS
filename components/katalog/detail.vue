<template>
<div>
<div class="container">

    <h3 class="cart_single_title">Detail Katalog</h3>
    <div class="row"> 
    <div class="col-lg-4">                      
        <img class="img-thumbnail" src="@/static/img/product/product-details/p-details-big-1.jpg" alt="">     
    </div>

    <div class="col-lg-5">
        <div class="product_details_text">
            <h3>Sepatu</h3>
            <h4><del>Rp 250.000</del> Rp 200.000</h4>
            <p>Sepatu keren warna putih.Sepatu keren warna putih.Sepatu keren warna putih.Sepatu keren warna putih.Sepatu keren warna putih.Sepatu keren warna putih.</p>
                <button type="submit" class="detail_btn" onclick="window.location.href = '/produk'" style="margin-right:10px;">Cari Produk</button>
                <button type="submit" class="submit_btn" onclick="window.location.href = '/produk/beli'">Beli</button>                       
        </div>
    </div>
    </div>

</div>  
</div>       
</template>

<script>
import katalog from '@/components/katalog/katalog'

export default {
    components: {
        katalog
    }
}
</script>

