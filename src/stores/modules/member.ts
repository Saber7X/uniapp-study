import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
    'member', // 1. Store 的唯一标识名称

    () => { // 2. Store 的定义函数
        // 会员信息
        const profile = ref<any>() // 3. 使用 ref 定义一个响应式变量 profile，初始值为 undefined，类型为 any

        // 保存会员信息，登录时使用，接受一个值
        const setProfile = (val : any) => { // 4. 定义一个函数 setProfile，用于设置 profile 的值
            profile.value = val // 5. 将传入的参数 val 赋值给 profile 的响应式值
        }

        // 清理会员信息，退出时使用
        const clearProfile = () => { // 6. 定义一个函数 clearProfile，用于清空 profile 的值
            profile.value = undefined // 7. 将 profile 的响应式值设置为 undefined
        }

        // 记得 return
        return { // 8. 返回 store 中定义的状态和方法
            profile, // 9. 返回响应式变量 profile
            setProfile, // 10. 返回设置 profile 的方法 setProfile
            clearProfile, // 11. 返回清空 profile 的方法 clearProfile
        }
    },

    // TODO: 持久化
    {
        persist: true, // 12. 配置持久化，将 store 的状态持久化到本地存储
    },
)