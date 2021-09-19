import React,{useState} from 'react'
import SearchForm from "../SearchForm/SearchForm"
import classes from "./ToDoList.module.css"
const ToDoList = (props) => {
    const [serchVal, setSerchVal] = useState('');
    const [toggleItem,settoggleItem] = useState(null);
    const showNote = (id) => {
        if(toggleItem == id){
            settoggleItem(null)
        }
        settoggleItem(id);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className={`col-md-6 ${classes.todo_items}`}>
                                <SearchForm todos={props.todos} setTodos={props.setTodos} serchVal={serchVal} setSerchVal={setSerchVal}/>
                                {
                                    [...props.todos].map((todo, id) => {
                                        return (
                                            <div onClick={()=> showNote(id)} key={id} className={serchVal==='' || serchVal===todo.category ? 'd-block text-left mb-3' : 'd-none'} >
                                                <h3>{todo.title}</h3>
                                                <span>{todo.date}</span>
                                                <span>({todo.category})</span>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                            <div className="col-md-6">
                                {
                                    [...props.todos].map((todo, id) => {
                                        return (

                                                <div className={toggleItem==id ? 'd-block' : 'd-none'} key={id}>
                                                    <h1>{todo.title}</h1>
                                                    <p>{todo.category} | {todo.date} </p>
                                                    <p>{todo.desc}</p>
                                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ToDoList;
