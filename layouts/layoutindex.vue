<template>
  <div>
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

    <nuxt/>

    <footer class="footer">
        <div class="container">
            <div class="footer_widgets">
                <div class="row">
                    <div class="col-lg-7 col-md-4 col-6">
                        <img src="@/static/img/logo.png" style="width:400px;height:70px;" alt="logo-pandora">
                    </div>
                    <div class="col-lg-2 col-md-4 col-6"></div>
                    <div class="col-lg-2 col-md-4 col-6">
                        <aside class="f_widget link_widget f_info_widget">
                            <div class="f_w_title">
                                <h3>Information</h3>
                            </div>
                            <ul>
                                <li><nuxt-link to="#">Tentang Kami</nuxt-link></li>
                                <li><nuxt-link to="#">Kebijakan Privasi</nuxt-link></li>
                                <li><nuxt-link to="#">Syarat & Ketentuan</nuxt-link></li>
                                <li><nuxt-link to="#">Customer Service</nuxt-link></li>
                                <li><nuxt-link to="#">Cara Deposit</nuxt-link></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
            <div class="footer_copyright">
                <h5>© <script>document.write(new Date().getFullYear());</script> <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <nuxt-link to="https://colorlib.com" target="_blank">Colorlib</nuxt-link>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                </h5>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>

export default {
  middleware: "auth",
}
</script>

<style>

</style>

