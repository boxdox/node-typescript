import { load } from 'ts-dotenv'

const env = load({
  TEXT: String,
})

console.log(env.TEXT)
