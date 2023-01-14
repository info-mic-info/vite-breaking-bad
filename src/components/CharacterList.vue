<script>
import CharacterCard from './CharacterCard.vue';
export default {

    components: {
        CharacterCard
    },
    props: {
        characters: Array
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


    <div class="bg-darkgray text-light p-4">Found 39 cards</div>
 <div class="container-fluid text-bg-light">
     <div class="d-flex flex-wrap justify-content-center">
        <CharacterCard v-for="(item, index) in characters" :key="index" :character="item"/>
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