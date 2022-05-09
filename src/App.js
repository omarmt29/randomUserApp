import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import app from './app.css';

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get('https://randomuser.me/api/')
            .then(function (response) {
                setData(response.data.results[0]);
                console.log(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [loading])



    return (
        <>

            <div className='container'>
                <img src={data.picture.large} alt="" />
                <h1><b>Fullname: </b>{data.name.first} {data.name.last}</h1>
                <p><b>Email: </b>{data.email}</p>
                <p><b>city: </b>{data.location.city}</p>
                <p><b>street: </b>{data.location.street.name}</p>
                <p><b>postcode: </b> {data.location.postcode}</p>
                <p><b>state: </b> {data.location.state}</p>
                <p><b>country: </b>{data.location.country}</p>

                <button onClick={() => setLoading(!loading)}>Random user</button>


            </div>


        </>
    );
}
export default App;