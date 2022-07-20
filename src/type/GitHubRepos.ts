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
  repositories: Repositories;
};
type Repositories = {
  edges: Edges;
};
type Edges = {
  nodes: Array<Edge>;
};
type Edge = {
  node: Node;
};
type Node = {
  createdAt: string;
  name: string;
};
