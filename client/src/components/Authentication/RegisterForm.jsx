import { useForm, Controller } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    control,
  } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-[1px] p-4 border-slate-500  registerform flex flex-col gap-y-2"
    >
      <div className="flex flex-col sm:flex-row gap-2 ">
        <div className="basis-[100%]">
          <input
            {...register("firstname", {
              required: "Firstname is required",
            })}
            type="firstname"
            placeholder="Firstname"
            className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
          />
          {errors.firstname && (
            <p className="text-red-500 px-2">{`${errors.firstname.message}`}</p>
          )}
        </div>
        <div className="basis-[100%]">
          <input
            {...register("lastname", {
              required: "Lastname is required",
            })}
            type="lastname"
            placeholder="lastname"
            className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
          />
          {errors.lastname && (
            <p className="text-red-500 px-2">{`${errors.lastname.message}`}</p>
          )}
        </div>
      </div>
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
            value: 10,
            message: "Password must be at least 10 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none"
      />
      {errors.password && (
        <p className="text-red-500 px-2">{`${errors.password.message}`}</p>
      )}

      <input
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === getValues("password") || "Passwords must match",
        })}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 px-2">{`${errors.confirmPassword.message}`}</p>
      )}

      <div className="flex items-center gap-2">
        <label>Gender</label>
        <div>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Please select a gender" }}
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <input type="radio" {...field} value="male" id="male" />
                <label htmlFor="male">Male</label>

                <input type="radio" {...field} value="female" id="female" />
                <label htmlFor="female">Female</label>

                <input type="radio" {...field} value="other" id="other" />
                <label htmlFor="other">Other</label>
              </div>
            )}
          />
        </div>
      </div>
      {errors.gender && (
        <p className="text-red-500 px-2">{errors.gender.message}</p>
      )}
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-[#117A7A] hover:bg-[#298E83] font-bold uppercase  text-white disabled:bg-gray-500 border-slate-400 py-2 rounded-lg border-[1px] focus:border-blue-400 outline-none"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
