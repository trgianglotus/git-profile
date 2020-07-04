import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Typography, Tabs } from "antd";
import { GithubOutlined } from "@ant-design/icons";

import { getRepos } from "./actions/repoActions";
import { getOrgs } from "./actions/orgActions";
import Orgs from "./components/Orgs";
import Repos from "./components/Repos";
import Overview from "./components/Overview";

const { Search } = Input;
const { Title } = Typography;
const { TabPane } = Tabs;

const App = (props) => {
  const [username, setUsername] = useState("");

  const handleSearch = (value) => {
    if (value !== username && value !== "") {
      props.getRepos(value);
      props.getOrgs(value);
      setUsername(value);
    }
  };

  return (
    <div className="container">
      <div>
        <Title>Git stats</Title>
        <a>
          <GithubOutlined />
        </a>
      </div>

      <Search
        size="large"
        loading={false}
        enterButton
        onSearch={(v, e) => {
          console.log("searching...");
          handleSearch(v);
        }}
      />
      {username ? (
        <div className="quick-report">Git stats for "{username}"</div>
      ) : (
        ""
      )}

      <Tabs defaultActiveKey="1">
        <TabPane tab="Overview" key="1">
          <Overview />
        </TabPane>
        <TabPane tab="Repositories" key="2">
          <Repos />
        </TabPane>
        <TabPane tab="Organizations" key="3">
          <Orgs />
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapStateToProps = (state) => ({
  repos: state.repos,
  orgs: state.orgs,
});

const mapDispatchToProps = { getRepos, getOrgs };

export default connect(mapStateToProps, mapDispatchToProps)(App);
