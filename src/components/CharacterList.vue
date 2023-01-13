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
<div>
    <CharacterCard v-for="(item, index) in characters" :key="index" :character="item"/>

    
</div>


</template>

<style lang="">
</style> 