import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { GetLoginUserRepos } from "../../hooks/GetLoginUserRepos";

const ResultComponent = () => {
  const { data, error } = GetLoginUserRepos();
  console.log(data);

  return (
    <>
      <h2>Fetch Login Users Data is below</h2>
      <div>
        {data?.repositoryOwner.repositories.edges.map((repos) => (
          <ul key={repos.createdAt}>
            <li>test</li>
            <li>{repos.name}</li>
            <li>{repos.createdAt}</li>
          </ul>
        ))}
      </div>
      {/* <div>
        {data?.repositoryOwner.repositories.edges.repositoryEdge.map((repos) => (
          <ul key={repos.repository.name}>
            <li>test</li>
            <li>{repos.repository.name}</li>
            <li>{repos.repository.createdAt}</li>
          </ul>
        ))}
      </div> */}
    </>
  );
};

export const GraphQLFetch: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <Suspense fallback={<p>厄介な広告ページの表示</p>}>
        <ResultComponent />
      </Suspense>
      <button onClick={onClickHome}>to HOME</button>
    </>
  );
});
