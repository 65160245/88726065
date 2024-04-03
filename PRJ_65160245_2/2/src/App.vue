<template>
  <div>
    <header>
      <h1>สถานที่ท่องเที่ยว</h1>
      <input type="text" v-model="searchTerm" placeholder="Search place...">
    </header>
    <div class="places-container">
      <PlaceCard v-for="place in filteredPlaces" :key="place.name" :place="place" />
    </div>
  </div>
</template>

<script>
import PlaceCard from './components/PlaceCard.vue'; 

export default {
  name: 'App',
  components: {
    PlaceCard
  },
  data() {
    return {
      places: [
        { 
          name: "หาดบางแสน", 
          image: ["src/assets/img/Beach.jpg", "src/assets/img/Beach2.jpg","src/assets/img/Beach3.jpg"] 
        },
        { 
          name: "สยาม", 
          image: ["src/assets/img/City.jpg", "src/assets/img/city2.jpg", "src/assets/img/city3.jpg"] 
        },
        { 
          name: "ดอยอินทนนท์", 
          image: ["src/assets/img/mountain.jpg", "src/assets/img/mountain2.jpg", "src/assets/img/mountain3.jpg"] 
        }
      ],
      searchTerm: ''
    };
  },
  computed: {
    filteredPlaces() {
      return this.places.filter(place => place.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }
}
</script>

<style>
header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

.places-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}
</style>
