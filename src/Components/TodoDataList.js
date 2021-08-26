import React, {useState} from 'react';
import axios from 'axios';
import DeleteTodo from './DeleteTodo';


const TodoDataList = ({ TodoList }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editTasks, setEditTasks] = useState("");



    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year:"numeric", 
            month: "long",
            day:"numeric"
        })
        return newDate;
    }

    const handleEdit = () => {
        const data = {
            tasks: editTasks,
            category: TodoList.category,
            date: TodoList.date,
            priority: TodoList.priority,
            
        };

        axios.put('http://localhost:3003/todo/' + TodoList.id, data).then(() => {
            setIsEdit(false);
        });
    };

    return (
        <>
            {/* Listes des tâches */}
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                    <div className="ml-4">
                        {isEdit ? (
                            <input autoFocus defaultValue={TodoList.tasks.id} onChange={(e) => setEditTasks(e.target.value)} type="text" placeholder="Nom de la tâche" />
                        ) : (   
                            <div className="text-sm font-medium text-gray-900">{editTasks ? editTasks : TodoList.tasks}</div>
                        )}
                        <div className="text-sm text-gray-500">Categorie : {TodoList.category}</div>
                    </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{dateParser(TodoList.date)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {TodoList.priority}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {isEdit ? (
                        <a onClick={handleEdit} className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                        Valider
                    </a>
                    ) : (
                        <a onClick={() => setIsEdit(true)} className="text-indigo-600 hover:text-indigo-900">
                        Editer
                    </a>
                    )}
                   <DeleteTodo id={TodoList.id} />
                </td>
                </tr>
            </tbody>

        </>
    );
};

export default TodoDataList;