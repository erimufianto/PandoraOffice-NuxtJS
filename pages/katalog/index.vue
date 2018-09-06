<template>
<div class="container">

    <div class="col-lg-6">
        <div class="top_header_left">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                <span class="input-group-btn">
                <button class="btn btn-secondary" type="button"><i class="icon-magnifier"></i></button>
                </span>
            </div>
        </div>
    </div>

    <div class="container mt-4 mb-4">
        <katalog :dataBarang="loadedProduk"/>
    </div>
    
</div>
</template>

<script>
import axios from 'axios'
import katalog from '@/components/katalog/katalog'

export default {
    layout: 'layouthome',
    components: {
        katalog
    }
}
</script>

