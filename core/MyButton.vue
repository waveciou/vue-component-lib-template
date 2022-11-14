<template>
  <button class="lib-custom-button">{{ label }}</button>
</template>

<script lang="ts" setup>
  export interface MyButtonProps {
    label: string;
  }

  withDefaults(defineProps<MyButtonProps>(), {
    label: "預設按鈕",
  });
</script>