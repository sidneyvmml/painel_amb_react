import React from 'react'

export default props => (
    <div className="user-panel">
        <div className="pull-left image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
        </div>
        <div className="pull-left info">
            <p>User Name</p>

            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
    </div>
)