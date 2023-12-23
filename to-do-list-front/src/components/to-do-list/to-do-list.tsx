import { useEffect, useState } from 'react';
import { useGetAllTasksMutation } from '../../api/to-do-list.ts/to-do-list';
import { AddIcon } from '../icons/add-icon';
import { DeleteIcon } from '../icons/delete-icon';
import { EditIcon } from '../icons/edit-icon';
import { TTask } from '../../types/t-task';

export const ToDoList = () => {
    const [getAllTasks, { isLoading, isError, error, data }] =
        useGetAllTasksMutation();

    useEffect(() => {
        getAllTasks('').unwrap();
    }, [getAllTasks]);

    return (
        <div className="border border-orange-300 px-4 py-4 mt-8 mb-8 w-ffull text-sm font-medium shadow-xl rounded-[0.375rem]">
            <div className="overflow-x-auto">
                {isLoading ? (
                    <span className="text-warning">Loading...</span>
                ) : (
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Задача</th>
                                <th>Статус</th>
                                <th>
                                    <button className="btn btn-outline btn-info join-item">
                                        Создать задачу <AddIcon />
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && (
                                data.map(task =>
                                <tr key={task.id}>
                                    <th>{task.id}</th>
                                    <td>{task.task}</td>
                                    <td>{task.status}</td>
                                    <td>
                                        <div className="join join-horizontal">
                                            <button className="btn btn-outline btn-info join-item">
                                                <EditIcon />
                                            </button>
                                            <button className="btn btn-outline btn-outline btn-warning join-item">
                                                <DeleteIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};
