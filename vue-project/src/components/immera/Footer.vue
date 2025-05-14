<template>
    <div class="footer">
        <div class="info">
            <div class="logo">
                <img src="../../assets/images/immera/immera.svg" alt="">
            </div>
            <!-- <div class="chapters"> -->
                <div class="products">
                    <div class="title">Products</div>
                    <a href="">BrightNow</a>
                    <a href="">Product 2</a>
                    <a href="">Product 3</a>
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
                    <img src="../../assets/images/immera/social-media-icons/youtube.png" alt="" class="inverted" style="height:1rem;">
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
            grid-template-columns: repeat(auto, 1fr);
            grid-template-rows: repeat(auto, 1fr);
            grid-template-areas:
                'logo products services social-media'
                '. products services .'
                '. products services .'
                '. products services .'
                '. products services .';

            place-items: center;
            place-content: stretch;


            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: flex-start;
            gap: 2rem;

            .logo {
                grid-area: logo;
                height: 2rem;
                width: auto;
                display: flex;
                // grid-template-rows: repeat(8, 1fr);
                img {
                    // grid-row: 1/2;
                    width: 100%;
                    height: 100%;
                }
            }

            // .chapters {
                // flex: 1;
                // display: flex;

                // grid-row: 1 / 2;
                // grid-column: 2 / 3;
                // display: contents;

                // flex-direction: row;
                // flex-wrap: nowrap;
                // justify-content: flex-start;
                // gap: 4rem;

                // .products,
                // .services {
                //     // grid-row: 1 / 2;
                //     // grid-column: 2 / 3;

                //     display: contents;
                //     // grid-template-rows: repeat(8, 1fr);
                //     flex-direction: column;
                //     // gap: 1rem;

                    // .title {
                    //     font-weight: bold;
                    //     text-transform: uppercase;
                    //     a {
                    //         font-size: 0.9rem; // Adjust font size for the links
                    //     }
                    // }
                // }
                .products {
                    grid-area: products;
                    display: contents;
                    // &.title {
                    //     grid-area: title-products;
                    // }
                    // &.a {
                    //     grid-area: products;
                    // }
                }
                .services {
                    grid-area: services;
                    // &.title {
                    //     grid-area: title-services;
                    // }
                    // &.a {
                    //     grid-area: services;
                    // }
                }
                .products,
                .services {
                    display: grid;
                    grid-template-rows: repeat(5, auto);
                }
            // }
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