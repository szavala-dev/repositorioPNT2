<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <div class="card p-4 bg-dark text-white">
            <h1 class="card-title text-white">Bienvenido al Template de Prueba</h1>
            <p class="card-text">
              Esta página es la principal de la App hecha con Vue 3.
            </p>
            <router-link to="/about" class="btn btn-primary mt-3">Conozca más sobre nosotros</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  };
  </script>
  
  <style scoped>
  h1 {
    color: #ffffff;
  }
  
  p {
    font-size: 18px;
    margin-bottom: 20px;
    color: #e0e0e0;
  }
  
  .card {
    border: 1px solid #444;
    border-radius: 10px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  </style>