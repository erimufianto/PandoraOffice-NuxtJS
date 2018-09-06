<template>
<div class="container">

    <div class="container mt-4 mb-4">
        <div class="calculate_shoping_area">
            <detail-pesanan/>
        </div>  
    </div>

</div>
</template>

<script>
import DetailPesanan from '@/components/produk/detail-pesanan'

export default {
    layout: 'layouthome',
    components: {
        DetailPesanan
    }    
}
</script>

