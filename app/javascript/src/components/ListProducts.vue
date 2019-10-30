<template>
  <div>
    <h1>List Product</h1>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} {{ product.age }}
        -
        <a href="#" @click.prevent="addToCart(product)">Add to cart</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import ListProducts from '../mixins/retrieve-products'

  export default {
    mixins: [ ListProducts ],
    created() {
      // alert("ListProducts created successfully!")
    }
  }
</script>
