<template>
    <div class="header">
        <div class="header-background">
            <img src="../../assets/images/immera/header/retangulo3.png" alt="">
        </div>
        <div class="header-title">
            <h1 class="bold"><strong>Building the tech behind</strong></h1>
            <h1 class="simple">smarter operations.</h1>
        </div>
        <div class="btn arrow-btn" 
            @mouseover="hover = true" 
            @mouseleave="hover = false">
            <button>
                <span>Find out how</span>
                <img src="../../assets/images/immera/header/arrow-btn.svg" alt="" :class="{ inverted: hover }">
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const hover = ref(false);
</script>

<style lang="scss" scoped>
    .header {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(8, 1fr);
        gap: 0.5rem;
        margin-top: 1rem;
        font-size: 0.6rem;
        position: relative;

        .header-background {
            grid-column: 1 / 13;
            grid-row: 1 / 9;
            align-self: center;
            justify-self: start;
            height: 100%;
            width: 100%;
            z-index: -1;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .header-title {
            grid-column: 1 / 10;
            grid-row: 5 / 7;
            align-self: center;
            color: white;
            margin-left: 1rem;

            h1 {
                font-size: 2rem;
                margin: 0;
            }
        }

        .btn {
            grid-column: 1 / 4;
            grid-row: 7 / 8;
            align-self: center;
            justify-self: start;
            margin-left: 1rem;
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
    }
</style>