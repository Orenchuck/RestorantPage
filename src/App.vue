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
    :useVegeterian="useVegeterian" 
    :useNuts="useNuts" 
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
    vegeterian: false,
    nuts: false,
    currentMenuName: '',
    mobMenu: 'mob_menu',
    show_menu_mob: 'show_menu_mob',
    type_menu_mob: null,
    mobFilter: 'mob_filter',
    }
  },

  methods: {
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
      this.currentMenuName = name;
      const nameRestorant = this.currentCuisine.name;
      const menusRestorant = this.allmenus[`${nameRestorant}1`];

      if (this.type_menu_mob === index) {
              this.show_menu_mob ? this.show_menu_mob = null : this.show_menu_mob = 'show_menu_mob';
      } else {
        this.type_menu_mob = index;
        this.show_menu_mob = null;
      }

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
  },

  resetFilters () {
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
    // axios.get('https://mocki.io/v1/57e39043-277e-4a48-95dd-5dc4e8597fd4')
    axios.get('https://mocki.io/v1/1a7ad2ca-fb29-4fd8-b68a-7259a6ed5cfe')
      .then(response => {
        response.data[0].West.map(i => {
          for (let key in i) {
            this.currentCuisine.menu.push(key)
          }
          this.currentMenuName = this.currentCuisine.menu[0];
          // const firstMenu = response.data[0].West[0];
          // console.log('1', Object.values(response.data[0].West[0]));
          const dishMenu = [];
          // firstMenu[this.currentMenuName].map(i => {
          //    a.push(Object.values(i));
          // });
          Object.values(response.data[0].West[0]).map(i => {
            i.map(j => {
              dishMenu.push(Object.values(j)[0])
            })
            
          })
          
          this.currentMenu = dishMenu;
        });
        console.log(this.currentMenu);
        // for (let key in firstMenu) {
        //   console.log(key);
        // }
        //     for (let restorant in response.data[0]) {
        //     this.allmenus = response.data[0]
        //     if (restorant == this.currentCuisine.name) {
        //         this.currentCuisine['menu'] = this.allmenus[restorant];
        //     }
        //     const menu = this.allmenus['West1'];
        //     let plate = menu[0];
        //     this.currentMenuName = this.currentCuisine.menu[0];
        // for (let key in plate) {
        //   if (key == this.currentCuisine.menu[0]) {
        //     this.currentMenu = plate[key];
        //   }
        // }
        // }
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
    // overflow-y: scroll;
    min-height: 100%;
    width: 100vw;
    -webkit-text-size-adjust: 100%;
  }
</style>
