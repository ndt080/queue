<template>
    <header class="topNav" >
        <AddCard />
        <div v-bind:class="{ active: isOpen }" class="header--nav-toggle"
             v-on:click="openMenu()">
            <span></span>
        </div>
        <nav v-bind:class="{ active: isOpen }"
             v-on:click.prevent="openMenu()">
            <ul>
                <li><a href="#">ГЛАВНАЯ</a></li>
                <li><a href="#">СТАТЬИ</a></li>
                <li><a href="#">КОНТАКТЫ</a></li>
            </ul>
        </nav>

    </header>
</template>

<script>
    import AddCard from "./AddCard";
    export default {
        name: "TopNav",
        data() {
            return{
                isOpen: false,
                el: '#app',
            }
        },
        mounted() {
           // document.addEventListener('click', this.closeMenu.bind(this))
        },
        components: {
            AddCard
        },
        methods:{
            openMenu(event) {
                this.isOpen = !this.isOpen;
            },
            closeMenu(event) {
                this.isOpen = false;
            },
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        width: 100%;
        background: rgba(255,255,255,1);
        justify-content: space-between;
        align-items: center;
        padding: 15px 5%;
        z-index: 1000;
        margin-top: 1.2rem;
        border-radius: 1rem;
    }
    nav {
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        width: 60%;
        height: 100%;
        transform: skewX(30deg) translate(100%,0);
        transform-origin: top right;
        transition: all .4s ease-in;
        z-index: 10;
        background: #fff;
    }
    nav ul {
        transform: skewX(-8deg);
        transform-origin: top left;
        position: fixed;
        right: 120px;
        top: 30%;
        width: 400px;
        text-align: right;
    }
    nav ul li {
        position: relative;
        z-index: 11;
        list-style: none;
        font-size: 2em;
        font-weight: 200;
        line-height: 1.7em;
        color: #fff;
    }
    nav ul li a {
        border: none;
        color: #0e0e0e;
        text-decoration: none;
    }
    nav ul li a:hover {
        border: none;
        color: #0f33ff;
        text-decoration: none;
    }
    nav.active {
        transform: skewX(8deg) translate(0,0);
    }
    nav li {
        opacity: 0;
        transform: translate(0, 10px);
        transition: all .0s ease-in .3s;
    }
    nav.active li {
        opacity: 1;
        transform: translate(0,0);
        transition: all .2s ease-in 0s;
    }
    nav.active li:nth-child(1) {
        transition-delay: .3s;
    }
    nav.active li:nth-child(2) {
        transition-delay: .4s;
    }
    nav.active li:nth-child(3) {
        transition-delay: .5s;
    }
    nav.active li:nth-child(4) {
        transition-delay: .6s;
    }
    nav.active li:nth-child(5) {
        transition-delay: .7s;
    }
    nav.active li:nth-child(6) {
        transition-delay: .8s;
    }
    .header--nav-toggle {
        display: flex;
        width: 50px;
        height: 50px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        cursor: pointer;
        z-index: 20;
    }
    .header--nav-toggle span,
    .header--nav-toggle::before,
    .header--nav-toggle::after {
        content: "";
        position: relative;
        width: 16px;
        height: 2px;
        background-color: #9da29b !important;
    }
    .header--nav-toggle::before {
        bottom: 5px;
        width: 23px
    }
    .header--nav-toggle::after {
        top: 5px;
        width: 23px
    }
    @media(max-width: 800px){
        nav{
            width: 90%;
        }
    }
</style>
