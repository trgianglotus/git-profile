import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, row, index) => {
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={row.html_url}
          key={row.id}
        >
          {text}
        </a>
      );
    },
  },
  { title: "Description", dataIndex: "description", ellipsis: true },
  { title: "Created At", dataIndex: "created_at" },
  { title: "Language", dataIndex: "language" },
];

const Repos = (props) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={props.repos.repos}
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
  repos: state.repos,
});

export default connect(mapStateToProps)(Repos);
