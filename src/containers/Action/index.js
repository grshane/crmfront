import React from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';

var data = [
  {
    "company_name":"Bedrock Co.",
    "account_manager":"Joe",
    "lead_type":"Cold Call",
    "action_type":"Sent Proposal",
    "date":"June 3, 2017",
    "note":"Several transmissions were beamed to this ship by Rebel spies."
  },
  {
    "company_name":"Bedrock Co.",
    "account_manager":"Joe",
    "lead_type":"Cold Call",
    "action_type":"Scheduled Meeting",
    "date":"May 9, 2017",
    "note":"Oh God, my uncle. How am I ever gonna explain this? You don't believe in the Force, do you?"
  },
  {
    "company_name":"Darkside",
    "account_manager":"Kate",
    "lead_type":"Cold Call",
    "action_type":"Scheduled Meeting",
    "date":"May 9, 2017",
    "note":" Besides, attacking that battle station ain't my idea of courage. It's more like…suicide."
  },
  {
    "company_name":"Bedrock Co.",
    "account_manager":"Joe",
    "lead_type":"Cold Call",
    "action_type":"Scheduled Meeting",
    "date":"May 9, 2017",
    "note":"Alderaan? I'm not going to Alderaan. I've got to go home. It's late, I'm in for it as it is."
  },
];

const SettinglessLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />
    <Pagination />
    <Table />
  </div>
);

const styleConfig = {
  styles: {
    Table: { margin: "2em auto 0" },
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
};

const ActionView = () => {
  return (
      <Griddle
        components={{
          Layout: SettinglessLayout
        }}
        styleConfig={styleConfig}
        data={data} >
        <RowDefinition>
          <ColumnDefinition id="company_name" />
          <ColumnDefinition id="account_manager" />
          <ColumnDefinition id="lead_type" />
          <ColumnDefinition id="action_type" />
          <ColumnDefinition id="date" />
          <ColumnDefinition id="note" />
        </RowDefinition>
      </Griddle>
  )
};

export default ActionView;