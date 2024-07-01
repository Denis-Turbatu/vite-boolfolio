<script>
    export default {
        name: "AppHome",
        data() {
            return {
                navLinks: [
                    {
                        routeName: "home",
                        title: 'Home', 
                    },
                    {
                        routeName: "projects",
                        title: 'Progetti', 
                    },
                ],
            }
        },
    };
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav d-flex gap-3">
                        <li class="nav-item" v-for="link in navLinks">
                            <router-link :to="{ name: link.routeName }" class="text-decoration-none">{{link.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped lang="scss"></style>