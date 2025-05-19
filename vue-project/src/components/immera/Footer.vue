<template>
    <div class="footer">
        <div class="info">
            <div class="logo">
                <img src="../../assets/images/immera/immera.png" alt="">
            </div>
            <!-- <div class="chapters"> -->
                <div class="products">
                    <div class="title">Products</div>
                    <a href="#brightnow">BrightNow</a>
                    <a href="#onecore">OneCore</a>
                </div>
                <div class="services">
                    <div class="title">Services</div>
                </div>
            <!-- </div> -->
            <div class="social-media">
                <div class="facebook">
                    <img src="../../assets/images/immera/social-media-icons/facebook.png" alt="" class="inverted">
                </div>
                <div class="instagram">
                    <img src="../../assets/images/immera/social-media-icons/instagram.png" alt="" class="inverted">
                </div>
                <div class="twitter">
                    <img src="../../assets/images/immera/social-media-icons/twitter.png" alt="" class="inverted">
                </div>
                <div class="youtube">
                    <img src="../../assets/images/immera/social-media-icons/youtube.png" alt="" class="inverted">
                </div>
            </div>
        </div>
        <div class="extra-info">
            <div class="links">
                <a href="">Support</a>
                <a href="">Cookies</a>
                <a href="">Legal</a>
            </div>
            <p>@2025 immera</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer {
        display: grid;
        grid-template-rows: auto 1fr;
        height: 0.5vh;

        .info {
            grid-row: 1 / 2;
            display: grid;
            grid-template-areas:
                'logo products services social-media'
                '. products services .';
            gap: 2rem;

            .logo {
                grid-area: logo;
                height: 2rem;
                width: auto;
                display: flex;
                position: relative;
                bottom: 0.5rem;
                img {
                    height: 100%;
                    top: 1rem;
                }
            }
            .products {
                grid-area: products;
            }
            .services {
                grid-area: services;
            }
            .products,
            .services {
                display: grid;
                grid-template-rows: repeat(5, auto);
                gap: 1rem;
            }
            .social-media {
                grid-area: social-media;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                gap: 1rem;
                height: 1rem;
                div {
                    // width: auto;
                    // height: 1rem;
                    img {
                        width: auto;
                        height: 1rem;
                    }
                }
            }
        }

        .extra-info {
            grid-row: 2 / 3;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #262626;
            .links {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                gap: 1rem;
            }
        }
    }
</style>