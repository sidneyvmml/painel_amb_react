import React, { Component } from 'react';
import NavBar from '../common/template/navBar'

class App extends Component {
    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
            })
        )

        return (
            <div className='container'>
                {/*<NavBar />*/}
                <div>
                    {childrenWithProps}
                </div>
            </div>
        )
    }
}

export default App