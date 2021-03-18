import React, { useState } from 'react';
import './Form.css';
import { useHistory } from 'react-router-dom';



const EMPTY_USER = {
    age: null,
    name: "",
    city: "",
    gender: "",
    country: "",
}

const Form = () => {

    const [values, setValues] = useState(EMPTY_USER);
    const history = useHistory();
    

    function loading ({EMPTY_USER}){
        if(EMPTY_USER == null){
            return {error: `Falta de Informaçoes`}
        }
    }


    function onChange(event) {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    function onSubmit(event){
        event.preventDefault();

        const{EMPTY_USER} = loading(values);
        if(EMPTY_USER){
         return history.push("/list")
        }

        setValues(EMPTY_USER);
    }

    return (
        <form onSubmit={onSubmit}>
            <h1 className="first-title">Definir nova pessoa</h1>
            <label className="titles" htmlFor="name" >Nome: </label>
            <input className="text" type="text" name="name" onChange={onChange} values={values.name} />

            <label className="titles" htmlFor="gender">Sexo:</label>
            <select className="select-gender" name="gender" onChange={onChange} values={values.gender}>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>

            <label className="titles" htmlFor="age">Idade: </label>
            <input className="text" name="age" type="number" values={values.age} />

            <label className="titles" htmlFor="city">Cidade: </label>
            <select className="select-gender" name="city" values={values.city}>
                <option>Garibaldi</option>
                <option>MonteNegro</option>
                <option>Garibaldi</option>
                <option>Canoas</option>
                <option>Buenos Aires</option>
                <option>Mendoza</option>
                <option>Córdoba</option>
                <option>La Plata</option>
                <option>San Andreas</option>
                <option>Nova York</option>
                <option>Los Angeles</option>
                <option>Houston</option>
                <option>Beijing</option>
                <option>Wuhan</option>
                <option>Shanghai</option>
                <option>Hong Kong</option>
                <option>Paris</option>
                <option>Lyon</option>
                <option>Strasbourg</option>
                <option>Cannes</option>
            </select>
            <label className="titles" htmlFor="country">Pais: </label>
            <select className="select-gender" name="country" values={values.country}>
                <option>Brasil</option>
                <option>Argentina</option>
                <option>Estados Unidos da America</option>
                <option>China</option>
                <option>França</option>
            </select>
            <button className="btn-save" id="btn" type="submit" >Salvar</button>
        </form>
    )
}
export default Form;