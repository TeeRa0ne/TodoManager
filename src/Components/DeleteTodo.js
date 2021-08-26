/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import firebase from '../firebase';

const DeleteTodo = ({ id }) => {

    const handleDelete = () => {

        firebase.firestore().collection('TodoList').doc(id).delete();

    };

    return (
        <>
            <a onClick={() => {
                if (window.confirm("Voulez-vous supprimez cette tâche ?")) {
                    handleDelete();
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hover:text-red-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
            </a>
        </>
    );
};

export default DeleteTodo;