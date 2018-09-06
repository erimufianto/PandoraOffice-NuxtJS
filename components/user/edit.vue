<template>
<div>
<div class="container">

    <section class="login_area">
        <div class="container mt-4 mb-4">
            <div class="login_inner">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_title">
                            <h2>Edit Profil</h2>
                        </div>
                        <form class="login_form row">
                            <div class="col-lg-12 form-group">
                                <input class="form-control" type="text" placeholder="Nama">
                            </div>
                            <div class="col-lg-12 form-group">
                                <input class="form-control" type="text" placeholder="Alamat">
                            </div>
                            <div class="col-lg-5 form-group">
                                <td><button type="submit" class="detail_btn" onclick="window.location.href = '/home/'">Simpan</button></td>
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

export default {
    layout: 'layouthome',
}
</script>