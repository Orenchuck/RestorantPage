<template>
  <div class="oblix_wrap">
  <HeaderOblix 
    :book="book" 
    :bookingTable="bookingTable"
    :showMenu="showMenu"
    :mobMenu="mobMenu"
  />
  <ToggleRestoraunt 
    :cuisines="cuisines" 
    :sendRestorant="sendRestorant" 
    :currentCuisine="currentCuisine" 
  />
  <AboutRestoraunt :currentCuisine="currentCuisine" />
  <ToggleMenu :currentCuisine="currentCuisine" :setMenu="setMenu" />
  <FiltersDishes 
    :useFilter="useFilter" 
    :filters="filters"
    :currentMenuName="currentMenuName" 
    :show_menu_mob="show_menu_mob"
    :showFilters="showFilters"
    :mobFilter="mobFilter"
    :resetFilters="resetFilters"
  />
  <BigMenu :currentMenu="currentMenu" :show_menu_mob="show_menu_mob" />
  <BookTable :book="book" :bookingTable="bookingTable" />
  <FooterOblix />
  </div>
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
            class: true,
        }, 
        {
            name: 'East',
            picture: "background-image: url('https://www.oblixrestaurant.com/wp-content/uploads/2019/09/lunch-zeplin-zip.jpg');",
            toShow: false,
            description: 'Enjoy views of East London, culinary cocktails and innovative seasonal dishes in a creative and relaxing dining and bar space.',
            href: "/east",
            class: false,
        }, 
        {
            name: 'Bar',
            picture: 'background-image: url("https://www.oblixrestaurant.com/wp-content/uploads/2019/09/menus-1.jpg");',
            toShow: false,
            description: "Enjoy views of BAR. Coctails and kitchen.",
            href: "/bar",
            class: false,

        }
        ],
      currentCuisine: {
        name: 'West',
        picture: "background-image: url('https://www.oblixrestaurant.com/wp-content/uploads/2019/09/menus-1.jpg');",
        toShow: true,
        description: "Enjoy views of West London alongside sophisticated and classic dishes from our rotisserie and grill; all cooked in our open kitchen.",
        href: "/west",
        menu: [],
        class: true,
    },
    allmenus: [],  
    currentMenu: [],
    book: false,
    filters: {
      vegeterian: false,
      containNuts: false,
    },
    currentMenuName: '',
    mobMenu: 'mob_menu',
    show_menu_mob: 'show_menu_mob',
    type_menu_mob: null,
    mobFilter: 'mob_filter',
    }
  },

  methods: {
    selectMenu(restourant, restourantCuisineIndex) {
      const dishMenu = [];
      Object.values(this.allmenus[restourant][restourantCuisineIndex]).map(i => {
        i.map(j => {
          dishMenu.push(Object.values(j)[0])
        })
      })
      this.currentMenu = dishMenu;
    }, 

    sendRestorant(index) {
      this.cuisines.map(i => {
        i['toShow'] = false;
        i.class = false;
      })
      this.cuisines[index].toShow = true;
      this.cuisines[index].class = true;
      this.currentCuisine = this.cuisines[index];
      for (let menu in this.allmenus) {
        if (menu == this.currentCuisine.name) {
          this.currentCuisine['menu'] = Object.values(this.allmenus[menu]);
          this.currentMenuName = Object.keys(this.currentCuisine.menu[0])[0];
          
          this.selectMenu(menu, 0);
        }
      }
    },

    setMenu(index) {
      this.currentMenuName = Object.keys(this.currentCuisine.menu[index])[0];
      this.selectMenu(this.currentCuisine.name, index);

      if (this.type_menu_mob === index) {
              this.show_menu_mob ? this.show_menu_mob = null : this.show_menu_mob = 'show_menu_mob';
      } else {
        this.type_menu_mob = index;
        this.show_menu_mob = null;
      }
    },

    bookingTable() {
      this.book = ref(!this.book);
    },

  useFilter(name){
    this.filters[name] = !this.filters[name];
    let filter = ref([]);
    if (this.filters[name]) {
      this.currentMenu.map(i => {
        i[name] ? filter.value.push(i) : null
      })
      this.currentMenu = filter;
    } else {
      let index;
      Object.keys(this.allmenus).map((i, idx) => {
        i === this.currentCuisine.name ? index = idx : null
      })
      this.selectMenu(this.currentCuisine.name, index);
    }
  },

  resetFilters () {
    let index;
      Object.keys(this.allmenus).map((i, idx) => {
        i === this.currentCuisine.name ? index = idx : null
      })
    this.selectMenu(this.currentCuisine.name, index);
      this.mobFilter = 'mob_filter';
  },

  showMenu () {
    console.log(this.mobMenu);
    this.mobMenu ? this.mobMenu = null : this.mobMenu = 'mob_menu';
  },

  showFilters () {
    this.mobFilter ? this.mobFilter = null : this.mobFilter = 'mob_filter'
  }

  },

  mounted() {
    axios.get('https://mocki.io/v1/3d33c0dd-d8a9-43f1-9f11-07a82e23768b')
      .then(response => {
        this.allmenus = response.data[0];
        const firstRestourant = Object.keys(this.allmenus)[0];
        this.currentCuisine['menu'] = Object.values(this.allmenus[firstRestourant]);
        this.currentMenuName = Object.keys(this.currentCuisine.menu[0])[0];
        this.selectMenu(firstRestourant, 0);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
  }
}
</script>

<style lang="scss">
  .oblix_wrap {
    background-color: #1f1917;
    color: #fff;
    font-family: RockwellStd-Light,serif;
    font-size: 1em;
    line-height: 1.5;
    min-height: 100%;
    width: 100vw;
    -webkit-text-size-adjust: 100%;
  }
</style>
