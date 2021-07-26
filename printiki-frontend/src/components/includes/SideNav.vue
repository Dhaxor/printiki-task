<template>
    <!--SideBar-->
    <div class="sidebar">
      <div class="sidenav-container">

    <div class="sidenav">

        <div class="side-link">
            <a href="#">Canvas</a>
            <div></div>
        </div>

        <div class="side-link">
            <a href="#">Prints</a>
            <div></div>
        </div>

        <div class="side-link">
            <a href="#">Posters</a>
            <div></div>
        </div>

        <div class="side-link">
            <a href="#">Books</a>
            <div></div>
        </div>

        <div class="side-link">
            <a href="#">Link</a>
            <div></div>
        </div>

    </div>

</div>
      </div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.sidebar {
    width: 300px;
}

@media screen and (max-width: 1000px) {
    .sidebar {
        width: 100%;
    }
}
.sidenav-container {
    height: 100%;
    background: #252525;
}
.sidenav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    padding: 20px 0;
}

.sidenav a {
    color: #ffffff !important;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 1.2rem;
}

.sidenav .side-link div {
    width: 130px;
    height: 4px;
    margin-top: 8px;
    background: red;
    transform: translateX(40px);
    opacity: 0;
    transition: 0.25s ease-in-out;
}

.sidenav .side-link:hover div {
    transform: translateX(0px);
    opacity: 1;
}

@media screen and (max-width: 1000px) {
      .sidenav {
        flex-direction: row;
        height: auto;
    }
    .sidenav a {
        font-size: 1rem;
        font-weight: 1rem;
    }
    .sidenav-container {
        height: auto;
    }
}

</style>