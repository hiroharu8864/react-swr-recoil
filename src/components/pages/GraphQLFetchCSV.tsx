import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import moment from "moment";

import { GetLoginUserRepos } from "../../hooks/GetLoginUserRepos";
import { GetCsvData } from "../../hooks/GetCsvData";

const ResultComponent = () => {
  const { data, error } = GetLoginUserRepos();
  const dataRepos = data?.repositoryOwner.repositories.edges;
  console.log(dataRepos);
  /** 空白２文字で整形して出力 */
  const dataReposJson = JSON.stringify(dataRepos, null, 2);
  console.log(dataReposJson);

  const parseData = JSON.parse(dataReposJson);
  console.log(parseData.length);
  console.log(parseData[0].node.name);
  console.log(parseData[0].node.createdAt);

  const now = moment().format("YYYYMMDD_HHmmss");
  // console.log(now);

  const csvdata = parseData.map((repos) => ({
    repositoryname: `${repos.node.name}`,
    repositorycreatedate: `${repos.node.createdAt}`
  }));

  const headers = [
    { label: "Repository Name", key: "repositoryname" },
    { label: "Repository Create Date", key: "repositorycreatedate" }
  ];
  const testdata = [
    {
      repositoryname: `${parseData[0].node.name}`,
      repositorycreatedate: `${parseData[0].node.createdAt}`
    },
    {
      repositoryname: `${parseData[1].node.name}`,
      repositorycreatedate: `${parseData[1].node.createdAt}`
    },
    {
      repositoryname: `${parseData[2].node.name}`,
      repositorycreatedate: `${parseData[2].node.createdAt}`
    }
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
