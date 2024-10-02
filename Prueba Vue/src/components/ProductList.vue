<template>
  <div class="product-list">
    <h1>Lista de Productos</h1>
    <div class="row">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @edit="selectProductToEdit"
        @delete="deleteProduct"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    selectProductToEdit(product) {
      this.$emit('edit', product);
    },
    deleteProduct(productId) {
      this.$emit('delete', productId);
    },
  },
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
.product-list {
  padding: 20px;
}
</style>
