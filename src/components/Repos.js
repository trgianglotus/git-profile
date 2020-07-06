import React from "react";
import { connect } from "react-redux";
import { Table, Tag, Tooltip } from "antd";

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
  { title: "Created At", dataIndex: "created_at" },
  {
    title: "Language",
    dataIndex: "language",
    render: (text, row, index) => (
      <Tag color="blue" key={row.id}>
        {text}
      </Tag>
    ),
    align: "center",
  },
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