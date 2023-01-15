<script>
import CharacterCard from './CharacterCard.vue';
import { store } from '../store.js';

export default {

    components: {
        CharacterCard
    },

    data() {
        return {
            store
        }
    }

}
</script>


<template lang="">

<div class="container-fluid bg-orange p-5 ">

    <select class="form-select w-25 my-3" aria-label="Default select example">
  <option selected>Select Type</option>
  <option value="1">Alien</option>
  <option value="2">Fire</option>
  <option value="3">Water</option>
</select>


    <div class="bg-darkgray text-light p-4 ">Found 39 cards</div>
 <div class="container-fluid text-bg-light">
     <div class="d-flex flex-wrap justify-content-center"> 
        <CharacterCard v-for="(item, index) in store.characterList" :key="index" :character="item"/>
    </div>
</div>
</div>



</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.bg-orange {
    background-color: $bg-orange;
}

.bg-darkgray {
    background-color: rgb(30, 30, 30);
}
</style> 