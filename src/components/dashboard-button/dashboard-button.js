import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const DashboardButton = (props) => {
  return (
    <StyledButton className='dashboard_button'>
      <Icon name={props.icon} size='huge'/>
      <hr />
      {props.function}
    </StyledButton>
  );


};

const StyledButton = styled('button')`
    padding: 0.5em;
    margin: 0.5em;
    color: darkorchid;
    width: 11em;
    height: 11em;
  `;

export default DashboardButton;