import React from "react";
import { Table, Tag, Space } from "antd";
// import pd-fake-data.json from "./pd-fake-data.json"

const PDTracker = () => {
  const data = [
    {
      student_id: 1,
      name: "student 1",
      communication: 3,
      resilience: 4,
      growth: 4,
      progress: ["good"],
    },
    {
      student_id: 2,
      name: "student 2",
      communication: 5,
      resilience: 5,
      growth: 5,
      progress: ["excellent"],
    },
    {
      student_id: 3,
      name: "student 3",
      communication: 1,
      resilience: 2,
      growth: 3,
      progress: ["struggling"],
    },
    {
      student_id: 4,
      name: "student 4",
      communication: 2,
      resilience: 3,
      growth: 1,
      progress: ["struggling"],
    },
  ];
  // const data = [
  //   {
  //     student_id: 0,
  //     name: "Christoper Peteuil",
  //     Communication: 2,
  //     Resilience: 2,
  //     Growth: 5,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 1,
  //     name: "Kourtney Calderwood",
  //     Communication: 3,
  //     Resilience: 5,
  //     Growth: 1,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 2,
  //     name: "Muoi Cary",
  //     Communication: 4,
  //     Resilience: 5,
  //     Growth: 5,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 3,
  //     name: "Era Moselle",
  //     Communication: 1,
  //     Resilience: 3,
  //     Growth: 5,
  //     homework_submitted: "late",
  //     Action: "",
  //   },
  //   {
  //     student_id: 4,
  //     name: "Trena Hornby",
  //     Communication: 2,
  //     Resilience: 5,
  //     Growth: 5,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 5,
  //     name: "Antione Godbolt",
  //     Communication: 4,
  //     Resilience: 3,
  //     Growth: 2,
  //     homework_submitted: "no",
  //     Action: "",
  //   },
  //   {
  //     student_id: 6,
  //     name: "Kyra Buen",
  //     Communication: 3,
  //     Resilience: 1,
  //     Growth: 5,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 7,
  //     name: "Francesco Agundez",
  //     Communication: 2,
  //     Resilience: 1,
  //     Growth: 1,
  //     homework_submitted: "late",
  //     Action: "",
  //   },
  //   {
  //     student_id: 8,
  //     name: "Leslie Thate",
  //     Communication: 5,
  //     Resilience: 4,
  //     Growth: 3,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 9,
  //     name: "Alva Conkel",
  //     Communication: 3,
  //     Resilience: 4,
  //     Growth: 3,
  //     homework_submitted: "no",
  //     Action: "",
  //   },
  //   {
  //     student_id: 10,
  //     name: "Denver Barness",
  //     Communication: 2,
  //     Resilience: 5,
  //     Growth: 2,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 11,
  //     name: "Yessenia Fossen",
  //     Communication: 3,
  //     Resilience: 5,
  //     Growth: 2,
  //     homework_submitted: "late",
  //     Action: "",
  //   },
  //   {
  //     student_id: 12,
  //     name: "Brittney Garfield",
  //     Communication: 5,
  //     Resilience: 5,
  //     Growth: 5,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 13,
  //     name: "Adolfo Milbury",
  //     Communication: 1,
  //     Resilience: 1,
  //     Growth: 4,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 14,
  //     name: "Shanita Grigaliunas",
  //     Communication: 2,
  //     Resilience: 1,
  //     Growth: 3,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 15,
  //     name: "Cory Rodriquz",
  //     Communication: 5,
  //     Resilience: 3,
  //     Growth: 3,
  //     homework_submitted: "late",
  //     Action: "",
  //   },
  //   {
  //     student_id: 16,
  //     name: "Sandy Braim",
  //     Communication: 5,
  //     Resilience: 1,
  //     Growth: 4,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 17,
  //     name: "Alyssa Wacaster",
  //     Communication: 1,
  //     Resilience: 5,
  //     Growth: 5,
  //     homework_submitted: "no",
  //     Action: "",
  //   },
  //   {
  //     student_id: 18,
  //     name: "Candra Laguardia",
  //     Communication: 3,
  //     Resilience: 2,
  //     Growth: 1,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 19,
  //     name: "Everett Flasher",
  //     Communication: 3,
  //     Resilience: 4,
  //     Growth: 3,
  //     homework_submitted: "no",
  //     Action: "",
  //   },
  //   {
  //     student_id: 20,
  //     name: "Ted Denfip",
  //     Communication: 2,
  //     Resilience: 1,
  //     Growth: 1,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 21,
  //     name: "Harley Dearmore",
  //     Communication: 4,
  //     Resilience: 3,
  //     Growth: 1,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 22,
  //     name: "Dominique Kelcourse",
  //     Communication: 3,
  //     Resilience: 3,
  //     Growth: 5,
  //     homework_submitted: "no",
  //     Action: "",
  //   },
  //   {
  //     student_id: 23,
  //     name: "Tawnya Soenksen",
  //     Communication: 1,
  //     Resilience: 2,
  //     Growth: 2,
  //     homework_submitted: "late",
  //     Action: "",
  //   },
  //   {
  //     student_id: 24,
  //     name: "Lynette Gehrlein",
  //     Communication: 3,
  //     Resilience: 4,
  //     Growth: 3,
  //     homework_submitted: "late",
  //     Action: "",
  //   },
  //   {
  //     student_id: 25,
  //     name: "Dayna Hamiter",
  //     Communication: 2,
  //     Resilience: 3,
  //     Growth: 2,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 26,
  //     name: "Alysha Laba",
  //     Communication: 3,
  //     Resilience: 2,
  //     Growth: 5,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 27,
  //     name: "Rogelio Gundersen",
  //     Communication: 4,
  //     Resilience: 1,
  //     Growth: 5,
  //     homework_submitted: "late",
  //     Action: "",
  //   },
  //   {
  //     student_id: 28,
  //     name: "Vern Knochel",
  //     Communication: 3,
  //     Resilience: 4,
  //     Growth: 4,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  //   {
  //     student_id: 29,
  //     name: "Rogelio Trullinger",
  //     Communication: 5,
  //     Resilience: 4,
  //     Growth: 2,
  //     homework_submitted: "no",
  //     Action: "",
  //   },
  //   {
  //     student_id: 30,
  //     name: "Phil Brumbach",
  //     Communication: 2,
  //     Resilience: 2,
  //     Growth: 5,
  //     homework_submitted: "yes",
  //     Action: "",
  //   },
  // ];
  const columns = [
    {
      title: "#",
      dataIndex: "student_id",
      key: "student_id",
      // render: (text) => <a href="http://google.co.uk">{text}</a>,
    },
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
