<template>
    <header id="header">
        <div class="header-left">
            <img class="header-left-logo" src="@/assets/logo.png" alt="logo">
        </div>
        <div class="header-right">
            <nav class="header-navbar">
                <ul class="navbar-list">
                    <li class="navbar-list-item">Home</li>
                    <li class="navbar-list-item">Usługi</li>
                    <li class="navbar-list-item">Realizacje</li>
                    <li class="navbar-list-item">Kontakt</li>
                    <li class="navbar-list-item">O nas</li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #header {
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-left {
            flex-basis: 20%;
            .header-left-logo {
                max-width: 100%;
            }
        }
        .header-right {
            .header-navbar {
                .navbar-list {
                    list-style: none;

                    .navbar-list-item {
                        color: black;
                    }
                }
            }
        }
    }
</style>