import type { UserOverview } from '$lib/types/UserOverview'
import type { Client } from '@urql/svelte'
import { get, writable } from 'svelte/store'

export const graphqlClient = writable<Client>()

export const getGraphqlClient = () => get(graphqlClient)

export const usersOverview = writable<Record<string, UserOverview>>({})

export const getUsersOverview = () => get(usersOverview)
