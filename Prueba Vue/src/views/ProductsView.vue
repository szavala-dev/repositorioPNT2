<template>
  <div class="products-view container">
    <!-- Botón para agregar productos -->
    <button class="btn btn-primary mb-3" @click="openModal()">Agregar Producto</button>

    <!-- Lista de productos -->
    <ProductList
      :products="products"
      @edit="openModal"
      @delete="deleteProduct"
    />

    <!-- Modal para editar/agregar productos -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true" ref="productModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productModalLabel">{{ isEditing ? 'Editar Producto' : 'Agregar Producto' }}</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ProductForm
              :product="selectedProduct"
              :isEditing="isEditing"
              @submit="handleSubmit"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import ProductForm from '@/components/ProductForm.vue';
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      products: [],          // Lista de productos obtenidos de la API
      selectedProduct: null, // Producto seleccionado para editar
      isEditing: false,      // Flag para indicar si estamos en modo edición
      modalInstance: null,   // Instancia del modal de Bootstrap
      errorMessage: '',      // Mensaje de error si algo falla
    };
  },
  mounted() {
    this.fetchProducts(); // Cargar productos al montar el componente
    this.modalInstance = new Modal(this.$refs.productModal); // Inicializamos el modal de Bootstrap
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    },
    openModal(product = null) {
      this.isEditing = !!product;
      // Inicializar con valores predeterminados para evitar campos vacíos
      this.selectedProduct = product ? { ...product } : { title: '', price: 0, description: '', image: '', category: '' }; 
      this.modalInstance.show(); // Mostrar modal
    },
    closeModal() {
      this.modalInstance.hide(); // Ocultar modal
    },
    async deleteProduct(productId) {
      try {
        await fetch(`https://fakestoreapi.com/products/${productId}`, {
          method: 'DELETE',
        });
        this.products = this.products.filter(p => p.id !== productId); // Eliminar producto de la lista
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    },
    async handleSubmit(product) {
      console.log('Datos del producto antes de validar:', product);  // Depuración para ver los datos antes de validar
      
      // Validar que los campos obligatorios no estén vacíos
      if (!product.title || product.price === null || product.price === '' || !product.description) {
        this.errorMessage = 'Todos los campos son obligatorios.';
        //  console.error('Error: Faltan campos obligatorios.');
        return;
      }

      console.log('Producto enviado:', product); // Depuración para ver los datos enviados

      try {
        if (this.isEditing) {
          // Editar producto existente
          const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
          });
          const updatedProduct = await response.json();
          if (response.status !== 200) {
            throw new Error(updatedProduct.message || 'Error al editar el producto.');
          }
          // Actualizamos el producto en la lista local
          const index = this.products.findIndex(p => p.id === updatedProduct.id);
          if (index !== -1) {
            this.products.splice(index, 1, updatedProduct);
          }
        } else {
          // Agregar nuevo producto
          const response = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
          });
          const newProduct = await response.json();
          if (response.status !== 200 && response.status !== 201) {
            throw new Error(newProduct.message || 'Error al agregar el producto.');
          }
          // Agregamos el nuevo producto a la lista local
          this.products.push(newProduct);
        }

        this.errorMessage = ''; // Limpiar el mensaje de error
        this.closeModal();  // Cerrar modal después de guardar
      } catch (error) {
        console.error('Error al guardar el producto:', error);
        this.errorMessage = error.message || 'Error al guardar el producto.';
      }
    },
  },
  components: {
    ProductList,
    ProductForm,
  },
};
</script>

<style scoped>
.products-view {
  margin-top: 20px;
}

/* Estilos para mostrar errores */
.error-message {
  color: red;
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
