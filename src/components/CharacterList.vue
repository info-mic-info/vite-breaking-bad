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

<div class="container-fluid text-bg-danger p-5 ">
 <div class="container-fluid text-bg-primary ">
     <div class="d-flex flex-wrap">
        <CharacterCard v-for="(item, index) in characters" :key="index" :character="item"/>
    </div>
</div>
</div>


</template>

<style lang="scss" scoped>

</style> 