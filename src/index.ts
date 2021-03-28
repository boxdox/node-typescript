import { loadEnv, env } from './env'

// load the env vars
loadEnv()

// eslint-disable-next-line no-console
console.log(env.TEXT)
