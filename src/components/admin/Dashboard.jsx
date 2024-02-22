import React from 'react'
import { Link } from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS , Tooltip , ArcElement , Legend} from "chart.js"
import Loader from '../layout/Loader'

ChartJS.register(Tooltip , ArcElement , Legend);

const loading = false;

const Box = ({title , value}) => {
  return (
    <div>
      <h3>
        {title==="Income" && "₹" }
        {value}
      </h3>
      <p>{title}</p>
    </div>
  )
}

const Dashboard = () => {
  const data = {
    labels: ["Preparing" , "Shipped" , "Delivered"],
    datasets: [
      {
        label: "# of Orders",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }



  return (
    <section className='dashboard'>
        {
          loading ? <Loader /> : <main>
            <article>
                <Box title="Users" value={234} />
                <Box title="Orders" value={23} />
                <Box title="Income" value={6554626} />
            </article>

            <section>
                <div>
                    <Link to="/admin/orders">View Orders</Link>
                    <Link to="/admin/users">View Users</Link>
                </div>
                <aside>
                    <Doughnut data={data} />
                </aside>
            </section>
        </main>
        }
    </section>
  )
}

export default Dashboard