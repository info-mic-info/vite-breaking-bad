<script>
export default {
    props: {
        character: Object
    }
}
</script>

<template lang="">


    
    
    

    
    <div class="d-flex width">
        <div class="text-center m-3 bg-orange">
        <img :src="character.card_images[0].image_url" alt="">
     <h3 class="text-light">{{ character.name }}</h3>

       
         <p class="text-dark">{{ character.archetype }}</p>
      
    </div>  
</div>

</template>

<style lang="scss" scoped>
.bg-orange {
    background-color: orange;

    img {
        width: 200px
    }
}

.width {
    width: calc(100% / 5);
}
</style>
