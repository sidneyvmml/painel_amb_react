import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signOut } from '../login/loginActions'

class Logout extends Component {

    componentWillMount(){
        this.props.signOut()
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapDispathToProps = dispath => bindActionCreators({ signOut }, dispath)
export default connect(null, mapDispathToProps)(Logout);