import React, { useContext, useEffect, useState } from 'react'
import Context from '../../store/Context';
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

export default function OrderHistoryPage() {
  const {db, auth} = useContext(Context);
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState(null);

  // When the page loads and we get the user info, then make a call to the database to get all our user transactions
  useEffect(() => {
    if(user !== null) {
      const getOrders = async () => {
        let tmp = [];
        const queryResults = await getDocs(collection(db, `orders/${user.uid}/transactions`));
        queryResults.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tmp.push(doc.data());
        });
        setOrders(tmp);
      }
    
      getOrders()
    }
  }, [user, db])


  console.log(orders);

    // Print all the dummy order info (quantity, price, id(name) of the item, image of the item) onto a page(dynamically) and style it
    // Make sure to cover what happens if a user has no order history 
    // ALSO, make sure there is a way for the user to navigate to this page
      
  return (
    <React.Fragment>
      {/* Don't load the page unless there is order info */}
      {orders !== null ? 
        <div>
          {/* Example on how to display data */}
          {orders[0].total}
        </div>
      :
        null
      }
    </React.Fragment>
  )
}
