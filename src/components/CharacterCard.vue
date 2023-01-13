<script>
export default {
    props: {
        character: Object
    }
}
</script>

<template lang="">


    
    
    

    
    <div class="d-flex flex-wrap">
        <div class="border border-primary width">
        <img :src="character.card_images[0].image_url" alt="">
     <p class="text-danger">Name --> {{ character.name }}</p>

        <div v>
         <p class="text-primary">Archetype --> {{ character.archetype }}</p>
         </div>
    </div>  
</div>

</template>

<style lang="scss" scoped>
.container {
    width: 100%;
}

.width {
    // width: calc(100% / 5);
    margin: 10px;
}
</style>
<!-- <div class="primary">
    
</div> -->