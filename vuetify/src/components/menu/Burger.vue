<template>
    <div id="menu-bg"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle" >
        <div class="menu-burger">☰</div>
        <div class="menu-items">
                <a href="#" onclick='goToLink("index.html");' >Home</a>
                <a href="#" onclick='goToLink("timeline.html");'>Timeline</a>
                <a href="#" onclick='goToLink("portfolio.html");'>Portfolio</a></div>

        </div>

    </div>
</template>
<script>
    export default {
        data: () => ({
            isBurgerActive: false
        }),
        methods: {
            toggle() {
                this.isBurgerActive = !this.isBurgerActive
                 
            }
        }
    }
</script>
<style>

.menu, #menu-bg, .menu-burger {
    position: fixed;
    width: 50px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    border-radius: 0;
 
}



#menu-bg {
  
    background: #484c7f;
     cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
    right: 50px;
    top: 62px;
    -webkit-transform: translate3d(50%, -50%, 0);
    transform: translate3d(50%, -50%, 0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
}
  #menu-bg:hover , .menu-burger:hover {
     width: 55px;
    height: 55px;
}

#menu-bg.active {
    -webkit-transform: translate3d(50%, -50%, 0);
    transform: translate3d(50%, -50%, 0);
    width: 300vw;
    height: 300vw;
}

.menu-burger {
    color: white;
    padding-top: 5px;
    -webkit-user-select: none;
    cursor: pointer;
    -webkit-transition: .4s;
    transition: .4s;
    -webkit-transform-origin: center;
    transform-origin: center;
}
.menu-burger.active {
    -webkit-transform: rotate(-180deg) translateY(10px);
    transform: rotate(-180deg) translateY(10px);
}

.menu-items {
    position: absolute;
    font-weight: bold;
    font-size: 40px;

    color: white;
   
    text-align: center;
    opacity: 0;
    -webkit-transition: .4s;
    transition: .4s;
    margin-top: 100px;
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
    pointer-events: none;
}
.menu-items a {
    -webkit-transition: 1s;
    transition: 1s;
    opacity: 0;
    margin-top: 0px;
    display: block;
    text-decoration: none;
    color: white;
    letter-spacing: 10px;
}
.menu-items.active {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    pointer-events: auto;
    opacity: 1;
}
.menu-items.active a {
    opacity: 1;
    margin-top: 75px;
}
 
</style>