import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { getLoginUserRepos } from "../../hooks/getLoginUserRepos";

export const GraphQLFetch: FC = memo(() => {
  const { data, error } = getLoginUserRepos();

  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <p>this is test page</p>
      <button onClick={onClickHome}>to HOME</button>
    </>
  );
});
