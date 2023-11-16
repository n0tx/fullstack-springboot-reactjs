import React, { Component } from 'react';
import PersonService from '../services/PersonService';

class ListPersonComponent extends Component {
    state = { 
        listPerson: []
    }
    componentDidMount() {
        PersonService.getListPerson().then((res) => {
            this.setState({listPerson : res.data});
        });
    }
    render() { 
        return ( 
        <div>
            <h2 className='text-center'>Person List</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Fullname</th>
                            <th>Birthdate</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listPerson.map(
                                person =>
                                <tr key = {person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.full_name}</td>
                                    <td>{person.birth_date}</td>
                                    <td></td>
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