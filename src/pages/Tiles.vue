<template>
  <div class="fit row wrap items-center" style="min-height: calc(100vh - 50px); background: black; padding: 16px;">
    <q-card
      v-for="store in stores" :key="store.code"
      class="col-12 col-md-3 flex items-center justify-center cursor-pointer bg-negative"
      style="height: 30vh; border: 16px solid black"
      @click="() => {showDetails(store)}"
    >
      <q-card-section class="text-center text-h4 text-white">
        {{ store.name }}
      </q-card-section>
    </q-card>
  </div>

    <q-dialog 
      v-model="dialog"
      persistent
      content-style="background-color: rgba(0,0,0, 0.8)"
    >
      <div>
        <store-card 
          v-bind="clickedStore"
        ></store-card>
      </div>
    </q-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from "vuex";
import StoreCard from 'components/StoreCard.vue';

export default defineComponent({
  components: { StoreCard },
  
  name: 'PageTiles',

  data(){
    return {
      dialog: false,
      clickedStore: null
    }
  },

  computed: {
    ...mapGetters({
      stores: "getStores"
    })
  },
  
  methods: {
    showDetails(value){
      this.clickedStore = value;
      this.dialog = true;
    }
  }
})

</script>
