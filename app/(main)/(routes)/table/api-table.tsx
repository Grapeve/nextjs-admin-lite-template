"use client";

import { Table, Image } from "antd";
import type { ColumnsType } from "antd/es/table";

// import Image from "next/image";

interface DataType {
  name: string;
  key: Number;
  height: Number;
  weight: Number;
  photo: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

interface ApiTableProps {
  dataSource: DataType[];
  isLoading: boolean;
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
    title: "Hp",
    dataIndex: "hp",
    key: "pokemon-hp",
  },
  {
    title: "Attack",
    dataIndex: "attack",
    key: "pokemon-attack",
  },
  {
    title: "Defense",
    dataIndex: "defense",
    key: "pokemon-defense",
  },
  {
    title: "Speed",
    dataIndex: "speed",
    key: "pokemon-speed",
  },
  {
    title: "Photo",
    dataIndex: "photo",
    key: "pokemon-photo",
    render: (photo) => (
      <div className="w-[96px] h-[96px]">
        <Image src={photo} alt="pokemon" className="object-cover" width={96} />
      </div>
    ),
  },
];

const ApiTable = ({ dataSource, isLoading }: ApiTableProps) => {
  return (
    <Table
      loading={isLoading}
      bordered={true}
      dataSource={dataSource}
      columns={columns}
      scroll={{ x: 0 }}
    />
  );
};

export default ApiTable;
