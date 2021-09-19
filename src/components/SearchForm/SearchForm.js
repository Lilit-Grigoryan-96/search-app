import React,{useState, useEffect} from 'react'
import classes from './SearchForm.module.css'
const SearchForm = (props) => {


    const handleSubmitSearch = (e) =>{
        e.preventDefault();
        props.setSerchVal('');
        // props.setTodos(props.todos.filter(todo => todo.category === serchVal));
    };


    return (
        <div className="text-left">
            <form onSubmit={handleSubmitSearch} className={classes.search_form}>
               <input type="text" name="serach" value={props.serchVal} onChange={ev => {props.setSerchVal(ev.target.value)}}/>
               <button className={classes.search_btn}>SEARCH</button>
            </form>
        </div>
    );
};

export default SearchForm;
