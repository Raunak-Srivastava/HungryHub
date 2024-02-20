import React from 'react'

const Shipping = () => {
  return (
    <section className='shipping'>
        <main>
            <h1>Shipping Details</h1>
            <form>
                    <div>
                      <label>Address</label>
                      <input type="text" placeholder='Enter Address' />
                    </div>
                    <div>
                    <label>City</label>
                    <input type="text" placeholder='Enter City' />
                    </div>
                    <div>
                    <label>State</label>
                    <input type="text" placeholder='Enter State' />
                    </div>
                    <div>
                    <label>PinCode</label>
                    <input type="number" placeholder='Enter PinCode' />
                    </div>
                    <div>
                    <label>Phone No.</label>
                    <input type="number" placeholder='Enter Phone No.' />
                    </div>
                    

                    <button type='submit'>Confirm Order</button>
            </form>
        </main>
    </section>
  )
}

export default Shipping