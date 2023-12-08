import type { UserOverview } from '$lib/types/UserOverview'
import { Client, cacheExchange, fetchExchange } from '@urql/svelte'
import { get, writable } from 'svelte/store'
import { getToken } from '$lib/utils/cacheServices'

export const graphqlClient = writable<Client>()

export const getGraphqlClient = () => get(graphqlClient)

export const usersOverview = writable<Record<string, UserOverview>>({})

export const getUsersOverview = () => get(usersOverview)

export const createClient = () => {
  const client = new Client({
    url: import.meta.env.VITE_GRAPHQL_ENDPOINT ?? '',
    exchanges: [cacheExchange, fetchExchange],
    requestPolicy: 'network-only',
    fetchOptions: () => {
      const token = getToken()
      return {
        headers: {
          'content-type': 'application/json',
          Authorization: token,
        },
      }
    },
  })

  graphqlClient.set(client)
}
