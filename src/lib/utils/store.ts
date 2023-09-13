import type { Client } from '@urql/svelte'
import { get, writable } from 'svelte/store'

export const graphqlClient = writable<Client>()

export const getGraphqlClient = () => get(graphqlClient)
