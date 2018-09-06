<template>
<div class="container">
    <div class="col-lg-6">
        <div class="top_header_left">
            <div class="input-group">
                <input type="text" id="myInput" onkeyup="Searching" class="form-control" placeholder="Search" aria-label="Search">
                <span class="input-group-btn">
                    <button class="btn btn-secondary" type="button"><i class="icon-magnifier"></i></button>
                </span>
            </div>
        </div>
    </div>

    <div class="container mt-4 mb-4">
        <div class="categories_main_inner">
            <div class="row ">

            <div class="col-lg-3 ">
                <kategori/>
            </div>
            <div class="col-lg-9 ">
                <listproduk :dataBarang="loadedProduk"/>
            </div>

            </div>
        </div>  
    </div>
</div>
</template>

<script>
import axios from 'axios'
import listproduk from '@/components/produk/ListProduk'
import kategori from '@/components/produk/kategori'

export default {
    layout: 'layouthome',
    components: {
        listproduk,
        kategori
    },    
    async asyncData(context, callback) {
        const { data } = await axios.get(
        process.env.myapi + 
        "/graphql?query=query{ barang{ id sku nama dimensi{ panjang lebar tinggi } deskripsi pricing{ id sku_barang tanggal harga harga_promo } image{ id thumbnail image_ori id_barang } } }"
    );
    callback(null, {
        loadedProduk: data.data.barang
        });
    },
    // methods: { 
    //     Searching() {
    //     var input, filter, dataBarang, loadedProduk, listproduk, nama, i;
    //         input = document.getElementById("myInput");
    //         filter = input.value.toUpperCase();
    //         nama = document.getElementById("dataBarang");
    //         tr = listproduk.getElementsByTagName("tr");
    //         for (i = 0; i < tr.length; i++) {
    //             td = tr[i].getElementsByTagName("td")[0];
    //             if (td) {
    //             if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //                 tr[i].style.display = "";
    //             } else {
    //                 tr[i].style.display = "none";
    //             }
    //             }       
    //         }
    //     }
    // }
}
</script>