<template>
    <div class="navbar">
        <div class="navbar-title">
            <img src="" alt="">
        </div>
        <div class="navbar-group">

        </div>
        <div class="btn no-arrow-btn">
            <button>
                <span></span>
            </button>
        </div>
    </div>

    <div class="header">
        <div class="header-background">
            <img src="" alt="">
        </div>
        <div class="header-title">
            <h1></h1>
        </div>
        <div class="btn arrow-btn">
            <button>
                <span></span>
                <img src="" alt="">
            </button>
        </div>
    </div>

    <FirstSlogan />
    <br>

    <div class="products">
        <div class="title"></div>
        <div class="product">
            <div class="background-decoration"></div>
            <div class="product-example"></div>
            <div class="details">
                <div class="title"></div>
                <div class="subtitle"></div>
                <div class="description"></div>
                <div class="btn arrow-btn">
                    <button>
                        <span></span>
                        <img src="" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>


    <SecondSlogan />
    <br>
    <Services />
    <br>
    <Footer />
</template>

<script setup lang="ts">
    import Footer from '../components/immera/Footer.vue'
    import Services from '../components/immera/Services.vue'
    import SecondSlogan from '../components/immera/SecondSlogan.vue'
    import FirstSlogan from '../components/immera/FirstSlogan.vue'
</script>

<style lang="scss" scoped>
    
</style>