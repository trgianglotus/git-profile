import React from "react";
import { connect } from "react-redux";
import { Table, Avatar, Tooltip } from "antd";

const columns = [
  {
    title: "Organization",
    dataIndex: "name",
    render: (text, row, index) => {
      return (
        <div>
          <Avatar src={row.avatar_url} className="org-avatar" />
          <a target="_blank" rel="noopener noreferrer" href={row.html_url}>
            {text}
          </a>
        </div>
      );
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    ellipsis: {
      showTitle: false,
    },
    render: (text) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
  },
  { title: "Email", dataIndex: "email" },

  {
    title: "Repositories",
    dataIndex: "repos_url",
    align: "center",
    render: (text, row, index) => {
      return (
        <a target="_blank" rel="noopener noreferrer" href={text}>
          {row.public_repos}
        </a>
      );
    },
  },
];

const Orgs = (props) => {
  return (
    <>
      <h1>Organizations</h1>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={props.orgs}
        pagination={{
          pageSize: 10,
          position: ["bottomCenter"],
          hideOnSinglePage: true,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  orgs: state.orgs,
});

export default connect(mapStateToProps)(Orgs);
