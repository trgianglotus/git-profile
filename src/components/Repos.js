import React from "react";
import { connect } from "react-redux";
import { Table, Tag, Tooltip } from "antd";
import { formatDate } from "../utils/formatters";

const columns = [
  {
    title: "Repository",
    dataIndex: "name",
    render: (text, row, index) => {
      return (
        <a target="_blank" rel="noopener noreferrer" href={row.html_url}>
          {text}
        </a>
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
  {
    title: "Created On",
    dataIndex: "created_at",
    render: (text) => {
      return <p>{formatDate(text)}</p>;
    },
    align: "center",
  },
  {
    title: "Language",
    dataIndex: "language",
    render: (text) => (text ? <Tag color="blue">{text}</Tag> : ""),
    align: "center",
  },
];

const Repos = (props) => {
  return (
    <>
      <h1>Repositories</h1>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={props.repos}
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
