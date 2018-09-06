<template>
<div>
<div class="container">
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
                        <td><p>1</p></td>
                        <td>
                            <div class="media">
                                <div class="d-flex">
                                    <img src="@/static/img/product/cart-product/cart-1.jpg" style="width:50px;height:50px;" alt="">
                                </div>
                                <div class="media-body">
                                    <h4>Nikey Bag</h4>
                                </div>
                            </div>
                        </td>
                        <td><p>Rp 250.000</p></td>
                        <td><p>Rp <input type="number" min="0" max="9999999999" style="width:130px;height:40px;" placeholder="0"></p></td>
                        <td><button type="submit" class="detail_btn" onclick="window.location.href = '/katalog/detail'">Detail</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        nama: {
            type: String,
            required: true
        },
        harga: {
            type: Number,
            required: true
        },
        harga_promo: {
            type: Number,
            required: true
        },
        thumbnail: {
            type: String,   
            required: true
        }
    },
}
</script>
