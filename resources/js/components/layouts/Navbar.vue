<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand" href="">Spa Ecommerce</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" href="">About </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/service" class="nav-link" href="">Service</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link" href="">Contact</router-link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
