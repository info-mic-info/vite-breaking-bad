<script>
import { store } from '../store.js'
export default {
    props: {
        character: Object
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">


    <div class="text-center m-4 bg-orange ">
       
             <img :src="character.card_images[0].image_url" alt="">
            <h6 class="text-light m-3">{{ character.name }}</h6>
            <p class="text-dark">{{ character.archetype }}</p>
         
    </div>  


</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.bg-orange {
    background-color: $bg-orange;

    img {
        width: 300px
    }
}

.width {
    width: calc(100% / 5);
}
</style>
