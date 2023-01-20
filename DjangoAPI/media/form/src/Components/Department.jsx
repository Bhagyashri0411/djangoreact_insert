import React, { Component } from "react";
// import {Table} from 'bootstrap'

export class Department extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'department')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    deps: data
                })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList()
    }

    render() {
        const { deps } = this.state;
        console.log(deps, "bv");
        return (
            <div >

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <tr>DepartmentId</tr>
                            <tr>DepartmentName</tr>
                            <tr>option</tr>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            deps.map(dep =>
                                <tr key={dep.DepartmentId}>
                                    <td>{dep.DepartmentId}</td>
                                    <td>{dep.DepartmentName}</td>
                                    <td>Edit</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}