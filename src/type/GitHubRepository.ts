export type GitHubRepository = {
  repositoryOwner: RepositoryOwner;
};
type RepositoryOwner = {
  repositories: Repositories;
};
type Repositories = {
  edges: Array<Node>;
};
type Node = {
  createdAt: string;
  name: string;
};
