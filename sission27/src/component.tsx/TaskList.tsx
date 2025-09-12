import React from "react";
import { useOutletContext, Link } from "react-router-dom";

export interface IDataTask {
  id: number;
  title: string;
  description: string;
}

type OutletType = {
  tasks: IDataTask[];
};

export default function TaskList() {
  const { tasks } = useOutletContext<OutletType>();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Danh sách công việc</h2>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <Link to={`${task.id}`}>
              <p className="text-blue-600 font-bold mt-2">Xem chi tiết</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
