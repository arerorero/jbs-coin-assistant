<template>
  <div class="drag-bar">
    <div @click="close" class="options" id="exit"></div>
    <div class="options" id="fullscreen">+</div>
    <div class="options" id="minimize">-</div>
  </div>
</template>

<script>
export default {
  setup() {
    function close() {
      window.close();
    }
    return { close };
  },
};
</script>

<style>
.drag-bar {
  -webkit-app-region: drag;
  height: 3em;
  background: black;
}

#exit {
  background: red;
}
#minimize {
  background: yellow;
}
#fullscreen {
  background: green;
}
.options {
  -webkit-app-region: no-drag;
  float: right;
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border: 1px solid #aaa;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-right: 1rem;
}
</style>
