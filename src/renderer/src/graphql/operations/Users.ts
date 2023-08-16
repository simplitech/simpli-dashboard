import { gql } from "@urql/svelte";

export const queries = gql`
	query users(
		$where: UserWhereInput!
	) {
		users(where: $where) {
		 id
		}
	}

	mutation signin($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			token
		}
	}
`