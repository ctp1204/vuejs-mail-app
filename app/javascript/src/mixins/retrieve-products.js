export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    // alert("Retrieving list product success.....")
    this.products = this.getProductList();
  },
  methods: {
    getProductList() {
      return [
        { name: 'CuongTanPhu1', age: 22 },
        { name: 'CuongTanPhu2', age: 21 },
        { name: 'CuongTanPhu3', age: 23 },
        { name: 'CuongTanPhu4', age: 20 },
        { name: 'CuongTanPhu5' },
        { name: 'CuongTanPhu6' }
      ]
    },
    addToCart(product){
      product.name = 'Test';
      alert("Adding " + product.name + " to cart (mixin");
    }
  },
}
