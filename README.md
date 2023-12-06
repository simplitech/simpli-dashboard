# Click-Clock

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Setup

Create a .env file on the root folder with a content like the following.

```
VITE_GRAPHQL_ENDPOINT="http://localhost:4000/graphql"
```

- _This .env file is **not commited**, and should only be used for local, development variables._

Install the dependencies

```shell
npm i
```

Run this command to generate all graphql requests

```shell
npm run generate
```

Run the project

```shell
npm run dev
```

## Graphql

### Example

```ts
<script lang="ts">
  import { getContextClient, mutationStore } from '@urql/svelte'
  import * as gql from '../graphql/generated'

  const auth = mutationStore({
    client: getContextClient(),
    query: gql.SigninDocument,
    variables: {
      email: 'example@example.com',
      password: 'example',
    },
  })
</script>

<p>{$auth.data}</p>
```

### Generate new query or mutation

Create a new file inside `src/renderer/src/graphql/operations` and follow the same structure

Run this command to generate the graphql requests

```shell
npm run generate
```
