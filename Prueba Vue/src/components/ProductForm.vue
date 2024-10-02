<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="productName" class="form-label">Nombre del Producto</label>
      <input
        type="text"
        id="productName"
        v-model="formProduct.title"
        class="form-control"
        required
      />      
    </div>

    <div class="mb-3">
      <label for="productPrice" class="form-label">Precio</label>
      <input
        type="number"
        step="0.01"
        id="productPrice"
        v-model.number="formProduct.price"
        class="form-control"
        required
      />
    </div>

    <div class="mb-3">
      <label for="productDescription" class="form-label">Descripción</label>
      <textarea
        id="productDescription"
        v-model="formProduct.description"
        class="form-control"
        required
      ></textarea>
    </div>

    <div class="mb-3">
      <label for="productImage" class="form-label">Imagen del Producto</label>
      <input
        type="file"
        id="productImage"
        class="form-control"
        @change="handleImageUpload"
      />
      <img v-if="formProduct.image" :src="formProduct.image" alt="Imagen del producto" class="img-fluid mt-2" />
    </div>
    
    <button type="submit" class="btn btn-primary">
      {{ isEditing ? 'Guardar Cambios' : 'Agregar Producto' }}
    </button>
  </form>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formProduct: { ...this.product }, // Copia el producto para el formulario
    };
  },
  watch: {
    product(newProduct) {
      this.formProduct = { ...newProduct }; // Actualiza el formulario cuando el producto cambia
    },
  },
  methods: {
    submitForm() {
      console.log('Formulario enviado con:', this.formProduct);  // Depura para ver los datos antes de enviar
      this.$emit('submit', this.formProduct);
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.formProduct.image = e.target.result; // COnvierte imagen a URL base64
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
