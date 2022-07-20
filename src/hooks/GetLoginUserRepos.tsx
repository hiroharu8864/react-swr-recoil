import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { GitHubRepos } from "../type/GitHubRepos";

const getLoginUserReposQuery = `
query loginUserRepository($loginUser: String!, $firstFetchNums: Int!) {
  repositoryOwner(login: $loginUser) {
    repositories(privacy: PRIVATE, first: $firstFetchNums) {
      edges{
        node {
          createdAt
          name
        }
      }
    }
  }
}
`;
const loginUser = "hiroharu8864";
const firstFetchNums = 100;

export const GetLoginUserRepos = () => {
  const access_token = "ghp_token";
  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `bearer ${access_token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  const { data, error } = useSWR<GitHubRepos>(
    [getLoginUserReposQuery, loginUser, firstFetchNums],
    (query, login, first) =>
      client.request(query, { loginUser: login, firstFetchNums: first }),
    {
      suspense: true
    }
  );
  console.log(data);

  return { data, error };
};
