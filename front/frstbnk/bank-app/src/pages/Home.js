
import {useEffect, useState} from "react";


function Home () {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/home')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <>
            <h1 style={{color: "whitesmoke"}}>HOme PAGE!!!</h1>
            {data ? (
                <p>{data.title}</p>
            ) : (
                <p>Loading...</p>
            )}

        </>


    )
}

export default Home
