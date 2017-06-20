import React from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';

var data = [
  {
    "company_name":"Bedrock Co.",
    "account_manager":"Joe",
    "date":"June 3, 2017",
    "lead_type":"Cold Call",
  },
  {
    "company_name":"Acme Inc.",
    "account_manager":"Beth",
    "date":"May 14, 2017",
    "lead_type":"Cold Call"
  },
  {
    "company_name":"Bedrock Co.",
    "account_manager":"Joe",
    "date":"June 3, 2017",
    "lead_type":"Cold Call"
  },
  {
    "company_name":"Bedrock Co.",
    "account_manager":"Joe",
    "date":"June 3, 2017",
    "lead_type":"Cold Call"
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
}

const LeadView = () => {
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
          <ColumnDefinition id="date" />
          <ColumnDefinition id="lead_type" />
        </RowDefinition>
      </Griddle>
  )
};

export default LeadView;