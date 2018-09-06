<template>
    <!--Header-->
    <header class="shop_header_area carousel_menu_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="carousel_top_header">                        
                        <nuxt-link class="navbar-brand" to="/home/"><img src="@/static/img/logo.png" alt="logo-pandora" style="width:200px;height:37px;"></nuxt-link>                                               
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="float-md-right">
                        <div class="top_header_middle">
                            <a href="/">Logout</a>
                        </div>
                    </div>    
                </div> 
                                               
                <div class="container">                
                    <nav class="navbar navbar-expand-lg navbar-light bg-light mt-1">                
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item"><nuxt-link to="/home" class="nav-link">Home</nuxt-link></li>
                            <li class="nav-item"><nuxt-link to="/produk" class="nav-link">Produk</nuxt-link></li>
                            <li class="nav-item"><nuxt-link to="/katalog" class="nav-link">Katalog</nuxt-link></li>
                            <li class="nav-item"><nuxt-link to="/cart" class="nav-link">Cart</nuxt-link></li>
                            <li class="nav-item"><nuxt-link to="/about" class="nav-link">About</nuxt-link></li>
                        </ul>   
                        <ul class="navbar-nav justify-content-end">
                            <li class="user_icon"><nuxt-link to="/user"><i class="icon-user icons"></i></nuxt-link></li>
                            <li><nuxt-link to="/saldo"><i class="icon-handbag icons"></i></nuxt-link></li>
                        </ul>                                          
                        </div>                
                    </nav>
                </div> 
            </div>
        </div>                          
    </header>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout();
        }
    }
}
</script>
