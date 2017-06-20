import React from 'react';

import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import AddEditButton from '../../components/add-edit-buttons/add-edit-buttons';
import  helpers from '../../lib/helpers';


// var data = [loadLeadTypes];

// const SettinglessLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
//   <div>
//     <Filter />
//     <Pagination />
//     <Table />
//   </div>
// );
//
// const styleConfig = {
//   styles: {
//     Table: { margin: "2em auto 0" },
//     TableHeadingCell: {
//       padding: "0.2em 0.5em",
//       border: "1px solid",
//       background: "gainsboro"
//     },
//     Cell: {
//       border: "1px solid",
//       padding: "0.2em 0.5em"
//     }
//   }
// }

class LeadTypeView extends React.Component {

  constructor() {
    super();
    this.state = {
      leadTypes: []
    }

    //Bind handler functions for change and submit
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentDidMount() {

    axios.get('http://myapp.lndo.site:8000/rest/lead_type')
      .then(function(response){
        this.setState({ leadTypes : response.data })
      }.bind(this))
  }

  render() {
    console.log(this.state.leadTypes);
    const types = []
    this.state.leadTypes.forEach(type => {
      console.log(type.field_lead_typ_title_public[0]);
      types.push(<li key={type.nid[0].value}>{type.field_lead_typ_title_public[0].value}</li> );
    })

    return (

      <div>
        <AddEditButton direction='left' link='/lead-type/edit' icon='edit' text='Edit'/>
        <AddEditButton direction='right' link='/lead-type/new' icon='circle plus' text='Add'/>
        <ul>
          { types }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="lead_type">Lead Type: </label>
            <input name="lead_type" onChange={this.handleTitleChange} />
          </div>
          <Button type='submit'>Add Lead Type</Button>
        </form>
      </div>
    )
  }
  handleTitleChange(e) {
    this.setState({lead_type:e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let self = this.state;
    console.log(self);
    let node = {
      "type":[{"target_id":"lead_typ", "target_type":"node_type"}],
      "field_lead_typ_title_public":[{"value":"self.lead_type"}],
      "title":[{"value":"self.lead_type"}]
    };
    let config = {
      headers: [{"key":"Authorization","value":"Basic YWRtaW46QHVzdGluMTQ="},{"key":"Content-Type", "value":"application/hal+json"}]
    };
    axios.post('http://myapp.lndo.site:8000/entity/node',node,config)
      .then(function(success){
        console.log(success);
      })
      .catch(function(error){
        console.log(error)
      });
  }
}

export default LeadTypeView;