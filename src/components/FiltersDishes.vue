<template>
  <div>
      <p>O à la carte menu</p>
      <h6 class="filter__title">
                Filter by:
    </h6>
    <h6 
    @click="useVegeterian"
    class="filter__title">
        Vegeterian
    </h6>
    <h6 
    @click="useNuts"
    class="filter__title">
        Contain nuts
    </h6>
  </div>
</template>

<script>
export default {
    name: 'FiltersDishes',
    props: {
        useVegeterian: Function,
        useNuts: Function,
    }
}
</script>

<style>

</style>