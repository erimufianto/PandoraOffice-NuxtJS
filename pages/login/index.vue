<template>
<div>

    <!--================login Area =================-->
    <section class="login_area">
        <div class="container mt-4 mb-4">
            <div class="login_inner">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="login_title">
                            <h2>Login</h2>
                        </div>                        

                        <form class="login_form row mt-1" @submit.prevent="login">
                            <div class="col-lg-12 form-group">
                                <input class="form-control" type="tel" placeholder="No. Telepon" name="username" v-model="username" required>
                            </div>
                            <div class="col-lg-12 form-group">
                                <input class="form-control" type="password" placeholder="Password" name="password" v-model="password" required>
                            </div>
                            <div class="col-lg-5 form-group">
                                <td><button type="submit" class="detail_btn">Login</button></td>
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
import axios from "axios"

export default {
    layout: 'layoutindex',
    data() {
        return {
            isLogin: true,
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            if  (
                this.username !== null && 
                this.username !== "" &&
                this.password !== null &&
                this.password !== ""
            ) {
            axios
                .post(
                    process.env.myapi +
                        '/graphql?query=mutation{Authenticate(input: {username:"' +
                        this.username +
                        '",password:"' +
                        this.password +
                        '"}) {token,user {id, username, organizations{nama,scopes}}}}' 
                    )
                    .then(response => {
                        this.$store.commit("auth/setUser", response.data.data.Authenticate),
                        this.$store.commit("auth/setAuthenticated", response.data.data.Authenticate),
                        this.$router.push("/home");
                    })
                    .catch(error => console.log(error));
            }
        }
    }
}
</script>