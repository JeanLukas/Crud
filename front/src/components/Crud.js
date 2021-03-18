import React, { useState, useEffect } from 'react';
import { api } from '../service/api';
import { Table } from 'antd';
import { Button } from 'antd';
import './Crud.css';

const COLUMNS = [
    { title: "Idade", dataIndex: "age", },
    { title: "Nome", dataIndex: "name", },
    { title: "Cidade", dataIndex: "city",},
    { title: "Sexo", dataIndex: "gender", },   
    { title: "Pais", dataIndex: "country", },   
    
]

const Crud = (props) => {

    
    const [userList, setUserList] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => list(), []);

    //lista os usuarios
    const list = () => {
        api.get("/users/")
            .then(response => {
                setUserList(response.data)
            }).catch(error => {
                console.error(error)
            })
    }


    // const deleteList = () => {
    //     api.delete("/users/id")
    //         .then(response => {
    //             console.log("deleted" + user)
    //             setUser(response.data)
    //         }).catch(error => {
    //             console.error(error)
    //         })
    // }

   
    return (
        <>
            <label className="title">Clique no botao para criar novo usuario</label>
            <Button className=" btn-back " type="link" onClick="goBack = ()">Criar novo usuario</Button>

            <Table className=" table-show__users " dataSource={userList}
                columns={COLUMNS}
                rowKey="id"
            />

        </>
    )
}


export default Crud;