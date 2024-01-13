import { useForm, Controller } from "react-hook-form";

const CategoryForm = () => {
  const {
    handleSubmit,
    control,
    setValue,

    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the form data to your backend to create the product
      console.log("d", data);
      // Handle success or redirect to the product list page
      console.log("Product created successfully");
    } catch (error) {
      // Handle error
      console.error("Error creating product", error);
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
        onChange={(e) => {
          const file = e.target.files;
          const imageUrls = file.map((file) => URL.createObjectURL(file));
          setValue("category", imageUrls);
        }}
        className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
      />
      {errors.productImages && (
        <p className="text-red-500 px-2">{errors.productImages.message}</p>
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
