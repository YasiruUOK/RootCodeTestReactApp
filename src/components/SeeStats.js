import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import NavbarPage from "./NavBarPage";

export class SeeStats extends Component {
    constructor(props){
        super(props);
        this.state ={stats:[]}
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        fetch('http://localhost:51291/Api/stats/GetStatistics')
        .then(response=> response.json())
        .then(data => {
            
         this.setState({stats:data});
        }
         );
     }
    render(){
        const {stats} = this.state;
    return (
        <><NavbarPage></NavbarPage><div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>SingleVowelCount</th>
                        <th>PairVowelCount</th>
                        <th>TotalWordCount</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map(stats => <tr key={stats.Id}>
                        <td>{stats.Date.split("T").map((item, index) => {
                            if (index - 1) { return <div key={index}>{item}</div>; }
                        })}</td>
                        <td>{stats.SingleVowelCount}</td>
                        <td>{stats.PairVowelCount}</td>
                        <td>{stats.TotalWordCount}</td>
                        <td>

                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div></>
    )
    }
  }
  
export default SeeStats;