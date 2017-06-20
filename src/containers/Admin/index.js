import React from 'react';
import LeadTypeView from '../LeadType';
import ActionTypeView from '../ActionType';
import AccountManagerView from '../AcctMngr';
import { Grid, Segment } from 'semantic-ui-react';

const AdminGrid = () => {
  return (
   <div>
     <h1>Admin Page</h1>
     <Grid container columns={3}>
      <Grid.Row >
        <Grid.Column>
          <Segment>
            <LeadTypeView />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <ActionTypeView />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <AccountManagerView />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
   </div>
  );
};

export default AdminGrid;

