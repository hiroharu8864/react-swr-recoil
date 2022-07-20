import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCheck = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);
  const onClickFetchCSVCheck = useCallback(() => {
    navigate("/fetchcsv");
  }, [navigate]);
  return (
    <>
      <p>Recoil-Relay FetchCheck</p>
      <button onClick={onClickFetchCheck}>GraphQL API Response Check</button>
      <br />
      <button onClick={onClickFetchCSVCheck}>GraphQL CSV</button>
    </>
  );
});
