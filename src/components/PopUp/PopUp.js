import React,{useState,useEffect} from 'react'
import classes from './PopUp.module.css'
import ToDoList from "../ToDoList/ToDoList";
import ModalForm from "../ModalForm/ModalForm";
const PopUp = () => {

    const [modal, setModal] = useState(false);
    const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const addToDo = (titleVal, category, text, date) =>{
        setTodos(
            todos.concat([
                {
                    id:  Date.now(),
                    date: date,
                    title: titleVal,
                    desc:text,
                    category: category
                }
            ])
        );

    };



    useEffect(() =>{
        localStorage.setItem("todos", JSON.stringify(todos));

    },[todos]);


    let showModal = () => {
        setModal(prev => !prev)
    };



    return (
        <div>
            {modal ? <ModalForm addToDo={addToDo} todos={todos} showModal={showModal}/> :null}
            <button onClick={showModal} className={classes.modal_btn}>modal</button>
            {
                <ToDoList todos={todos} setTodos={setTodos}/>
            }

        </div>
    )
};
export default PopUp;