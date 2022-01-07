import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DonatorFoodDonation from './components/DonatorFoodDonation';
import DonatorDashboard from './components/DonatorDashboard';
import DonatorNotification from './components/DonatorNotification';
import Login from './components/Login';
import Register from './components/Register';
import Indexpage from './components/Indexpage';
import testfile from './components/testfile';
import DonatorClothDonation from './components/DonatorClothDonation';
import DonatorBookDonation from './components/DonatorBookDonation';
import ReceiverDashboard from './components/ReceiverDashboard';
import ReceiverSendNotification from './components/ReceiverSendNotification';
import VolunteerDashboard from './components/VolunteerDashboard';
import VolunteerNotification from './components/VolunteerNotification';
import admin_dashboard from './components/admin_dashboard';
import admin_manage_donator from './components/admin_manage_donator';
import admin_manage_receiver from './components/admin_manage_receiver';
import admin_manage_volunteer from './components/admin_manage_volunteer';
import admin_manage_item from './components/admin_manage_item';
import view_donate_food from './components/view_donate_food';
import view_donate_cloth from './components/view_donate_cloth';
import view_donate_book from './components/view_donate_book';
import common_dashboard from './components/common_dashboard';
import view_user_donate_receiver_food from './components/view_user_donate_receiver_food';
import view_user_donate_receiver_book from './components/view_user_donate_receiver_book';
import view_user_donate_receiver_cloth from './components/view_user_donate_receiver_cloth';
import view_user_donate_volunteer_book from './components/view_user_donate_volunteer_book';
import view_user_donate_volunteer_cloth from './components/view_user_donate_volunteer_cloth';
import view_user_donate_volunteer_food from './components/view_user_donate_volunteer_food';




const App = () => (
  <Router>
    <Switch>
    <Route exact path="/" component={Indexpage}/>
      <Route  path="/login" component={Login}/>
      <Route path="/register" component={Register} />
      <Route path="/donator_dashboard" component={DonatorDashboard} />
      <Route path="/donation_notification" component={DonatorNotification} />
      <Route path="/donator_food_donation" component={DonatorFoodDonation} />
      <Route path="/donator_cloth_donation" component={DonatorClothDonation} />
      <Route path="/donator_book_donation" component={DonatorBookDonation}/>
      <Route path="/receiver_dashboard" component={ReceiverDashboard} />
      <Route path="/receiver_send_notification" component={ReceiverSendNotification} />
      <Route path="/volunteer_dashboard" component={VolunteerDashboard} />
      <Route path="/volunteer_notification" component={VolunteerNotification} />
      <Route path="/admin_dashboard" component={admin_dashboard} />
      <Route path="/admin_manage_donator" component={admin_manage_donator} />
      <Route path="/admin_manage_receiver" component={admin_manage_receiver} />
      <Route path="/admin_manage_volunteer" component={admin_manage_volunteer} />
      <Route path="/admin_manage_item" component={admin_manage_item} />
      <Route path="/view_donate_food" component={view_donate_food} />
      <Route path="/view_donate_cloth" component={view_donate_cloth} />
      <Route path="/view_donate_book" component={view_donate_book} />
      <Route path="/common_dashboard" component={common_dashboard} />
      <Route path="/view_user_donate_receiver_food" component={view_user_donate_receiver_food} />
      <Route path="/view_user_donate_receiver_book" component={view_user_donate_receiver_book} />
      <Route path="/view_user_donate_receiver_cloth" component={view_user_donate_receiver_cloth} />
      <Route path="/view_user_donate_volunteer_book" component={view_user_donate_volunteer_book} />
      <Route path="/view_user_donate_volunteer_cloth" component={view_user_donate_volunteer_cloth} />
      <Route path="/view_user_donate_volunteer_food" component={view_user_donate_volunteer_food} />
      <Route path="/testfile" component={testfile} />
      
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));