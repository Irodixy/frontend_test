<template>
    <nav>
        <div class="nav-group hamburger">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/playground">Playground</RouterLink>
            <RouterLink to="/request">Request</RouterLink>
        </div>
    </nav>
    <div style="float: right;">
        <RouterLink to="/immera">Secret :D</RouterLink>
    </div>
</template>

<style lang="scss">
@use "../scss/abstracts/index.scss" as *;

nav {
    height: $navbar-height;
    background-color: $color-bg;
    padding: 2 $spacing-lg;
    position: sticky;
    top: 0;
    z-index: 10;
    @include flex-center(flex-start);
    
    .nav-group {
        display: none;
        position: absolute;
        top: $navbar-height;
        right: 0;
        flex-direction: column;
        background: $color-bg;
        width: 100%;
        padding: $spacing-md 0;
        gap: 0;
        z-index: 1050;

        &.open {
            display: flex;
        }

        .nav-item {
            @include clickable;
            border-radius: 1rem;
            padding: $spacing-md;
            text-align: center;
            text-transform: uppercase;
            color: $color-text;

            &:hover,
            &.active {
                color: $color-accent;
            }
        }
    }

    @media (min-width: $breakpoint-tablet) {

        .nav-group {
            width: 100%;
            height: 100%;
            position: static;
            display: flex !important;
            flex-direction: row;
            align-items: center;
            align-content: center;
            background: none;
            width: auto;
            padding: 0 1rem;
            @include flex-center(flex-start);

            a {
                width: 100%;
                height: 100%;
                padding: 0 1rem;
                flex-direction: row;
                align-items: center;

                &:hover {
                    color: white;
                    background-color: $color-accent;
                }
            }
        }
    }
}
</style>