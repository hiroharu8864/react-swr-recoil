/**
 * 返却値の型
 * {repositoryOwner: Object}
 * repositoryOwner: Object
 * repositories: Object
 * edges: Array<Object>
 * node: Object
 *   createAt: String
 *   name: String
 */
export type GitHubRepos = {
  repositoryOwner: RepositoryOwner;
};
type RepositoryOwner = {
  repositories: RepositoryConnection;
};
type RepositoryConnection = {
  edges: Array<NumObject>;
};
type NumObject = {
  node: Node;
};
type Node = {
  createdAt: string;
  name: string;
};
