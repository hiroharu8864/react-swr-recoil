### Recoil

- Recoil は META が開発しているステート管理用ライブラリ

#### 発行クエリ

```sql
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
```

```sql
{
  "loginUser": "hiroharu8864",
  "firstFetchNums": 100
}
```
