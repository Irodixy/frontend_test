
<template>
    <div class="slogan">
        <div class="slogan-background">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
        </div>
        <div class="slogan-title">
            <h2><strong>Not every challenge fits a product.</strong></h2>
            <h2>That's why we build custom solutions that do.</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.slogan{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    position: relative;
    height: 100vh;

    .slogan-background {
        display: contents;
        position: absolute;
        width: 100%;
        height: 100%;
        .square {
            position: absolute;
            width: 2rem;
            height: 2rem;
            border: 2px solid #fff;
            background-color: #fff;
            border-radius: 0.25rem;

            &:nth-child(1) {
                grid-column: 1 / 2;
                grid-row: 3 / 4;
                justify-self: start;
                align-self: center;
                filter: blur(2px);

            }

            &:nth-child(2) {
                grid-column: 7 / 8;
                grid-row: 6 / 7;
                justify-self: end;
                align-self: end;
                filter: blur(4px);
            }

            &:nth-child(3) {
                grid-column: 12 / 13;
                grid-row: 2 / 3;
                justify-self: end;
                filter: blur(6px);
            }
        }
    }
    .slogan-title {
        grid-column: 2 / span 10;
        grid-row: 3 / 4;
        text-align: center;
        font-size: 1rem;
        color: white;
        margin-top: 2rem;
        z-index: 1;
    }
}
</style>