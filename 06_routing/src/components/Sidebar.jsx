import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
export const Sidebar = () => {
return (
    <div>
    <div className='' style={{display:"flex"}}>
    <div style={{ width: '200px', height: '600px', padding: '16px', background: '#f0f0f0' }}>
        <h2>Sidebar</h2>
        <button style={{ marginBottom: '8px', width: '100%' }}> <Link to="/songs/hindi">Hindi </Link></button>
        <button style={{ width: '100%' }}> <Link to="/songs/english">English</Link></button>
    </div>
     <Outlet /> 
     </div>
     </div>
)
}
