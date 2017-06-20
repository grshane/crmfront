import React from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
// import { Button, Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import AddEditButton from '../../components/add-edit-buttons/add-edit-buttons';

var data = [{"action_type":"Website Contact Form"},{"action_type":"Received Phone Inquiry"},{"action_type":"Sent Mailer"},{"action_type":"Cold Call"}];

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

const ActionTypeView = () => {
  return (
    <div>
      <AddEditButton direction='left' link='/action-type/edit' icon='edit' text='Edit' />
      <AddEditButton direction='right' link='/action-type/new' icon='circle plus' text='Add' />
      <Griddle
        components={{
          Layout: SettinglessLayout
        }}
        styleConfig={styleConfig}
        data={data} >
        <RowDefinition>
          <ColumnDefinition id="action_type" title="Action Type" />
        </RowDefinition>
      </Griddle>
    </div>
  )
};

export default ActionTypeView;