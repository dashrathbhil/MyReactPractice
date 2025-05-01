import React from 'react'
import { Link, Outlet } from 'react-router'


function FundamentalsMenu() {
  return (
    <>
        <div className="container">
            <ul>
                <li><Link to="introreact">Intro React</Link></li>
                <li><Link to="understandingOfprops">Understanding Of props</Link></li>
            </ul>
            <div className="row">
                <div className="col">
                    <Outlet/>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default FundamentalsMenu