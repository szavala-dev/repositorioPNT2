<template>
  <div class="col-md-4 mb-3">
    <div class="card h-100">
      <img :src="product.image" class="card-img-top" alt="product image">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text text-muted">{{ formatPrice(product.price) }}</p> 
        <button @click="$emit('edit', product)" class="btn btn-warning">Editar</button>
        <button @click="$emit('delete', product.id)" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    },
  },
};
</script>
