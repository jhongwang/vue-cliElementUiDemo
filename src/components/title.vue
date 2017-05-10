<template>
  <div></div>
</template>

<script>
  export default {
    props: ['text'],
    mounted: function () {
      document.title = this.text;
    }
  }
</script>