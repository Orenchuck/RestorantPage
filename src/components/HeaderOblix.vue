<template>
  <div class="header">
    <div class="logo"></div>
    <div>East</div>
    <div>West</div>
    <div>Bar</div>
    <div>Menus</div>
    <div>Oblix Experience</div>
    <button @click="bookingTable">{{book ? "Mission complete" : "Book a table"}}</button>
  </div>
</template>

<script>
export default {
  name: 'HeaderOblix',
    props: {
        book: Boolean,
        bookingTable: Function,
    }
}
</script>

<style scoped>
</style>
