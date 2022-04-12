<template>
  <div>
    <button @click="bookingTable">{{book ? "Mission complete" : "Book a table"}}</button>
  </div>
</template>

<script>
export default {
    name: "BookTable",
    props: {
        book: Boolean,
        bookingTable: Function,
    }

}
</script>

<style>

</style>