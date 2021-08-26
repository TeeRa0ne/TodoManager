/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavList from '../Components/NavigationList';
import TodoDataList from '../Components/TodoDataList';

const List = () => {

    const [TodoData, setTodoData] = useState([]);
    const [tasks, setTasks] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState();
    const [priority, setPriority] = useState();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:3003/todo').then((res) => setTodoData(res.data));
    };

    function toTimestamp(strDate)
    { 
        let datum = Date.parse(strDate); 
        
        return datum/1000;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3003/todo", {
            tasks,
            category,
            date,
            priority,
        }).then(() => {
            setTasks("");
            setCategory("");
            setDate(""); 
            setPriority("");
            getData();
        })
    }

    return (
        <>
            {/* Navigation - Active (lISTE) */}
            <NavList />
            <br />
            {/* Formulaire d'ajout */}
            <form className="ml-3 mb-2 space-x-2" onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setTasks(e.target.value)} type="text" placeholder="Nom de la tâche" value={tasks}/>
                <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Categorie" value={category}/>
                <input onChange={(e) => setDate(e.target.value)} id="date" type="date" value={date} />
                <input onChange={(e) => setPriority(e.target.value)} type="text" placeholder="Priorité" value={priority} />

                {/* Button d'ajout */}
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5 ml-2">
                    Ajouter une tâche
                </button>
            </form>
            {/* Tableau Todo */}
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                            <tr>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Tâches
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Date de fin
                                </th>
                                <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                Priorité
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Editer</span>
                                </th>
                            </tr>
                      </thead>
                      {TodoData.map((TodoList) => 
                        <TodoDataList key={TodoList.id} TodoList={TodoList} />
                      )}
                      </table>
                      </div>
                  </div>
            </div>
        </div>


          
        </>
    );
};

export default List;