<template>
<div>
  <div>
      <cover/>
  </div>
  <div class="container mt-4 mb-4">
      <listproduk :dataBarang="loadedProduk"/>        
  </div>
  <div class="container mb-4">
      <kategori/>
  </div>
</div>
</template>

<script>
import axios from "axios";
import listproduk from "@/components/produk/ListProduk";
import cover from "@/components/carousel/cover"
import kategori from "@/components/carousel/kategori"

export default {
  layout: "layouthome",
  components: {
    listproduk,
    cover,
    kategori
  },
  async asyncData(context, callback) {
    const { data } = await axios.get(
      process.env.myapi + 
      "/graphql?query=query{barangOffice{ id sku nama deskripsi image {id,thumbnail,image_ori,id_barang}pricing{ id sku_barang tanggal harga harga_promo } kategori{ id_barang id_kategori kategori_nama{ id nama jenis } } } }"
    );
    callback(null, {
      loadedProduk: data.data.barangOffice
    });
  }
};
</script>

