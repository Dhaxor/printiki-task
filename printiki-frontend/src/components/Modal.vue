<template>
    <div>
 <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
    Add Product
    </button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style="text-align:left">
         <form @submit.prevent="addProduct">
            <div class="form-group">
                <label for="exampleInputEmail1">Product Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name of Product" v-model="name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Product Description</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Product Description" v-model="description">
            </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Price</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Price" v-model="price">
            </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Image</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="image" v-model="image">
            </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Category</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category" v-model="category">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            name: '',
            description: '',
            price: '',
            image: '',
            category: '',

        }
    },
    
  methods:{
    addProduct() {
      this.$store.dispatch("addProduct", { 
        name: this.name,
        description: this.description,
        price: this.price,
        image: this.image,
        category: this.category
      })
      window.location.reload()
  },
    }

}
</script>

<style lang="scss" scoped>

</style>