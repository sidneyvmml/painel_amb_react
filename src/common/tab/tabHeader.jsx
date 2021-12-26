import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../../utils/if'
import { selectTab } from './tabActions'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        return (
            <If visivel={visible}> 
                <li className={selected ? 'active' : ''}>
                    <a href='javascript:;' data-toggle='tab' data-target={this.props.target}
                        onClick={ () => this.props.selectTab(this.props.target) }>
                        <i className={'fa fa-'+this.props.icon}></i> {this.props.label}
                    </a>
                </li>
            </If>
        );
    }
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispathToProps = dispath => bindActionCreators({selectTab}, dispath)
export default connect(mapStateToProps, mapDispathToProps)(TabHeader)