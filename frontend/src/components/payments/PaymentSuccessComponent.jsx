import React, {useEffect, useState} from 'react';
import {getBaseURL} from '../../utils/baseURLUtils.js';
import TimelineStepComponent from './TimelineStepComponent.jsx';

export default function PaymentSuccessComponent() {
   const [order, setOrder] = useState(null);

   useEffect(() => {
      const query = new URLSearchParams(window.location.search);
      const sessionId = query.get('session_id');

      if(sessionId) {
         fetch(`${getBaseURL()}/api/v1.0/orders/confirm-payment`, {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({session_id: sessionId})
         })
            .then((res) => res.json())
            .then((data) => setOrder(data.order))
            .catch((err) => console.error("Error confirming payment", err.message))
      }
   }, [])
   return (
      <div>
         <h2>PaymentSuccessComponent</h2>
      </div>

   );
}