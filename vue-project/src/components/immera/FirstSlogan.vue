<template>
    <div class="slogan">
        <div class="slogan-background">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
        </div>
        <div class="slogan-img">
            <div class="square front"></div>
            <div class="square behind"></div>
        </div>
        <div class="slogan-title">
            <h2>We design and deliver technology products that</h2>
            <h2>solve critical transformation challenges</h2>
            <h2>for modern organizations.</h2>
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
                grid-column: 12 / 13;
                grid-row: 2 / 3;
                justify-self: start;
                align-self: center;
                filter: blur(2px);

            }

            &:nth-child(2) {
                grid-column: 1 / 2;
                grid-row: 6 / 7;
                justify-self: end;
                align-self: end;
                filter: blur(4px);
            }

            &:nth-child(3) {
                grid-column: 3 / 4;
                grid-row: 1 / 2;
                justify-self: start;
                filter: blur(6px);
            }
        }
    }

    .slogan-img {
        position: relative;
        grid-row: 2 / 3;
        grid-column: 2 / span 10;
        align-self: end;
        justify-self: center;;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;

        .square {
            position: absolute;
            width: 2rem;
            height: 2rem;
            border-radius: 0.25rem;

            &.front {
                background-color: rgb(255, 255, 255);
                border-radius: 0.25rem;
                z-index: 3;
            }

            &.behind {
                background-color: rgb(142, 142, 142);
                border-radius: 0.25rem;
                bottom: -0.5rem;
                left: -0.5rem;
                z-index: 2;
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