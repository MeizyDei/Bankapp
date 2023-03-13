import styles from "../request/withdraw.module.css";

export function Send() {

    const onTransfer= (e) => {
        e.preventDefault()

        const srcId = e.target.srcId.value
        const destId = e.target.destId.value
        const amount = e.target.amount.value


        console.log(`Source ${srcId} Destination ${destId} Amount ${amount}`)

        fetch('https://localhost:3100/transfer', {
            method: 'PUT',
            headers : {
                'Accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body : JSON.stringify({srcId, destId, amount})
        }).then( res => res.json())
            .then(json => console.log(json))

    }

    return (
        <div className={styles.withCont}>
            <h1> Transfer Money </h1>
            <form onSubmit={onTransfer}>
                <input type='number' placeholder='Source Id' name='srcId'/>
                <input type='number' placeholder='Destination' name='destId'/>
                <input type='number' placeholder='Amount'/>

            </form>
        </div>
    )
}