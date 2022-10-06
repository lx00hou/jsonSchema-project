<template>
  <input type="number" :value="value" @input="handleChange" />
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
  const { value } = e.target
  const num = Number(value)
  num ? props.onChange(num) : props.onChange(undefined)
}
</script>

<style></style>
