<template>

    <section class="product_compare_area">
    <div class="container mt-4 mb-4"> 
        <h3 class="cart_single_title">Saldo</h3>
        <div class="compare_table">
            <div class="table-responsive-md">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Debet</th>
                            <th scope="col">Kredit</th>
                            <th scope="col">Saldo</th>
                            <th scope="col">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2018-08-14 13:55:08</td>
                            <td></td>
                            <td>Rp 500.000</td>
                            <td>Rp 1.000.000</td>
                            <td>On Hold</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2018-08-14 13:55:08</td>
                            <td>Rp 500.000</td>
                            <td></td>
                            <td>Rp 500.000</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

</template>

<script>
import cart from '@/components/cart/cart'

export default {
    layout: 'layouthome',
    components: {
        cart
    }
}
</script>
