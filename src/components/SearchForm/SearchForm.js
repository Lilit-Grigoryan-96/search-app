import React,{useState, useEffect} from 'react'

const SearchForm = (props) => {

    const oldtodos = JSON.parse(localStorage.getItem("todos"));

    useEffect(() =>{
        localStorage.setItem("newtodos", JSON.stringify(oldtodos));

    },[oldtodos]);

    const todos = JSON.parse(localStorage.getItem("newtodos"));
    const arr = [...oldtodos];
    const [serchVal, setSerchVal] = useState('');
    const func=()=>{
        props.setTodos(arr);
    };
    const handleSubmitSearch = (e) =>{
        e.preventDefault();
        setSerchVal('');

    };
    const click = () =>{
        props.setTodos(todos.filter(todo => todo.category === serchVal));

    };

    return (
        <div className="text-left">
            <form onSubmit={handleSubmitSearch}>
               <input type="text" name="serach" value={serchVal} onChange={ev => {setSerchVal(ev.target.value)}} onBlur={func}/>
               <button onClick={click}>SEARCH</button>
            </form>
        </div>
    );
};

export default SearchForm;
