import { AddIcon } from '../icons/add-icon';
import { DeleteIcon } from '../icons/delete-icon';
import { EditIcon } from '../icons/edit-icon';

export const ToDoList = () => {
    return (
        <div className="border border-orange-300 px-4 py-4 mt-8 mb-8 w-ffull text-sm font-medium shadow-xl rounded-[0.375rem]">
            <div className="overflow-x-auto">
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
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
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
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
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
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
