<template>
  <HeaderOblix :book="book" :bookingTable="bookingTable" />
  <ToggleRestoraunt 
    :cuisines="cuisines" 
    :sendRestorant="sendRestorant" 
    :currentCuisine="currentCuisine" 
  />
  <AboutRestoraunt :currentCuisine="currentCuisine" />
  <ToggleMenu :currentCuisine="currentCuisine" :setMenu="setMenu" />
  <FiltersDishes :useVegeterian="useVegeterian" :useNuts="useNuts" />
  <BigMenu :currentMenu="currentMenu" />
  <BookTable :book="book" :bookingTable="bookingTable" />
  <FooterOblix />
</template>

<script>
import HeaderOblix from './components/HeaderOblix.vue'
import ToggleRestoraunt from './components/ToggleRestoraunt.vue'
import AboutRestoraunt from './components/AboutRestoraunt.vue'
import ToggleMenu from './components/ToggleMenu.vue'
import FiltersDishes from './components/FiltersDishes.vue'
import BigMenu from './components/BigMenu.vue'
import BookTable from './components/BookTable.vue'
import FooterOblix from './components/FooterOblix.vue'
import axios from 'axios'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    HeaderOblix,
    ToggleRestoraunt,
    AboutRestoraunt,
    ToggleMenu,
    FiltersDishes,
    BigMenu,
    BookTable,
    FooterOblix,
  },
  data() {
    return {
      cuisines: [
        {
            name: 'West',
            picture: "background-image: url('https://www.oblixrestaurant.com/wp-content/uploads/2019/09/menus-1.jpg');",
            toShow: true,
            description: "Enjoy views of West London alongside sophisticated and classic dishes from our rotisserie and grill; all cooked in our open kitchen.",
            href: '/west',
        }, 
        {
            name: 'East',
            picture: "background-image: url('https://www.oblixrestaurant.com/wp-content/uploads/2019/09/lunch-zeplin-zip.jpg');",
            toShow: false,
            description: 'Enjoy views of East London, culinary cocktails and innovative seasonal dishes in a creative and relaxing dining and bar space.',
            href: "/east",
        }, 
        {
            name: 'Bar',
            picture: 'background-image: url("https://www.oblixrestaurant.com/wp-content/uploads/2019/09/menus-1.jpg");',
            toShow: false,
            description: "Enjoy views of BAR. Coctails and kitchen.",
            href: "/bar",

        }
        ],
      currentCuisine: {
        name: 'West',
        picture: "background-image: url('https://www.oblixrestaurant.com/wp-content/uploads/2019/09/menus-1.jpg');",
        toShow: true,
        description: "Enjoy views of West London alongside sophisticated and classic dishes from our rotisserie and grill; all cooked in our open kitchen.",
        href: "/west",
        menus: [],
    },
    allmenus: [],  
    currentMenu: {},
    book: false,
    vegeterian: false,
    nuts: false,
    }
  },

  methods: {
    sendRestorant(index) {
      this.cuisines.map(i => i['toShow'] = false)
      this.cuisines[index].toShow = true;
      this.currentCuisine = this.cuisines[index];
      for (let menu in this.allmenus) {
        if (menu == this.currentCuisine.name) {
          this.currentCuisine['menu'] = this.allmenus[menu];
        }
        if (menu == `${this.currentCuisine.name}1`) {
          let menuRestorant = this.allmenus[menu];
          let plate = menuRestorant[0];
        for (let key in plate) {
          if (key == this.currentCuisine.menu[0]) {
            this.currentMenu = plate[key]
          }
        }
        }
      }
    },

    setMenu(index) {
      const name = this.currentCuisine.menu[index];
      const nameRestorant = this.currentCuisine.name;
      const menusRestorant = this.allmenus[`${nameRestorant}1`];
      for (let i=0; i <= menusRestorant.length; i++) {
        let plate = menusRestorant[i];
        for (let key in plate) {
          if (key == name) {
            this.currentMenu = plate[key]
          }
        }
      }
    },

    bookingTable() {
      this.book = ref(!this.book);
    },

  useVegeterian(){
    this.vegeterian = !this.vegeterian;
    let filter = ref([]);
    if (this.vegeterian === true) {
      for (let key in this.currentMenu) {
        let dish = this.currentMenu[key];
        if (dish[2] == 'true') {
          filter.value.push(dish)
        }
      }
      this.currentMenu = filter;
    } else {
            const nameRestorant = this.currentCuisine.name;
      const menusRestorant = this.allmenus[`${nameRestorant}1`];
      for (let i=0; i <= menusRestorant.length; i++) {
        let plate = menusRestorant[i];
        for (let key in plate) {
          if (key == this.currentCuisine.menu[0]) {
            this.currentMenu = plate[key]
          }
        }
      }
    }
  },

  useNuts() {
    this.nuts = !this.nuts;
    let filter = ref([]);
    if (this.nuts === true) {
      for (let key in this.currentMenu) {
        let dish = this.currentMenu[key];
        if (dish[3] == 'true') {
          filter.value.push(dish)
        }
      }
      this.currentMenu = filter;
    } else {
            const nameRestorant = this.currentCuisine.name;
      const menusRestorant = this.allmenus[`${nameRestorant}1`];
      for (let i=0; i <= menusRestorant.length; i++) {
        let plate = menusRestorant[i];
        for (let key in plate) {
          if (key == this.currentCuisine.menu[0]) {
            this.currentMenu = plate[key]
          }
        }
      }
    }
  }

  },

  mounted() {
    axios.get('https://mocki.io/v1/57e39043-277e-4a48-95dd-5dc4e8597fd4')
      .then(response => {
            for (let restorant in response.data[0]) {
            this.allmenus = response.data[0]
            if (restorant == this.currentCuisine.name) {
                this.currentCuisine['menu'] = this.allmenus[restorant];
            }
            const menu = this.allmenus['West1'];
            let plate = menu[0];
        for (let key in plate) {
          if (key == this.currentCuisine.menu[0]) {
            this.currentMenu = plate[key]
          }
        }
        }
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
  }
}
</script>

<style>
</style>
