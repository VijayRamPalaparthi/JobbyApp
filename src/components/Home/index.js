import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="body-container">
      <h1 className="heading"> Find The Job That Fits Your Life</h1>
      <p className="para">
        {' '}
        Millions of people are searching for jobs, salary information company
        reviews. find the job that fits for your ability and potential
      </p>

      <Link to="/jobs">
        <button type="button" className="find-button">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default Home
