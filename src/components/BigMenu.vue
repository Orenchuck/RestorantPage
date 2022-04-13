<template>
  <div
    v-for="(name, idx) in currentMenu"
    :key="idx"
  >
      <p>{{name[0]}}
          <span v-if="name[2] == 'true'">(v)</span>
          <span v-if="name[3] == 'true'">(n)</span>
      </p>
      <p>{{name[1]}}</p>
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

<style>

</style>