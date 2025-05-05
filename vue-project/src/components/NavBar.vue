<template>
    <nav id="main-navbar">
        <div class="nav-group">
            <div class="nav-item">
                <RouterLink to="/">Home</RouterLink>
            </div>
            <div class="nav-item">
                <RouterLink to="/playground">Playground</RouterLink>
            </div>
            <div class="nav-item">
                <RouterLink to="/request">Request</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
@use "../styles/abstracts/index.scss" as *;
@use "../styles/layout/index.scss" as layout;
@use "../styles/components/index.scss" as comp;
</style>