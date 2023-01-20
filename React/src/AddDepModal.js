import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export class AddDepModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'department/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                DepartmentId: null,
                DepartmentName: event.target.DepartmentName.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        return (
            <div className="col-md-5 text-center" {...this.props}>
               
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="DepartmentName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="DepartmentName" required
                                    placeholder="Add a name" />
                            </Form.Group>

                            <Form.Group >
                                <Button variant="primary" type="submit" className='w-100'>
                                    Add Data
                                </Button>
                            </Form.Group>
                        </Form>
              

            </div>
        )
    }

}