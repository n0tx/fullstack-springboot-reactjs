import React, { Component } from 'react';

class ListPersonComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        listPerson: []
    }
    render() { 
        return ( 
        <div>
            <h2 className='text-center'>Person List</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fullname</th>
                            <th>Birth Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listPerson.map(
                                person =>
                                <tr key = {person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.fullName}</td>
                                    <td>{person.birthDate}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div> 
        );
    }
}
 
export default ListPersonComponent;