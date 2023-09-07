import { useEffect, useState } from "react"
import IDataList from "./models/IDstaList"


function ShowList(){

    const[items, setItems] = useState<IDataList>([])
    const [error, setError] = useState<Error | null>(null)
    useEffect(() =>{

        const fetchData =async () =>{
            const.log("HI")

            try{
                const data =await getDataFromServer()
           setItems(data)
            }
        }fetchData()

    })
    return(
        <>
        <header>Expense Tracker</header>
        <button>Add</button>
        <div>Date</div>
        <div>Product Purchased</div>
        <div>Price</div>
        <div>Payee</div>
        {
            items &&
            items.map(
                (user, ind) => {
                    <div>
                        <div>{user.setData}</div>
                        <div>{user.product}</div>
                        <div>{user.price}</div>
                        <div>{user.sepayeeName}</div>
                    </div>
                }
            )
        }
        
        </>
    )

}
export default ShowList

function getDataFromServer() {
    throw new Error("Function not implemented.")
}
