import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import NavbarPage from "./NavBarPage";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { emps: [] }
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        this.userRole=localStorage.getItem('userRole');
        console.log(this.userRole);
        fetch('http://localhost:51291/Api/user/GetWritersList')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ emps: data });
            }
            );
    }

    render() {
        const { emps } = this.state;
        return (
            <><NavbarPage></NavbarPage><div>
                <div>
                    <Table className="mt-4" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Writer Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emps.map(emp => <tr key={emp.UserId}>
                                <td>{emp.FirstName} {emp.LastName}</td>
                                <td>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </Table>

                </div>

            </div></>
        );
    }
}
export default HomePage; 