import React from 'react'
import me from "../../assets/profile.jpeg"

const Orders = () => {

    const arr = [1 , 2 , 3 , 4];


  return (
    <section className='tableClass'>

<main>
      <table>

        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Role</th>
            <th>Since</th>
          </tr>
        </thead>

        <tbody>
          {
            arr.map(i=>(
              <tr key={i} >
            <td>#sdgdd</td>
            <td>Raunak Srivastava</td>
            <td>
                <img src={me} alt="User" />
            </td>
            <td>Admin</td>
            <td>{"22-02-2024"}</td>
          </tr>
            ))
          }
        </tbody>

      </table>
    </main>

    </section>
  )
}

export default Orders