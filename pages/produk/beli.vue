<template>
<div class="container">

    <div class="container mt-4 mb-4">
        <beli/>
    </div>
    
</div>
</template>

<script>
import axios from 'axios'
import beli from '@/components/produk/beli'

export default {
    layout: 'layouthome',
    components: {
        beli
    }
}
</script>

