import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"jsfdla sfaih 213 sdfdls"}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Raunak Srivastava"}
                </p>
                <p>
                    <b>Phone No.</b>
                    {3290798321}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"22/02/2024"}
                </p>
                <p>
                    <b>Deliverd At</b>
                    {"22/02/2024"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    #{"sdkjafl"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"22/02/2024"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total Price</b>
                    ₹{1000}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    ₹{40}
                </p>
                <p>
                    <b>Tax</b>
                    ₹{70}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹{1000+40+70}
                </p> 
            </div>

            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>Hyderabadi Biryani</h4>
                    <div>
                    <span>{1}</span> x <span>{399}</span>
                    </div>
                </div>
                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                    <span>{2}</span> x <span>{199}</span>
                    </div>
                </div>
                <div>
                    <h4>Hamburger</h4>
                    <div>
                    <span>{2}</span> x <span>{259}</span>
                    </div>
                </div>

                <div>
                    <h4
                        style={{fontWeight: 800}}
                    >Sub Total</h4>
                    <div style={{fontWeight: 800}}>₹{2599}</div>
                </div>
                
            </article>


        </main>
    </section>
  )
}

export default OrderDetails