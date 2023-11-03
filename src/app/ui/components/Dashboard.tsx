"use client"
import { AuthContext } from '@/app/lib/AuthContext'
import { useContext } from "react"
import './dashboard.scss'

type Props = {}

const Dashboard = (props: Props) => {
    const context = useContext(AuthContext)

    return (
        <div className='dashboard-component'>
            <h5>Welcome to Dashboard!</h5>
            <button onClick={context.logout}>Log out</button>
        </div>
    )
}

export default Dashboard