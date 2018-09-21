<template>
<div>

    <div class="categories_sidebar">
        <aside class="l_widgest l_p_categories_widget">
            <div class="l_w_title">
                <h3>Kategori</h3>
            </div>
           
            <ul  class="navbar-nav" v-for="(kategori) in dataKategori"
                        :key="kategori.id"
                        :id="kategori.id"
                        :nama="kategori.nama">
                <li class="nav-item dropdown">
                    <a  class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ kategori.nama }}
                        <i class="icon_plus" aria-hidden="true"></i>
                        <i class="icon_minus-06" aria-hidden="true"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li class="nav-item"><a class="nav-link" href="#">{{ kategori.tag[0].nama }}</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
        <aside class="l_widgest l_color_widget">
            <div class="l_w_title">
                <h3>Warna</h3>
            </div>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>                
            </ul>
        </aside>
    </div>

</div>
</template>

<script>
export default {
    name: 'kategori',
    props: {
        id: {
            type: Number,
            required: true
        },
        nama: {
            type: String,
            required: true
        },
        dataKategori: {
            type: Array,
            required: true
        },
    }
}
</script>

