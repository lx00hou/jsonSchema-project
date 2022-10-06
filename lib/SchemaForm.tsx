import { defineComponent, PropType } from 'vue'

import { Schema, SchemaTypes, FilePropDefine } from './types'

import SchemaItem from './SchemaItem'

export default defineComponent({
  props: FilePropDefine,
  name: 'SchemaForm',
  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    return () => {
      const { schema, value, onChange } = props
      return (
        <SchemaItem schema={schema} value={value} onChange={handleChange} />
      )
    }
  },
})
