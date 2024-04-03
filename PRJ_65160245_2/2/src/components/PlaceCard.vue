<template>
    <div class="place-card">
      <img v-for="(imageUrl, index) in place.image" :src="imageUrl" :alt="place.name" :key="index" class="place-image" />
      <h2>{{ place.name }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlaceCard',
    props: {
      place: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  
  .place-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .place-card img {
    width: 100%;
    height: 200px; 
    object-fit: cover; 
    border-radius: 5px;
    margin-bottom: 10px;
  }
  </style>
  