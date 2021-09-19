import React,{useState} from 'react'
import SearchForm from "../SearchForm/SearchForm"
const ToDoList = (props) => {

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
                            <div className="col-md-6">
                                <SearchForm todos={props.todos} setTodos={props.setTodos}/>
                                {
                                    [...props.todos].map((todo, id) => {
                                        return (
                                            <div onClick={()=> showNote(id)} key={id} className="text-left mb-3">
                                                <h3>{todo.title}</h3>
                                                <span>{todo.date}</span>
                                                <span>{todo.category}</span>
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
                                                    <p>{todo.date}</p>
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
