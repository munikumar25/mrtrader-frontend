import React,{useState,useEffect} from 'react'
import axios from 'axios';
const AdminDashboard = () => {
    const [totalUsers,setTotalUsers] = useState();
    const [activeUsers,setActiveUsers] = useState();
    const [pendingUsers,setPendingUsers] = useState();
    useEffect(()=>{
    axios.get(`http://localhost:8000/api/dashboard`).then(getUserData=>JSON.stringify(getUserData.data)).then(json=>{
      const data = JSON.parse(json);
      setTotalUsers(data[0][0].tuser);
      setActiveUsers(data[2][0].auser);
      setPendingUsers(data[1][0].vpending);
  })
},[])
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4" style={{marginTop:"60px"}}>
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
            <a href="dashboard/active_users">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Active Users</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{activeUsers}</div>
                            </div>
                        <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
            </a>
        </div>

        {/* <!-- Earnings (Monthly) Card Example --> */}
        

            {/* <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Income
                                </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">5000000</div>
                                </div>
                                <div className="col">
                                    <div className="progress progress-sm mr-2">
                                        <div className="progress-bar bg-info proBar" role="progressbar"
                                                            aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="col-xl-3 col-md-6 mb-4">
            <a href="dashboard/pending_users">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Pending Requests</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{pendingUsers}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
            <a href="dashboard/users">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Total Users</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{totalUsers}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard
