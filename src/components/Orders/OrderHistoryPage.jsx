import React, { useContext, useEffect, useState } from 'react'
import Context from '../../store/Context';
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import OrdersCard from './OrdersCard';

export default function OrderHistoryPage() {
  const {db, auth} = useContext(Context);
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState(null);
  const [ordersList, setOrdersList] = useState(null);

  // When the page loads and we get the user info, then make a call to the database to get all our user transactions
  useEffect(() => {
    if(user !== null) {
      const getOrders = async () => {
        let tmp = [];
        const queryResults = await getDocs(collection(db, `customers/${user.uid}/payments`));
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
      // orderMap stores the array of orders
      let orderMap = [];

      console.log(orders)

      // Create each card and populate with order info
      orders.forEach(order => {
        orderMap.push(
          <OrdersCard 
            foodID={'s'}
          />
        )
      });

      // orders.forEach(order => {
      //   // Checks all properties in 'order' object
      //   for (const property in order) {
      //     if(property.includes('order')) {
      //       orderMap.push(
      //         <OrdersCard 
      //           foodID={order.data} 
      //           qty={'test'}
      //           total={order.amount / 100}
      //           status={order.status}
      //         />
      //       )
      //     }
      //   }
      // })
      setOrdersList(orderMap);
      console.log(orders);
    }
  }, [orders])

    // Print all the dummy order info (quantity, price, id(name) of the item, image of the item) onto a page(dynamically) and style it
    // Make sure to cover what happens if a user has no order history 
    // ALSO, make sure there is a way for the user to navigate to this page

    
      // const orderList = sampleMeals.map(meal => 
      //   <Recipes 
      //   id={meal.id}
      //   key={meal.id} 
      //   name={meal.name} 
      //   with={meal.with}
      //   allergies={meal.allergies}
      //   nutrition={meal.nutrition} 
      //   price={meal.price} 
      //   />
      // );
      
  return (
    <React.Fragment>
      {/* Don't load the page unless there is order info */}
      {orders !== null ? 
        <div className="col-start-2 col-end-6 sm:col-start-3 sm:col-end-5">
        <h1 className="m-4 pl-4 text-4xl sm:text-5xl font-semibold text-gray-700">
            Your Orders
          </h1>
          {ordersList}
          {/* Example on how to display data */}
          
          {/* <div>Total Price: ${orders[0].total}</div>
          <div>Item: {orders[0].order1.foodID}</div>
          <div>Quantity: {orders[0].order1.qty}</div>
          <div>Status: {orders[0].status}</div> */}
        </div>
      
      :
        null
      }
    </React.Fragment>
  )
}
