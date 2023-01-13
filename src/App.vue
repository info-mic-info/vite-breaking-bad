<!-- PARTE JS  -->
<!-- ____________________________________________________________________________________________________ -->
<!-- 1)Importo tutte le componenti che voglio che siano visualizzate nella parte dell'HTML -->
<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CharacterList from './components/CharacterList.vue';

// 2) Richiamo le componenti che ho importato precedentemente nel punto 1
export default {
  components: {
    AppHeader,
    CharacterList
  },

  data() {
    return {

      // P.S: creo (scrivo ex-novo) un array vuoto
      characterList: [],
      url: "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    }
  },

  created() {

    this.getCharacters()
  },
  methods: {
    getCharacters() {
      axios.get(this.url).then((response) => {
        console.log(response.data.data)

      })
    }
  }
}
</script>
<!-- ____________________________________________________________________________________________________ -->



<!-- PARTE HTML -->
<!-- ____________________________________________________________________________________________________ -->
<!-- 3) Scrivo all'interno di template il nome della componente che voglio visualizzare -->
<template lang="">
  <div>
    <AppHeader/>
    <CharacterList/>
  </div>
</template>
<!-- ____________________________________________________________________________________________________ -->




<!-- PARTE CSS -->
<!-- 4) Qui posso stilizzare  -->
<!-- ____________________________________________________________________________________________________ -->
<style lang="">
  
</style>
<!-- ____________________________________________________________________________________________________ -->