import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
    <Route
    exact path={[
        "/",
        "/invite",
        "/get_username",
        "/code_confirm",
        "/allow_notification",
      ]}> </Route>
      </Routes> */}
      <PlanLayout>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/invite" element={<PhoneConfirmation />} />
          <Route exact path="/invite/code_confirm" element={<CodeConfirm />} />
          <Route exact path="/invite/code_confirm/allow_notification" element={<AllowNotification />} />
        </Routes>
      </PlanLayout>
      <AppLayout>
      <Routes>
      <Route exact path="/home" element={<Home/>}/>
      </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
