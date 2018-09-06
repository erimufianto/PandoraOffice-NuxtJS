<template>
    <!--Header-->
    <header class="shop_header_area carousel_menu_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                    <div class="top_header_middle">
                        <nuxt-link to="/"><img src="img/logo.png" alt="logo-pandora" style="width:200px;height:37px;"></nuxt-link>
                    </div>    
                </div>

                <div class="col-lg-3">
                    <div class="float-md-right">
                        <div class="top_header_middle mt-1">
                            <nuxt-link to="login">Login</nuxt-link>
                            <nuxt-link to="register">Sign Up</nuxt-link>
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
                            <li class="nav-item"><nuxt-link to="/" class="nav-link">Home</nuxt-link></li>
                            <li class="nav-item"><nuxt-link to="/about" class="nav-link">About</nuxt-link></li>
                        </ul>                                              
                        </div>                
                    </nav>
                </div>    
            </div>     
        </div>                   
    </header>
</template>

<script>

</script>