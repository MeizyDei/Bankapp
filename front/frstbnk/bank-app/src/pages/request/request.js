import styles from "./withdraw.module.css"

export function Request() {

    const onWithdraw= (e) => {
        e.preventDefault()

        const acId = e.target.acId.value
        const amount = e.target.amount.value

        console.log(`Id ${acId} Amount ${amount}`)

        fetch(`https://localhost:3100/withdraw/`, {
            method: 'PUT',
            headers : {
                'Accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body : JSON.stringify({acId, amount})
        }).then( res => res.json())
            .then(json => console.log(json))

    }

    return (
        <div className={styles.withCont}>
            <h1> Withdraw Money </h1>
            <form onSubmit={onWithdraw}>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='number' placeholder='Amount' name='amount'/>
            </form>
        </div>
    )
}