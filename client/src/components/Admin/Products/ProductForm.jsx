import { useForm, Controller } from "react-hook-form";

const ProductForm = () => {
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
      {/* Description */}
      <label htmlFor="description">Description</label>
      <Controller
        name="description"
        control={control}
        defaultValue=""
        rules={{ required: "Description is required" }}
        render={({ field }) => (
          <>
            <textarea
              {...field}
              className="w-full px-2 py-2 h-72 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
            />
            {errors.description && (
              <p className="text-red-500 px-2">{errors.description.message}</p>
            )}
          </>
        )}
      />
      {/* Price */}
      <label htmlFor="price">Price</label>
      <Controller
        name="price"
        control={control}
        defaultValue=""
        rules={{
          required: "Price is required",
          pattern: { value: /^[0-9]+$/, message: "Invalid price" },
        }}
        render={({ field }) => (
          <>
            <input
              {...field}
              type="number"
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
            />
            {errors.price && (
              <p className="text-red-500 px-2">{errors.price.message}</p>
            )}
          </>
        )}
      />
      {/* Stock */}
      <label htmlFor="stock">Stock</label>
      <Controller
        name="stock"
        control={control}
        defaultValue=""
        rules={{ pattern: { value: /^[0-9]+$/, message: "Invalid stock" } }}
        render={({ field }) => (
          <>
            <input
              {...field}
              type="number"
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
            />
            {errors.stock && (
              <p className="text-red-500 px-2">{errors.stock.message}</p>
            )}
          </>
        )}
      />
      {/* Sizes */}
      <label>Sizes</label>
      {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((sizeType) => (
        <div key={sizeType}>
          <label>{sizeType}</label>
          <Controller
            name={`sizes.${sizeType}.quanity`}
            control={control}
            defaultValue=""
            rules={{ required: `${sizeType} quantity is required` }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="number"
                  className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                />
                {errors.sizes && errors.sizes[sizeType] && (
                  <p className="text-red-500 px-2">
                    {errors.sizes[sizeType].quanity.message}
                  </p>
                )}
              </>
            )}
          />
        </div>
      ))}
      {/* Product Images */}
      <label htmlFor="productImages">Product Images</label>
      <input
        type="file"
        multiple
        onChange={(e) => {
          const files = Array.from(e.target.files);
          const imageUrls = files.map((file) => URL.createObjectURL(file));
          setValue("productImages", imageUrls);
        }}
        className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
      />
      {errors.productImages && (
        <p className="text-red-500 px-2">{errors.productImages.message}</p>
      )}
      {/* Section */}
      <label htmlFor="section">Section</label>
      <Controller
        name="section"
        control={control}
        defaultValue=""
        rules={{ required: "Section is required" }}
        render={({ field }) => (
          <>
            <select
              {...field}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
            {errors.section && (
              <p className="text-red-500 px-2">{errors.section.message}</p>
            )}
          </>
        )}
      />
      {/* Category */}
      <label htmlFor="category">Category</label>
      <Controller
        name="category"
        control={control}
        defaultValue=""
        rules={{ required: "Category is required" }}
        render={({ field }) => (
          <>
            <input
              {...field}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
            />
            {errors.category && (
              <p className="text-red-500 px-2">{errors.category.message}</p>
            )}
          </>
        )}
      />
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

export default ProductForm;
