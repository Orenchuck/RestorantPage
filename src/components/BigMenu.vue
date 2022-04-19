<template>
<div class="menu_wrapper">
  <div
    v-for="(name, idx) in currentMenu"
    :key="idx"
    class="dish_item"
  >
      <p class="dish_title">{{name[0]}}
          <span v-if="name[2] == 'true'">(v)</span>
          <span v-if="name[3] == 'true'">(n)</span>
      </p>
      <p class="dish_price">{{name[1]}}</p>
  </div>
</div>
</template>

<script>
export default {
    name: 'BigMenu',
    props: {
        currentMenu: Object,
    }

}
</script>

<style lang="scss">
  .menu_wrapper {
    background-color: #fff;
    padding: 48px 70px 70px;
    max-height: 2225.19px;
    height: auto;
    align-content: space-between;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
  }

  .dish_item {
    display: flex;
    margin-bottom: 0;
    margin-top: 4px;
    -webkit-box-direction: normal;
  }

  .dish_title {
    letter-spacing: .02em;
    line-height: 1.5em;
    font-size: 21px;
    font-weight: 300;
    margin-right: 8%;
    margin-bottom: 0;
    color: #140906;
    font-family: RockwellStd;
  }

  .dish_price {
    letter-spacing: .02em;
    line-height: 1.5em;
    color: #a59e9e;
    font-family: Muli-Bold;
    margin-left: auto;
    margin-bottom: 0;
  }
</style>