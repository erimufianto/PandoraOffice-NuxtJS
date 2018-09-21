<template>
<div>
<div class="container">

    <section class="login_area">
        <div class="container mt-4 mb-4">
            <div class="login_inner">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_title">
                            <h2>Profil</h2>
                        </div>
                        <form class="login_form">
                            <div class="col-lg-12 form-group">
                                <input class="form-control" {{ loggedInUser.nama }}}>
                            </div>
                            <div class="scol-lg-12 form-group">
                                <input class="form-control" {{ loggedInUser.telepon}}>
                            </div>
                            <div class="col-lg-5 form-group">
                                <td><button type="submit" class="detail_btn" onclick="window.location.href = '/edit'">Edit</button></td>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>  
</div>       
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    layout: "layouthome",
    computed: {
        ...mapGetters(['loggedInUser'])
    }      
}
</script>
