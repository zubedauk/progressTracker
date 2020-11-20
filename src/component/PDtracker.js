import React from "react";
import { Table, Tag, Space } from "antd";
// import pd-fake-data.json from "./pd-fake-data.json"

const PDTracker = () => {
  const data = [
    {
      student_id: 1,
      name: "student 1",
      communication: 3,
      resilience: 5,
      growth: 5,
      progress: ["good"],
    },
    {
      student_id: 2,
      name: "student 2",
      communication: 4,
      resilience: 5,
      growth: 5,
      progress: ["excellent"],
    },
    {
      student_id: 3,
      name: "student 3",
      communication: 1,
      resilience: 5,
      growth: 5,
      progress: ["struggling"],
    },
    {
      student_id: 4,
      name: "student 4",
      communication: 2,
      resilience: 5,
      growth: 5,
      progress: ["struggling"],
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="http://google.co.uk">{text}</a>,
    },
    {
      title: "Communication",
      dataIndex: "communication",
      key: "communication",
    },
    {
      title: "Resilience",
      dataIndex: "resilience",
      key: "resilience",
    },
    {
      title: "Growth",
      dataIndex: "growth",
      key: "growth",
    },
    {
      title: "Progress",
      key: "progress",
      dataIndex: "progress",
      render: (progress) => (
        <>
          {progress.map((prog) => {
            let color = prog === "excellent" ? "geekblue" : "green";
            if (prog === "struggling") {
              color = "red";
            }
            return (
              <Tag color={color} key={prog}>
                {prog.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a href="http://google.co.uk">Send {record.name} email</a>
          {/* <a href="http://google.co.uk">Delete</a> */}
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default PDTracker;
