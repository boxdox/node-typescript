import { EnvType, load } from 'ts-dotenv'

const schema = {
	TEXT: String,
}

// eslint-disable-next-line import/no-mutable-exports
export let env: EnvType<typeof schema>

export const loadEnv = (): void => {
	env = load(schema)
}
