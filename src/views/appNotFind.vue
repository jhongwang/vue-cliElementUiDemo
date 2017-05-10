<template>
  <div>
    <c-title :text="title" :hide="true"></c-title>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  import cTitle from '../components/title.vue';

  export default {
    name: 'appNotFind',
    data () {
      return {
        title: 'ERROR!',
      }
    },
    computed: {

    },
    mounted: function () {
      this.$store.commit('MESSAGE', '404 Not Found！');
    },
    components: {cTitle}
  }
</script>