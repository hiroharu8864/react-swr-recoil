import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import moment from "moment";

import { GetLoginUserRepos } from "../../hooks/GetLoginUserRepos";

const ResultComponent = () => {
  const { data, error } = GetLoginUserRepos();
  // console.log(data?.repositoryOwner.repositories.edges);

  const now = moment().format("YYYYMMDD_HHmmss");
  // console.log(now);

  const headers = [
    { label: "Repository Name", key: "repositoryname" },
    { label: "Repository Create Date", key: "repositorycreatedate" }
  ];
  const csvdata = [
    { repositoryname: "test", repositorycreatedate: "2022-07-20" },
    { repositoryname: "test2", repositorycreatedate: "2022-07-21" }
  ];

  return (
    <>
      <h2>CSV Files</h2>
      <CSVLink data={csvdata} headers={headers} filename={`${now}.csv`}>
        CSV Files Download
      </CSVLink>
      {/* <div>
        {data?.repositoryOwner.repositories.edges.map((repos) => (
          <ul key={repos.node.name}>
            <li>{repos.node.name}</li>
            <li>{repos.node.createdAt}</li>
          </ul>
        ))}
      </div> */}
    </>
  );
};

export const GraphQLFetchCSV: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <Suspense fallback={<p>...データ取得中</p>}>
        <ResultComponent />
      </Suspense>
      <br />
      <br />
      <button onClick={onClickHome}>to HOME</button>
    </>
  );
});
