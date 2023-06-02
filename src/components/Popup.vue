<script>
export default {
  props: ["TogglePopup"],
};
</script>

<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <p>heeey z popup 1</p>

      <img src="../assets/img/demo1.jpg" alt="" />
      <button class="popup-close" @click="TogglePopup()">Close Popup</button>
    </div>
  </div>
  <!--  -->
</template>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  .popup-inner {
    background: #517522;
    padding: 32px;
  }

  p {
    color: red;
  }
}
</style>
