import { dev } from './env.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

class AppState extends EventEmitter {
  user = {}
  account = {}
  /** @type {import('./Models/Value').Value[]} */
  values = []
  socketData = []

  /** @type {import('./Models/Post.js').Post[]} */
  posts = []

  activePosts = null

  /** @type {import('./Models/Comment').Comment[]} */
  comments = [

    { name: "Dave", description: "This post is great and it is super sick" },
    { name: "Frank", description: "I dont really like this post" },
    { name: "Thor", description: "comment over here" }

  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.ProxyState = ProxyState
}
