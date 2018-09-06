<template>
<div>
<div class="container">

    <div class="container mt-4 mb-4">
        <cart/>
    </div>

</div>  
</div>       
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

