import React from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AddEditButton from '../../components/add-edit-buttons/add-edit-buttons';

var data = [{"name":"John"},{"name":"Mary"},{"name":"Jen"},{"name":"Mike"}];

const SettinglessLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />
    <Pagination />
    <Table />
  </div>
);

const styleConfig = {
  styles: {
    Table: {
      margin: "2em auto 0",
    },
    TableHeadingCell: {
      padding: "0.2em 0.5em",
      border: "1px solid",
      background: "gainsboro"
    },
    Cell: {
      border: "1px solid",
      padding: "0.2em 0.5em"
    }
  }
}

const AccountManagerView = () => {
  return (
    <div>
      <AddEditButton direction='left' link='/account-manager/edit' icon='edit' text='Edit Account Manger Types' />
      <AddEditButton direction='right' link='/account-manager/new' icon='circle plus' text='Add Account Manger Type' />
      <Griddle
        components={{
          Layout: SettinglessLayout
        }}
        styleConfig={styleConfig}
        data={data} >
        <RowDefinition>
          <ColumnDefinition id="name" title="Account Manger" />
        </RowDefinition>
      </Griddle>
      <Button floated='left' as={Link} to='edit'><Icon name='edit' />Edit Account Manger Types</Button>
      <Button floated='right' as={Link} to='new'><Icon name='add circle' />Add Account Manger Type</Button>
    </div>
  )
};

export default AccountManagerView;