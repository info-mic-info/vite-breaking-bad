<script>

export default {
    props: {
        archetype: Object,
    },
    data() {
        return {
            ChangeCard: ''
        }
    }
}
</script>


<template lang="">



    <select v-model="ChangeCard" @change="$emit('selection', ChangeCard)"           class="form-select w-25 my-3" aria-label="Default select example">
        <option selected>Select Type</option>  
         <option v-for="(value, index) in archetype" :key="index" :value="value.archetype_name"> {{ value.archetype_name }}</option>

    </select>

</template>


<style lang="">
    
</style>