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
  edges: RepositoryEdge;
};
type RepositoryEdge = {
  repositoryEdge: Array<Repository>;
};
type Repository = {
  repository: Node;
};
type Node = {
  createdAt: string;
  name: string;
};
