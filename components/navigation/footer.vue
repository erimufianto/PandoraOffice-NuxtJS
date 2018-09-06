<template>
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
</template>