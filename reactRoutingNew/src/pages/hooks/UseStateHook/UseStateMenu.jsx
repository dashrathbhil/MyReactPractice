import React from 'react'
import { Link, Outlet } from 'react-router'

function UseStateMenu() {
  return (
   <>
   <div className="container">
        <div className="row">
          <ul>
            <li>
              <Link to="explainusestate" className="text-decoration-none">
                Explain useState
              </Link>
            </li>
         
            <li>
              <Link to="taskofusestate" className="text-decoration-none">
                Task OF UseState
              </Link>
            </li>
         </ul>
        </div>
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
   </>
  )
}

export default UseStateMenu