import { Route } from "wouter";
import "./App.css";
import { LoginPage } from "./pages/login/LoginPage";
import { SignupPage } from "./pages/signup/SignupPage";

function App() {
  return (
    <div className="bg-slate-500">
      <Route path="/" component={SignupPage}/>
      <Route path="/login" component={LoginPage}/>
    </div>
  );
}

export default App;
