import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserDashboard from "./UserDashboard";
import Login from "./AdminLogin/Login";
import RefPartnerDetails from "./RefPartnerDetails";
import RefPartnerList from "./RefPartnerList";
import ChannelPartners from "./ChannelPartners";
import ReferedLeads from "./ReferedLeads";
import LeadDetails from "./LeadDetails";
import Fselist from "./Fselist";
import FseDetails from "./FseDetails";
import ManageUser from "./ManageUser";
import UserDetails from "./UserDetails";
import ListofCustomer from "./ListofCustomer";
import ListofPartners from "./ListofPartners";
import LeadDetailsView from "./LeadDetailsView";
import RefPartnerDetailsView from "./RefPartnerDetailsView";
import AdminLogin from "./BdeLogin/AdminLogin";
import AdminNavigation from "./AdminNavigation";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Super Admin Login */}
          <Route path="/login" component={Login} />

          <Route path="/dash" component={Dashboard} />
          <Route path="/dashuser" component={UserDashboard} />
          <Route path="/dashadmin" component={AdminNavigation} />

          <Route path="/rplist" component={RefPartnerList} />
          <Route path="/rpdetails/:Id" component={RefPartnerDetails} />

          <Route path="/chdetails" component={ChannelPartners} />
          <Route path="/fselist" component={Fselist} />
          <Route path="/fsedetails/:Id" component={FseDetails} />
          <Route path="/referedlead/:Id" component={ReferedLeads} />
          <Route path="/leadetails/:Id" component={LeadDetails} />
          <Route path="/manageuser" component={ManageUser} />
          <Route path="/userdetails/:Id" component={UserDetails} />

          <Route path="/listofcustomer" component={ListofCustomer} />
          <Route path="/listofpartners" component={ListofPartners} />

          <Route path="/leadetailsview/:Id" component={LeadDetailsView} />
          <Route path="/rpdetailsview/:Id" component={RefPartnerDetailsView} />

          <Route path="/adminlogin" component={AdminLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
