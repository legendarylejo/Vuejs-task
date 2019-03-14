<template>
    <div>
        <div class="container-fluid" >
            <h1 class="header-text">MY BLOG</h1>
        </div>
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-2 px-1 bg-dark sidebar">
                        <div class="py-2 sticky-top flex-grow-1">
                            <div class="nav flex-sm-column nav-text">
                                <router-link to="/" href="#" class="nav-link">HOME</router-link>
                                <router-link to="/about" href="#" class="nav-link">ABOUT US</router-link>
                                <router-link to="/style" href="#" class="nav-link">STYLE</router-link>
                                <router-link to="/contact" href="#" class="nav-link">CONTACT US</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
    .sidebar {
        height: 83vh !important;
    }
    .nav-text {
        font-size: 28px;
    }
    .header-text {
        /* color: #A6CEE0; */
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
