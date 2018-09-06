<template>
<div>
<div class="container">

    <div class="cart_product_list">
        <h3 class="cart_single_title">Buat Pesanan Baru</h3>   
        <div class="row">                              
        <div class="col-lg-8">
            <div class="table-responsive-md">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Produk</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>1</p></td>
                            <td>
                                <div class="media">
                                    <div class="d-flex">
                                        <img src="@/static/img/product/cart-product/cart-1.jpg" style="width:50px;height:50px;" alt="">
                                    </div>
                                    <div class="media-body">
                                        <h4>Mens Nike Bag</h4>
                                    </div>
                                </div>
                            </td>
                            <td><p>Rp 250.000</p></td>
                            <td>
                                <div class="quantity mt-1">
                                    <div class="custom">
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="icon_minus-06"></i></button>
                                        <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty" style="width:100px;height:40px;">
                                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="icon_plus"></i></button>
                                    </div>
                                </div>
                            </td>
                            <td><p>Rp 250.000</p></td>
                            <td><button type="submit" class="cancel_btn" onclick="window.location.href = '#'">X</button></td>
                        </tr>                        
                    </tbody>
                </table>                        
            </div>
        </div>
        <div class="col-lg-4">
            <div class="total_amount_area">
                <div class="cart_totals">
                    <h3 class="cart_single_title">Biaya</h3>
                    <div class="cart_total_inner">
                        <ul>
                            <li><a><span>Biaya Produk</span> Rp 5.000.000</a></li>
                            <li><a><span>Ongkir</span> Rp 250.000</a></li>
                            <li><a><span>Total</span> Rp 5.250.000</a></li>
                        </ul>
                    </div>
                    <div class="float-left">
                        <button type="submit" class="detail_btn" onclick="window.location.href = 'detail-pesanan'">Detail</button>
                    </div>
                    <div class="float-right">
                        <button type="submit" class="submit_btn" onclick="window.location.href = '/cart/'">Pesan</button>
                    </div>
                </div>
            </div>              
        </div>
        </div>
    </div>

</div>  
</div>       
</template>

<script>
import display from '@/components/produk/display'

export default {
    components: {
        display
    }
}
</script>

