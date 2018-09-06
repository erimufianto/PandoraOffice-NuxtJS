<template>
<div>

    <!--================login Area =================-->
    <section class="login_area">
        <div class="container mt-4 mb-4">
            <div class="login_inner">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_title">
                            <h2>Create account</h2>
                        </div>

                        <form class="login_form row" method="post" @submit.prevent="register">
                            <div class="col-lg-12 form-group">
                                <input class="form-control" type="text" placeholder="No Telepon" name="username" v-model="username" required> 
                            </div>
                            <div class="col-lg-12 form-group">
                                <input class="form-control" type="text" placeholder="Nama" name="nama" v-model="nama" required>
                            </div>
                            <div class="col-lg-12 form-group">
                                <input class="form-control" type="password" placeholder="Password" name="password" v-model="password" required>
                            </div>                            
                            <div class="col-lg-12 form-group">
                                <button type="submit" class="detail_btn">Daftar</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================End login Area =================-->

</div>
</template>

<script>
import axios from "axios";

export default {
  layout: "layoutindex",
  data() {
    return {
      username: "",
      nama: "",
      password: "",
      error: null
    };
  },
  methods: {
    register() {
      axios
        .post(
          process.env.myapi +
            '/graphql?query=mutation{AddUser(username:"' +
            this.username +
            '",nama:"' +
            this.nama +
            '",password:"' +
            this.password +
            '"){id,nama,username}}'
        )
        .then(response => (window.location = "/login"))
        .catch(e => console.log(e));
    },
  }
};
</script>