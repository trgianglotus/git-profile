import React from "react";
import { connect } from "react-redux";
import { Table, Tag, Tooltip } from "antd";

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
    title: "Created At",
    dataIndex: "created_at",
    render: (text, row, index) => {
      const date = new Date(text);
      const dateTimeFormat = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
      const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year },
      ] = dateTimeFormat.formatToParts(date);
      return <p>{`${day}-${month}-${year}`}</p>;
    },
    align: "center",
  },
  {
    title: "Language",
    dataIndex: "language",
    render: (text, row, index) => <Tag color="blue">{text}</Tag>,
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
