import { useForm, Controller } from "react-hook-form";
import { useCreateCategoryMutation } from "../../../redux/api/category/categoryapi";
import { toast } from "react-toastify";

const CategoryForm = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const [postCategory, { data: cat }] = useCreateCategoryMutation();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setValue("catImage", event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const onSubmit = async (data) => {
    try {
      // const imageDetails = getValues("categoryDetails");
      const formData = { ...data };
      console.log(formData);

      await postCategory(formData).unwrap();

      if (data) {
        toast.success("category created successfully");
      }
    } catch (error) {
      toast.error("Something went wrong.Please try again later");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-[1px] p-4 border-slate-500  registerform flex flex-col gap-y-2"
    >
      {/* Title */} <label htmlFor="title">Title</label>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: "Title is required" }}
        render={({ field }) => (
          <>
            <input
              {...field}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
            />
            {errors.title && (
              <p className="text-red-500 px-2">{errors.title.message}</p>
            )}
          </>
        )}
      />
      {/* Product Images */}
      <label htmlFor="categoryImages">Category Image</label>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
      />
      {errors.categoryImages && (
        <p className="text-red-500 px-2">{errors.categoryImages.message}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#117A7A] hover:bg-[#298E83] font-bold uppercase  text-white disabled:bg-gray-500 border-slate-400 py-2 rounded-lg border-[1px] focus:border-blue-400 outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default CategoryForm;
