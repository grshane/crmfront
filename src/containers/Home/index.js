import React from 'react';
import DashboardButton from '../../components/dashboard-button/dashboard-button';
import Wrapper from './wrapper';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return (
        <Wrapper>
          <Link to='/lead/add'><DashboardButton icon='address book' function='ADD LEAD'/></Link>
          <Link to='/action'><DashboardButton icon='tasks' function='MANAGER ACTION'/></Link>
          <Link to='/report'><DashboardButton icon='line graph' function='REPORT'/></Link>
          <Link to='/admin'><DashboardButton icon='settings' function='ADMIN'/></Link>
        </Wrapper>

    );
  }
};

export default Home;
