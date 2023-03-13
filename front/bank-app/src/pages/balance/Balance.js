import styles from "./balance.module.css";
import {useState} from 'react';

export function Balance() {


    const [bal, setBal] = useState(0)
    const onBalance= (e) => {
        e.preventDefault()

        const acId = e.target.acId.value
        const balance = e.target.balance.value

        console.log(`Source ${acId}`)

        fetch(`https://localhost:3100/balance/${acId}`, {
            method: 'PUT',
            headers : {
                'Accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body : JSON.stringify({acId, balance})
        }).then( res => res.json())
            .then(json => setBal(json.bal))

    }

    return (
        <div className={styles.balCont}>
            <h1> Balance : {bal} </h1>
            <form onSubmit={onBalance}>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='submit' placeholder='Balance' name='balance'/>
            </form>
        </div>
    )
}