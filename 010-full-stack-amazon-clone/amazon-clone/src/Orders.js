import React, {useState, useEffect} from 'react'
import { useStateValue } from './StateProvider';
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";

import {db} from "./firebase"
import './Orders.css';
import Order from './Order';


function Orders() {
    const [orders, setOrders] = useState([]); // State to hold orders
    const[{basket, user}, dispatch] = useStateValue(); // Accessing user from StateProvider
    useEffect(() => {

        //access the user's orders from Firestore
        // inside useEffect
        if (user) {
            const userOrdersRef = collection(db, "users", user.uid, "orders");
            const q = query(userOrdersRef, orderBy("created", "desc"));

            const unsubscribe = onSnapshot(q, (snapshot) => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })));
            });

            return () => unsubscribe(); // cleanup
}
    }, [user]);





    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order = {order} />
                
                ))}
            </div>
        </div>
    )
}

export default Orders
