import axios from "axios";
import React, { useState } from "react";
 export default function AddOrder() {
    const [post, setPost] = useState(null);
    const [order_no, setorder_no] = useState('');
    const [total_price, settotal_price] = useState('');
    //For The signup
    const [customer_id, setcustomer_id] = useState('');
    const [order_status_id, setorder_status_id] = useState('');
    const [order_date, setorder_date] = useState('');
    const [status, setstatus] = useState('');
    const handleSignupSubmit = (event) => {
        event.preventDefault();
        AddOrder()
    };

    const AddOrder = () => {
        const baseURL = "http://localhost:3100";
        axios.post(`${baseURL}/orders`,
            {
                customer_id: customer_id,
                total_price: total_price,
                order_date:order_date,
                order_no: order_no,
                status:status,
                order_status_id:order_status_id
            }).then((response) => {
                setPost(response.data);
                console.log( response.data);
            }).catch((error) => {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                  
                   } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                  }

            });
    }
    return (
        <>
            <div className="signupbody">
                <div class="container1">
                    <form onSubmit={handleSignupSubmit} id="signup">
                        <div class="header">
                            <h3 >Add Order</h3>
                        </div>
                        <div class="sep2"></div>
                        <div class="inputs">
                            <input onChange={(e) => setorder_no(e.target.value)} placeholder="order_no" type="text" name="order_no" required />
                            <input onChange={(e) => setcustomer_id(e.target.value)} placeholder="customer_id" type="text" name="fullname" required />
                             <input onChange={(e) => settotal_price(e.target.value)} placeholder="total_price" type="text" name="total_price" required />
                             <input onChange={(e) => setorder_date(e.target.value)} placeholder="order_date" type="text" name="address" required />
                             <input onChange={(e) => setstatus(e.target.value)} placeholder="status" type="text" name="address" required />
                             <input onChange={(e) => setorder_status_id(e.target.value)} placeholder="order_status_id" type="text" name="order_status_id" required />
                             <button type="submit" style={{ color: "white" }} class="btnSignup" >Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
