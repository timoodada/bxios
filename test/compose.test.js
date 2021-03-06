import {compose} from '../dist/lib/core/compose'
import {CancelToken} from '../dist/lib'

const token = CancelToken.source()

compose([
  async function(ctx, next) {
    ctx.a = 2
    console.log(`第一个 开始`)
    await next()
    console.log(`第一个 结束`)
  },
  async function(ctx, next) {
    ctx.b = 3
    console.log(`第二个 开始`)
    // await sleep()
    await next()
    console.log(`第二个 结束`)
  },
  async function(ctx, next) {
    ctx.c = 4
    console.log(`第三个 开始`)
    // await sleep()
    await next()
    console.log(`第三个 结束`)
  }
])({}, (err, ctx) => {
  console.log(err, ctx)
})
// setTimeout(function() {
//   token.cancel('手动取消')
// }, 2000)
// function sleep(time=3000) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time)
//   })
// }

// function a() {
//   return new Promise((resolve, reject) => {
//     resolve()
//   })
// }

// a().then(() => {
//   return a().then(() => {
//     console.log('then')
//     return Promise.resolve()
//   })
// }).then(() => {
//   console.log('finally')
// })
