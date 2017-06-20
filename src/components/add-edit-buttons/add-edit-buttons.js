import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddEditButton = (props) => {
  return (
      <Button floated={props.direction} as={Link} to={props.link}><Icon name={props.icon}/>{props.text}</Button>
  );
}

export default AddEditButton;
