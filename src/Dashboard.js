import React, { Component } from 'react';

import Selector from './Selector';
import Threshold from './Threshold';
import DataTable from './DataTable';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {}
        }
    }

    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
            this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }

    logout = () => {
        this.props.auth.logout();
    }

    render() {
        const { profile } = this.state;
        
        return(
            <div className="dashboard">
                <div className="topbar">
                    <div className="wrapper">
                        Welcome, {profile.name}
                <button className="topbar__button" onClick={() => { this.logout() }}>
                            Log Out
                </button>
                    </div>
                </div>
                <div className="dashboard__tools">
                    <Selector />
                    <Threshold />
                </div>
                <DataTable />
            </div>
        )
    }
}

export default Dashboard;