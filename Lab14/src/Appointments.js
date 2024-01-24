import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default class Appointments extends Component {
    constructor(props) {
        super(props)
        this.customersArray = props.customers;
        console.log(props);
        console.log(this.customersArray)
    }
    render() {
        return (
            <table className='table-info table striped table-hover table-sm' id='appointmentsTable'>
                <thead className='appointmentsTable thead'>
                    <tr>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Appointment Time</th>
                    </tr>
                </thead>
                <tbody>
                    {this.customersArray.map((customer, index) => (
                        <tr key={index} >
                            <td className='w-25'>{customer.firstName}</td>
                            <td className='w-25'>{customer.lastName}</td>
                            <td className='w-25'>{customer.appointmentTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

