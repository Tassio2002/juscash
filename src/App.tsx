import { Route } from "wouter";
import "./App.css";
import { LeadsListPage } from "./pages/leadsList/LeadsListPage";
import { LoginPage } from "./pages/login/LoginPage";
import { SignupPage } from "./pages/signup/SignupPage";

function App() {
  const basePath = "/juscash"
  return (
    <div className="bg-slate-500">
      <Route path={`${basePath}`} component={SignupPage}/>
      <Route path={`${basePath}/login`} component={LoginPage}/>
      <Route path={`${basePath}/leads`} component={LeadsListPage}/>
    </div>
  );
}

export default App;
