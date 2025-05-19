<template>
    <div id="products">
        <div class="main-title">Our Suite of Products</div>
        <div class="product" v-for="(product) in products" :key="product.id" :id="product.id">
            <div class="background-decoration"></div>
            <div class="product-example">
                <img src="../../assets/images/immera/products/support_image.png" alt="">
            </div>
            <div class="details">
                <div class="title">
                    <img v-if="product.title[1] !== null" :src=product.title[1] alt="">
                    <h2 v-else-if="product.title[0]">{{ product.title[0] }}</h2>
                </div>
                <div class="subtitle">{{ product.subtitle }}</div>
                <div class="description">{{ product.description }}</div>
                <div class="btn arrow-btn" 
                    @mouseover="hover = true" 
                    @mouseleave="hover = false">
                    <button>
                        <span>Find out how</span>
                        <img src="../../assets/images/immera/header/arrow-btn.svg" alt="" :class="{ inverted: hover }">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Product {
        id: string;
        title: 
        [
            content: string | null,
            src: string | null,
        ];
        subtitle: string;
        description: string;
    }

const hover = ref(false);

const products: Product[] = [
    {
        id: "brightnow",
        title: [null, "/src/assets/images/immera/products/brightnow.svg"],
        subtitle: 'Service and Maintenance',
        description: 'A modular platform designed to streamline field service and maintenance workflows. Includes ticketing, video support with AR, real-time chat, task tracking, scheduling, and knowledge libraries – all in one place.',
    },
    {
        id: "onecore",
        title: ['OneCore', null],
        subtitle: 'Smart Facilities Management',
        description: 'Organize and monitor your physical assets and IoT devices. OneCore enables scheduling, rule-based automation, device integration (DALI, DMX, PJLink, Shelly), and upcoming digital signage and event-driven automation.',
    },
]
</script>

<style lang="scss" scoped>
    #products {
        .main-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 2rem;
            //text-align: center;
        }
        .product {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(8, 1fr);
            margin-top: 2rem;
            .background-decoration {
                grid-column: 8 / 13;
                grid-row: 1 / 9;
                background-color: #1a1a1a;
                border-radius: 1rem;
                z-index: -1;

            }

            .product-example {
                grid-column: 6 / 13;
                grid-row: 2 / 8;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .details {
                grid-column: 1 / 5;
                grid-row: 3 / 7;

                display: flex;
                flex-direction: column;
                gap: 1rem;

                .title {
                    img {
                        width: 50%;
                    }

                    h2 {
                        margin: 0;
                    }
                }

                .subtitle {
                    font-weight: bold;
                }

                .description {
                    font-size: 0.8rem;
                }

                .arrow-btn {
                    button {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0.3rem 0.2rem;

                        span {
                            font-size: 0.6rem;
                            margin-left: 0.5rem;
                        }

                        img {
                            width: 20%;
                            height: auto;
                            transition: filter 0.3s ease;
                        }
                    }
                }
                .arrow-btn:hover {
                    img {
                        filter: invert(1);
                    }
                }
            }
        }
    }
</style>