import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from "react-icons/ai"
import {GiArmoredBoomerang} from "react-icons/gi"

const Users = () => {
    const arr = [1 , 2 , 3 , 4];

  return (
    <section className='tableClass'>
    <main>
      <table>

        <thead>
          <tr>
            <th>Order Id</th>
            <th>Status</th>
            <th>Item Qty</th>
            <th>Amount</th>
            <th>Payment Methods</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            arr.map(i=>(
              <tr>
            <td>{i}</td>
            <td>Delivered</td>
            <td>2</td>
            <td>₹{2000}</td>
            <td>COD</td>
            <td>Raunak Srivastava</td>
            <td><Link to={`/order/${i}`}><AiOutlineEye /></Link>
            <button>
            <GiArmoredBoomerang />
            </button>
            </td>
          </tr>
            ))
          }
        </tbody>

      </table>
    </main>
    </section>
  )
}

export default Users