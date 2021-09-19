import React,{useState} from 'react'
import classes from './ModalForm.module.css'

const ModalForm = (props) => {
    const [titleVal, setTitleVal] = useState('');
    const [text, setText] = useState('');
    const [category, setCategory] = useState('animals');
    const [errors, seterrors] = useState('');
    let handleSubmit = (ev) => {

        ev.preventDefault();
        if (!titleVal.trim() || !text.trim()){
            seterrors('field is required');
        }
        else{
            let fullDate = new Date();
            let day = String(fullDate.getDate()).padStart(2, '0');
            let month = String(fullDate.getMonth() + 1).padStart(2, '0');
            let year = fullDate.getFullYear();
            let date=day+ '/' + month + '/' + year;
            seterrors('');
            props.addToDo(titleVal, category, text,date);
            props.showModal();
        }

    };

    return (
        <div  className={`container-fluid ${classes.modal_form}`}>
            <div className="row">
                <div className="col">
                    <form  className={classes.popup_form} onSubmit={handleSubmit}>
                        <input type="text" name="title" value={titleVal} onChange={ev => {setTitleVal(ev.target.value)}}/>
                        <p className={classes.error}>{errors}</p>

                        <select onChange={event => {setCategory(event.target.value)}}>
                            <option value="animals">Animals</option>
                            <option value="science">Science</option>
                            <option value="world">World</option>
                        </select>

                        <textarea name="description" value={text} onChange={ev => {setText(ev.target.value)}}></textarea>
                        <p className={classes.error}>{errors}</p>
                        <button type="submit">save</button>

                    </form>
                </div>
            </div>
        </div>
    )
};
export default ModalForm;