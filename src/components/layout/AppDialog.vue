<template>
  <div
    class="dialog"
    v-if="show"
    @mousedown="isClosing = $event.target === $el"
    @mouseup.self="isClosing && closeDialog()"
    @keydown.esc="closeDialog"
  >
    <div class="dialog__wrap">
      <div class="dialog__header">{{ dialogTitle }}</div>
      <div class="dialog__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs, ref } from "vue";
interface IAppPopup {
  show: boolean;
  dialogTitle: string;
}
const props = defineProps<IAppPopup>();
const emit = defineEmits(["update:show"]);
const { show = false, dialogTitle = "" } = toRefs(props);
const isClosing = ref(false);
const closeDialog = () => {
  emit("update:show", false);
};
const testFn = () => {
  console.log("esc");
};
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  &__wrap {
    min-width: 20%;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
  }
  &__content {
    margin-top: 1rem;
  }
  &__header {
    text-align: center;
  }
}
</style>
