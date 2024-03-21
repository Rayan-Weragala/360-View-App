import React from 'react'
import {Link} from 'react-router-dom'

const home = () => {
    return (
      <div>
        <h1>Welcome</h1>
        <Link to="/add">
          <button> Click here to get started</button>
        </Link>
      </div>
    );
}

export default home;