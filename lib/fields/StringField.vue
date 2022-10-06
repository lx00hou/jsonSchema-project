<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { FilePropDefine } from '../types' //  公用的 props
/**
 * props :{
 *  value:{}
 *  schema:{}
 * onChange:{}
 * }
 */
const props = defineProps(FilePropDefine)
const handleChange = (e: any) => {
  console.log('e', e)
  props.onChange(e.target.value)
}
</script>

<style></style>
