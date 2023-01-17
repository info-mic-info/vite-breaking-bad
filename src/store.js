import { reactive } from 'vue'

export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
    url_Complete: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    url_archetypes: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    characterList: [],
    selectGenere: [],

});