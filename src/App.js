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

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/invite" element={<PhoneConfirmation />} />
      <Route path="/invite/code_confirm" element={<CodeConfirm />} />
    </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
