var Ajv = require('ajv')
const localize =  require('ajv-i18n')

const schema = {
    type:'object',
    properties:{
        name:{
            type:'string',
            format:'email'    // 格式必须是邮箱   (format 最多只支持 string 和 number )
            // test:false,

        },
        age:{
            type:'string',
            errorMessage:{
                type:'必须是字符串',
                minLength:"最小长度是10",
            },
            minLength:10
        },
        pets:{
            type:'array',
            items:{
                type:'string'
            }
        },
        isWorker:{
            type:'boolean'
        }
    },
    required:['name','age']    // 必输
}
// 
var ajv = new Ajv({ allErrors:true , jsonPointers:true })
require('ajv-errors')(ajv)
ajv.addKeyword('test' , {
    //  目前版本  自定义 关键字 校验消息时 不支持中文
    macro(){
        return {
            minLength : 10
        }
    }
})
var validate = ajv.compile(schema)
var valid = validate({
    name:"1132125385@qq.com",
    age:123321,
    pets:['mini','maba'],
    isWorker:true
})

if(!valid) {
    // localize.zh(validate.errors)
    console.log(validate.errors)
}