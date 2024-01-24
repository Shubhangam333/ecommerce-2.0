import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/api/auth/authapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { setUser } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/slice/authSlice";

const LoginForm = () => {
  const [loginUser, { data, isLoading, isError, error }] = useLoginMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (d) => {
    try {
      const res = await loginUser(d).unwrap();
      reset();
      if (res) {
        toast.success("Login Successful");
        dispatch(setUserId(res.userId));
        navigate(-1);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-[1px] p-4 border-slate-500  loginform flex flex-col gap-y-2"
    >
      {isLoading && <h1>Loading</h1>}
      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
      />
      {errors.email && (
        <p className="text-red-500 px-2">{`${errors.email.message}`}</p>
      )}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none"
      />
      {errors.password && (
        <p className="text-red-500 px-2">{`${errors.password.message}`}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-[#117A7A] hover:bg-[#298E83] font-bold uppercase  text-white disabled:bg-gray-500 border-slate-400 py-2 rounded-lg border-[1px] focus:border-blue-400 outline-none"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
