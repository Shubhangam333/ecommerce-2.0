import { useForm, Controller } from "react-hook-form";
import {
  useCreateCategoryMutation,
  useGetAllParentCategoriesQuery,
  useUpdateCategoryMutation,
} from "../../../redux/api/category/categoryapi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const CategoryForm = ({ isEditable }) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [postCategory] = useCreateCategoryMutation();
  const [updateCategory, { data: updatedcat }] = useUpdateCategoryMutation();
  const { data } = useGetAllParentCategoriesQuery();

  const { catId } = useParams();

  console.log("i", isEditable);

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
      if (!isEditable) {
        const res = await postCategory(formData).unwrap();

        if (res) {
          toast.success("category created successfully");
          reset();
        }
      }
      if (isEditable) {
        const formData = { categoryId: catId, ...data };
        const res = await updateCategory(formData).unwrap();

        if (res) {
          toast.success("category updated successfully");
          reset();
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later");
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
      {/* Parent Category - Dropdown */}
      <label htmlFor="parent_category">Parent Category</label>
      <Controller
        name="parent_category"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <select
              {...field}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none"
            >
              <option value="">Select Parent Category</option>
              {data &&
                data.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
            </select>
            {errors.parent_category && (
              <p className="text-red-500 px-2">
                {errors.parent_category.message}
              </p>
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
