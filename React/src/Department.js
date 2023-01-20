import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

// import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddDepModal } from './AddDepModal';

export class Department extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'department')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    
    render() {
        const { deps } = this.state;
        return (
            <div className='row mt-5'>
                    <AddDepModal/>
                <div className='col-md-7'>
                    <Table className="text-center" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>no</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deps.map(dep =>
                                <tr key={dep.DepartmentId}>
                                    <td>{dep.DepartmentId}</td>
                                    <td>{dep.DepartmentName}</td>
                                </tr>)}
                        </tbody>

                    </Table>
                   
                </div>
            </div>
        )
    }
}