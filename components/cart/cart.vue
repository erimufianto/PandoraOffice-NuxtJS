<template>
<div>
<div class="container">
    <h3 class="cart_single_title">Daftar Pesanan</h3>                                                       

        <div class="table-responsive-md">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">ID Pesanan</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Status</th>
                        <th scope="col">Detail</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>1</p></td>
                        <td><p align="left">2018.0708.0003</p></td>
                        <td><p>09-Juli-2018</p></td>
                        <td><p class="text-success">Done</p></td>
                        <td><nuxt-link to="/cart/detail"><i class="fa fa-pencil-square-o" style="font-size:22px;margin-top:3px;"></i></nuxt-link></td>
                        <td><a @click="deleteProduk(id)"><i class="fa fa-trash" style="font-size:22px;margin-top:3px;color:red"></i></a></td>
                    </tr>       
                </tbody>
            </table>
        </div>
</div>
</div>
</template>

<script>
export default {
    methods: {
      deleteProduk (id) {
        console.log(id)
        this.$store.dispatch('removeProduct', id)
      }
    }
}
</script>
