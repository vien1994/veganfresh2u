import React, { useContext, useEffect, useState } from 'react'
import Context from '../../store/Context';
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import AdminOrdersCard from './AdminOrdersCard'

function AdminOrdersPage() {
    const { db, auth, isAdmin } = useContext(Context);
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState(null);
    const [ordersList, setOrdersList] = useState(null);

    // When the page loads and we get the user info, then make a call to the database to get all our user transactions. Store the data in the orders state.
    useEffect(() => {
      if(user !== null) {
        const getOrders = async () => {
          let tmp = [];
          const q = query(collection(db, `adminContent`), where("status", "!=", "Delivered"));
          const queryResults = await getDocs(q);
          queryResults.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tmp.push(doc.data());
          });

          setOrders(tmp);
        }
      
        getOrders()
      }
    }, [user, db])
  
    // Creates cards for order history
    useEffect(() => {
      // Once orders have loaded, then render the OrdersCard component 
      if(orders !== null) {
        console.log(orders)
        // orderMap stores the array of orders
        let orderMap = [];
      
        // Create each card and populate with order info
        orders.forEach(order => {
          // Create a formatted date to display. Converts unix timestamp to Date object
          let date = new Date(order.created*1000);
          let dateOrdered = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
          console.log(dateOrdered)
          orderMap.push(
            <AdminOrdersCard 
              key={`${dateOrdered} ${date.getSeconds()} ${date.getMinutes()} ${date.getHours()}`}
              total={order.amount}
              items={order.items}
              dateOrdered={dateOrdered}
              status={order.status}
              customer={order.customer}
            />
          )
        });
  
        setOrdersList(orderMap);
      }
    }, [orders])
  
      // Print all the dummy order info (quantity, price, id(name) of the item, image of the item) onto a page(dynamically) and style it
      // Make sure to cover what happens if a user has no order history 
        
    return (
      <React.Fragment>

        { isAdmin === true ?
          <div className="col-start-2 col-end-6 row-start-1 row-end-7 sm:col-start-3 sm:col-end-5">
            <h1 className="sm:m-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 whitespace-nowrap">Current Orders</h1>
            {ordersList}
          </div>
        :
          null
        }

      </React.Fragment>
    )
}

export default AdminOrdersPage;