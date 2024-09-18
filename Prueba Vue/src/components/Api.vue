<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Todos los Posts</h1>
      <div v-if="posts.length === 0">
        <p class="text-center">No hay posts disponibles.</p>
      </div>
      <div v-else class="row">
        <div class="col-md-4 mb-4" v-for="post in posts" :key="post.id">
          <div class="card h-100">
            <div class="card-body bg-dark text-white">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [], // Lista de posts traídos de la API
      };
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          this.posts = response.data; // Guardamos todos los posts sin filtrar
        } catch (error) {
          console.error("Error al obtener los posts:", error);
        }
      }
    },
    mounted() {
      this.fetchPosts();
    }
  };
  </script>