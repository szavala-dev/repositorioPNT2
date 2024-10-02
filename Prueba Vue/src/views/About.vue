<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <div class="card p-4 bg-dark text-white">
            <h1 class="card-title text-white">Sobre Nosotros</h1>
            <p class="card-text">
              Esto es texto simulado del primer ejercicio de Vue. Utilizamos componentes de Bootstrap, previamente instalados con NPM.
            </p>
            <router-link to="/" class="btn btn-primary mt-3">Volver al Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  };
  </script>
  