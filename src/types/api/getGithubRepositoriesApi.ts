export interface GetGithubRepositoriesApi {
  incomplete_results: boolean;
  items: RepositoryApi[];
  total_count: number;
}

// https://docs.github.com/en/rest/search#search-repositories
export interface RepositoryApi {
  id: number | string;
  full_name: string;
  description: string;
  watchers_count: number;
  forks_count: number;
  stargazers_count: number;
  owner: RepositoryOwnerApi;
}

interface RepositoryOwnerApi {
  avatar_url: string;
}
