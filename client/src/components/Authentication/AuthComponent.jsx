import { Link, useParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthComponent = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <section className="flex flex-col items-center justify-center gap-4 my-8">
      <h2>Login with ecommerce</h2>
      <div className="w-[25rem] flex flex-col gap-4">
        <div className="flex w-full">
          <Link
            className={`py-2 px-6 border-[1px] uppercase border-slate-500 basis-[100%] text-center ${
              id === "login" ? "bg-[#117A7A] text-white" : ""
            }`}
            to="/auth/login"
          >
            Login
          </Link>
          <Link
            className={`py-2 px-6 border-[1px] uppercase border-slate-500 basis-[100%] text-center ${
              id === "register" ? "bg-[#117A7A] text-white" : ""
            }`}
            to="/auth/register"
          >
            Register
          </Link>
        </div>
        {id === "login" && <LoginForm />}
        {id === "register" && <RegisterForm />}
      </div>
    </section>
  );
};

export default AuthComponent;
