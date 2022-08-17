import LoginForm from "../../components/LoginForm";
import Navbar from "../../components/Navbar";
import validationLogo from "../../images/ValidationScreen.svg";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <LoginForm />
          </div>
          <div className="col-lg-6 ">
            <img className=" w-100 mt-5" src={validationLogo} alt="Frumatic" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
