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
        {data?.repositoryOwner.repositories.edges.edge.nodes.map((repos) => (
          <p key={repos.name}>{repos.name}</p>
        ))}
      </div>
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
