import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "URL",
    dataIndex: "html_url",
    render: (text, row, index) => {
      return <a href={text}>{text}</a>;
    },
  },
  { title: "Created At", dataIndex: "created_at" },
  { title: "Language", dataIndex: "language" },
];

const Repos = (props) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={props.repos.repos}
        pagination={{ pageSize: 20 }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  repos: state.repos,
});

export default connect(mapStateToProps)(Repos);
