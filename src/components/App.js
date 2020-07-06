import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Tabs } from "antd";
import { GithubOutlined } from "@ant-design/icons";

import { getOrgs, getRepos } from "../actions.js";
import Orgs from "./Orgs";
import Repos from "./Repos";

const { Search } = Input;
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
      <div className="header">
        <p className="title">Git profile</p>
        <a
          href="https://github.com/trgianglotus/perx-react-interview"
          target="_blank"
          rel="noopener noreferrer"
          className="git"
        >
          <GithubOutlined />
        </a>
      </div>

      <Search
        placeholder="khzaw"
        size="large"
        loading={false}
        enterButton
        onSearch={(v, e) => {
          console.log("searching...");
          handleSearch(v);
        }}
      />
      {username ? (
        <div className="quick-report">
          Showing public profile of "{username}"
        </div>
      ) : (
        ""
      )}

      <Tabs defaultActiveKey="1">
        <TabPane tab="Repositories" key="1">
          <Repos />
        </TabPane>
        <TabPane tab="Organizations" key="2">
          <Orgs />
        </TabPane>
      </Tabs>
    </div>
  );
};

const mapDispatchToProps = { getRepos, getOrgs };

export default connect(null, mapDispatchToProps)(App);
