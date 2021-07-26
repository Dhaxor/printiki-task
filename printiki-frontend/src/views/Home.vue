<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="wrapper">
    
    <!--SideBar End-->
    <side-nav></side-nav>

    <!--Body Start-->
    <div class="body-container">
      <div class="main-heading text-right text-uppercase">
    <!-- <button class="btn btn-danger">Add a product</button> -->
      <modal></modal>
  </div>
   
   <div class="row">
   <div class="col-md-6" v-for="item in products" :key="item.id">
      <div class="card" style="width: 18rem;">
        <img src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.description}}</p>
            <p class="card-text">${{item.price}}</p>
            <div class="all-btn">
            <a href="#" class="btn btn-primary">Edit</a>
            <a href="#" class="btn btn-primary">Save</a>
            <a href="#" class="btn btn-primary" @click="deleteProduct(item._id)">Delete</a>
            <a href="#" class="btn btn-primary" @click="toggleDisplay">Enabled</a>
            </div>
          </div>
        </div>

   </div>

    </div>

    </div>
    <!---Body End--->
</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from '@/components/includes/TopNav.vue'
import SideNav from '@/components/includes/SideNav.vue'
import Modal from '@/components/Modal.vue'
// import {mapState}  from 'vuex';
export default {
  name: 'Home',
  components: {
    TopNav,
    SideNav,
    Modal

  },
 data() {
   return {
     hidden: false
   }
 },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch("getAllProducts");
  },
  methods:{
    deleteProduct(id){
      this.$store.dispatch("deleteProduct", id);
    },
    //tpggle the display of the product
    toggleDisplay(){

    }
  }

}
</script>


<style lang="scss" scoped>
.all-btn a{
  margin-left: 5px;
  margin-top: 5px;
}
.wrapper {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
}


.body-container {
    width: 100%;
    padding: 30px 30px;
}

@media screen and (max-width: 1000px) {
    .wrapper {
        flex-direction: column;
    }
    .sidebar {
        width: 100%;
    }
    .body-container {
        padding: 20px 5px;
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

.body-container {
  color: #000 !important;
}
</style>>
