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
    },
    // data(){
    //     return {
    //         currentSort: 'nama',
    //         currentSortDir: 'asc'
    //     }
    // },
    // methods: {
    //     sort: function(s) {
    //         if(s === this.currentSort) {
    //             this.currentSortDir = this.currentSortDir ==='asc'?'desc':'asc';                
    //         }
    //         this.currentSort = s;
    //     }
    // },
    // computed: {
    //     dataBarang: function(){
    //         return this.produk.sort((a,b) => {
    //             let modifier = 1;
    //             if(this.currentSortDir === 'desc') modifier = -1;
    //             if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
    //             if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
    //             return 0;
    //         })
    //     }
    // }
}
</script>