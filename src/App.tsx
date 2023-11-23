import "./App.css";
import { LoginPage } from "./pages/login/LoginPage";
import { SignupPage } from "./pages/signup/SignupPage";

function App() {
  return (
    <div className="bg-slate-500">
      <SignupPage />
      <LoginPage />
    </div>
  );
}

export default App;
