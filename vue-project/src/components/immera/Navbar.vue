<template>
    <div class="navbar">
        <div class="navbar-title">
            <img src="../../assets/images/immera/immera.png" alt="">
        </div>
        <div class="navbar-group">
            <div class="dropdown prod" >
                <a href="#products" class="dropdown-toggle">Products</a>
                <div class="dropdown-icon">v</div>
                <div class="dropdown-menu">
                        <a href="#brightnow">Brightnow</a>
                        <a href="#product2">Product 2</a>
                        <a href="#product3">Product 3</a>
                    </div>
            </div>
            
            <a href="#services" class="serv">Services</a>
        </div>
        <div class="btn no-arrow-btn">
            <button>Contact Us</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navbar {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    gap: 1.5rem;
    font-size: 1rem;
    margin-top: 1rem;

    .navbar-title {
        grid-column: 1 / 3;
        align-self: center;
        justify-self: start;
        height: 3rem;
        img {
            // grid-row: 1/2;
            width: 100%;
            height: 100%;
        }
    }

    .navbar-group {
        grid-column: 3 / 7;
        // align-self: center;
        // justify-self: start;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        color: white;

        .dropdown {
            position: relative;
            display: inline-block;

            .dropdown-toggle {
                cursor: pointer;
                text-decoration: none;
                color: white;
                padding: 0.5rem 0.3rem 0.5rem 1rem;
                transition: color 0.3s;

                &:hover {
                    color: #999999;
                }
            }

            .dropdown-icon {
                display: inline-block;
                transition: transform 0.3s ease; /* Smooth rotation */
            }

            .dropdown-menu {
                display: none;
                position: absolute;
                background-color: #000000;
                padding: 0.5rem 0;
                border-radius: 1rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 10;
                opacity: 0;
                transform: translateY(-10px);
                transition: opacity 0.3s ease, transform 0.3s ease;

                a {
                    display: block;
                    padding: 0.5rem 1rem;
                    text-decoration: none;
                    color: white;
                    transition: background-color 0.3s;

                    &:hover {
                        background-color: #262626;
                    }
                }
            }

            &:hover .dropdown-menu {
                display: block; /* Show the dropdown menu on hover */
                opacity: 1; /* Fade in */
                transform: translateY(0); /* Slide into place */
            }

            &:hover .dropdown-icon {
                transform: rotate(180deg); /* Rotate the "V" upside down */
            }
        }

        .prod {
            grid-column: 1 / 2;
            place-self: center;
        }

        .serv {
            place-self: center;
            cursor: pointer;
            text-decoration: none;
            color: white;
            padding: 0.5rem 1rem;
            transition: color 0.3s;

            &:hover {
                color: #999999;
            }
        }
    }

    .btn {
        grid-column: 11 / 13;
        justify-self: end;
        align-self: center;

        button {
            font-size: 0.6rem;
        }
    }
}
</style>