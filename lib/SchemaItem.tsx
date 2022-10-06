import { defineComponent, PropType } from 'vue'
import { Schema, SchemaTypes, FilePropDefine } from './types'

import NumberField from './fields/NumberField.vue'
import StringField from './fields/StringField.vue'

export default defineComponent({
  name: 'SchemaItem',
  props: FilePropDefine,
  setup(props) {
    return () => {
      const { schema } = props
      const type = schema.type
      let Component: any
      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        default: {
          console.warn(`不支持 ${type}`)
        }
      }

      return <Component {...props} />
    }
  },
})
