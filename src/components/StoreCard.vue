<template>
    <q-card class="store-card-wrapper">

      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>
        {{ name.replace('The Den ', '') }}
        </q-toolbar-title>

        <q-btn
          flat
          icon="close"
          v-close-popup
        ></q-btn>
      </q-toolbar>

      <q-card-section class="text-subtitle1">
        <div class="row" v-for="(value, name) in $props" :key="name">
          <div class="col-4"> {{ String(name).charAt(0).toUpperCase() + String(name).slice(1) }}: </div>
          <div class="col-8"> {{ value }} </div>
        </div>        
      </q-card-section>

    </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StoreCard',

  props: {
    address: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    state: {
      type: String,
      default: ''
    },
    storeType: {
      type: String,
      default: ''
    },
    storePhone: {
      type: String,
      default: ''
    }
  },
})
</script>

<style scoped>
.store-card-wrapper {
  width: 300px;
}

@media screen and (min-width: 1023px) {
  .store-card-wrapper {
    width: 560px;
  }
}
</style>