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
<div class="d-flex flex-wrap">
    <CharacterCard v-for="(item, index) in characters" :key="index" :character="item"/>

    
</div>


</template>

<style lang="scss" scoped>

</style> 