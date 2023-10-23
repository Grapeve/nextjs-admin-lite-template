"use client";

import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

import Image from "next/image";

interface DataType {
  name: string;
  key: Number;
  height: Number;
  weight: Number;
  photo: string;
}

interface ApiTableProps {
  dataSource: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "pokemon-name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "pokemon-height",
  },
  {
    title: "Weight",
    dataIndex: "weight",
    key: "pokemon-weight",
  },
  {
    title: "Photo",
    dataIndex: "photo",
    key: "pokemon-photo",
    render: (photo) => (
      <img src={photo} alt="pokemon" className="object-cover" />
    ),
  },
];

const ApiTable = ({ dataSource }: ApiTableProps) => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default ApiTable;
