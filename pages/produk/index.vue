<template>
<div class="container">
    <div class="col-lg-6">
        <div class="top_header_left">
            <div class="input-group">
                <input class="form-control" type="text" name="search" v-model="searching" placeholder="Cari produk">
                <span class="input-group-btn">
                    <button class="btn btn-secondary" type="button" @click="search()"><i class="icon-magnifier"></i></button>
                </span>
            </div>
        </div>
    </div>

    <div class="container mt-4 mb-4">
        <div class="categories_main_inner">
            <div class="row ">

                <div class="col-lg-3 ">
                    <kategori :dataKategori="loadedKategori"/>
                </div>
                <div class="col-lg-9">
                    <div class="showing_fillter">
                        <div class="row m0">
                            <div class="first_fillter">
                                <h4>Showing {{ page }} from {{ totalPage }} pages</h4>
                            </div>
                            <div class="secand_fillter">
                                <h4>Urutkan :</h4>
                                <select class="selectpicker">
                                    <option>Nama</option>
                                    <option>Harga</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <listproduk :dataBarang="loadedProduk"/>
    
                    <div v-if="loadedCount">
                        <pagination
                            :totalCount=loadedCount.jumlah
                            :page=page
                            :totalPage=totalPage
                            @PAGE_CLICKED="next"/>
                    </div>
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
import pagination from '@/components/pagination/pagination'

export default {
    middleware: 'auth',
    layout: 'layouthome',
    components: {
        listproduk,
        kategori,
        pagination
    },    
    props: {
        dataKategori: {
            type: Array,
            required: true
        }
    },
    computed: {
        dataBarang: function() {
            return this.dataBarang.filter((loadedProduk) => {
                return loadedProduk.nama.match(this.search);
            })
        }
    },
    data(){
        return {
            loadedProduk: [],
            search: '',
            perPage: 6,
            totalPage: 0,
            page:1,
            skip:0,
            sortKey: 'nama',
            reverse: false
        }
    },
    mounted() {
        let newPage = this.$route.query.page;
        if(newPage>0){
            this.page=newPage;
        }
        this.skip = (this.page - 1) * this.perPage;
        this.fetch();

        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
    methods: {
        fetch () {
            let vm = this;
            axios.get(
                process.env.myapi + 
                "/graphql?query=query{ barangOffice(skip:"+vm.skip+",take:"+vm.perPage+"){ id sku nama deskripsi pricing{ id sku_barang tanggal harga harga_promo } image{ id thumbnail image_ori id_barang } },kategori{ id nama jenis tag{ id nama } } ,countBarangOffice{ jumlah } }"
            ).then(function (result){
                vm.loadedProduk= result.data.data.barangOffice;
                vm.loadedKategori= result.data.data.kategori;
                vm.loadedCount= result.data.data.countBarangOffice;
                vm.totalPage= Math.ceil(result.data.data.countBarangOffice.jumlah/vm.perPage);
            })       
        },
        next(page){
            // this.page = page;
            // this.skip = (this.page - 1) * this.perPage;
            this.$nuxt._router.replace({path: '/produk?page='+page});
            //this.fetch();
            window.location.reload(true);
        },
        sortBy: function(sortKey) {
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            this.sortKey = sortKey;
        }
    }
}
</script>