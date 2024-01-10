import React, {useState,useEffect} from "react";
import axios from "axios";

const AllUser = ({ onUserClick}) => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/getDataFromAPI')
        .then(response =>{
            setData(response.data);
        })
        .catch(error=>{
            console.log("Error fetching Data:",error);
        });
    }, []);

    return (
        <div>
            <h1>Data Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>(
                        <tr key={item.id} onClick={() => onUserClick(item.id)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;