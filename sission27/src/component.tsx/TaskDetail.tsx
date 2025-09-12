import React from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";

export interface IDataTask {
  id: number;
  title: string;
  description: string;
}

type OutletType = {
  tasks: IDataTask[];
};

export default function TaskDetail() {
  const { tasks } = useOutletContext<OutletType>();
  const { id } = useParams<{ id: string }>();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="p-6">
        <p className="text-red-600 font-bold">Không tìm thấy công việc!</p>
        <Link to=".." className="text-blue-600 mt-2 block">Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
      <p className="text-gray-700 mb-4">{task.description}</p>
      <Link to=".." className="text-blue-600 font-bold">Quay lại danh sách</Link>
    </div>
  );
}
