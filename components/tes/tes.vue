<template>
<div class="container">

    <div class="col-lg-12">
        <div class="categories_product_area">                   
            <div class="row row_disable">                            
                <display
                    v-for="produk in dataBarang"
                    :key="produk.id"
                    :id="produk.id"
                    :nama="produk.nama"
                    :harga="produk.pricing.harga"
                    :harga_promo="produk.pricing.harga_promo"
                    :deskripsi="produk.deskripsi"
                    :thumbnail="produk.image[0].thumbnail"/>                                     
            </div>

            <nav aria-label="Page navigation example" class="pagination_area">
                <ul class="pagination">
                    <li class="page-item previous"><a class="page-link" href="#"><i class="fa fa-angle-left" aria-hidden=""></i></a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item next"><a class="page-link" href="#"><i class="fa fa-angle-right" aria-hidden=""></i></a></li>
                </ul>
            </nav>
        </div>
    </div>

</div>      
</template>

<script>
import display from '@/components/produk/display'

export default {
    components: {
        display
    },
    props: {
        dataBarang: {
            type: Array,
            required: true
        },
    }
}
</script>