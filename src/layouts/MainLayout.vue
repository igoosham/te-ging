<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />

        <q-toolbar-title>
          Tenging - Test task
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay

      :width="200"
      :breakpoint="500"
      bordered
    >
    <q-scroll-area class="fit">
      <q-list padding>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { mapActions } from "vuex";
import EssentialLink from 'components/EssentialLink.vue'

const menuLinks = [
  {
    title: 'Home',
    caption: 'back to home page',
    link: '/',
    icon: 'home'
  },
  {
    title: 'The Den Stores',
    caption: 'US',
    link: '/stores',
    icon: 'medical_services',
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    return {
      essentialLinks: menuLinks,
      drawer: ref(false),
      miniState: ref(true)
    }
  },

  methods: {
    ...mapActions(['loadStores']),
  },

  mounted() {
    this.loadStores();
  }

})
</script>
