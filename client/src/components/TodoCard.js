import React, { useEffect, useState } from 'react';
import '../style/todocard.css';
import axios from "axios";

const TodoCard = ({toggle}) => {
    const [Tododata, setTodoData] = useState([]);

    const getdata = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/getTodo');
            setTodoData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div className='todo-card-container'>
            {
                Tododata.length === 0
                    ? <h2>No Records</h2>
                    : 
                    
                    Tododata.slice(-4).reverse().map(todo => (
                        <div key={todo._id} className='list'>
            
                                <h3>{todo.title}</h3>
                                <p>{todo.description}</p>
                             
                            {/* Render other properties of the todo object as needed */}
                           
                        </div>
                    ))       
            }
        </div>
    );
};

export default TodoCard;

