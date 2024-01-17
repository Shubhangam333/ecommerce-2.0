import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  useGetAllParentCategoriesQuery,
  useGetAllSubCatByParentIdMutation,
} from "../../../redux/api/category/categoryapi";
import { useGetAllStylesBySubCatMutation } from "../../../redux/api/style/styleapi";
import { useCreateProductMutation } from "../../../redux/api/product/productapi";
import { toast } from "react-toastify";

const ProductForm = () => {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { data: parentCat } = useGetAllParentCategoriesQuery();
  const [getSubCat, { data: subcat }] = useGetAllSubCatByParentIdMutation();
  const [getStyleBySubCat, { data: styles }] =
    useGetAllStylesBySubCatMutation();
  // const [selectedImages, setSelectedImages] = useState([]);
  const [createProduct, { data }] = useCreateProductMutation();
  const handleParentCatChange = async (e) => {
    try {
      await getSubCat(e.target.value).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubCatChange = async (e) => {
    try {
      await getStyleBySubCat(e.target.value).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    // Use setValue to update the value of the 'productImages' field
    setValue("productImages", files);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("sizes", JSON.stringify(data.sizes));
      formData.append("section", data.section);
      formData.append("category", data.category);
      formData.append("subCategory", data.subCategory);
      formData.append("style", data.styles);

      for (let i = 0; i < data.productImages.length; i++) {
        formData.append("productImages", data.productImages[i]);
      }
      await createProduct(formData).unwrap();
      reset();
      toast.success("Product created successfully");
    } catch (error) {
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
            <ReactQuill
              {...field}
              theme="snow" // or use another theme as per your preference
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
      {/* Sizes */}
      <label>Sizes</label>
      {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((sizeType) => (
        <div key={sizeType}>
          <label>{sizeType}</label>
          <Controller
            name={`sizes.${sizeType}.quantity`}
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
      <Controller
        name="productImages"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <>
            <input
              type="file"
              multiple
              onChange={(e) => {
                field.onChange(e);
                handleImageChange(e);
              }}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
            />
          </>
        )}
      />
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
              <option value="">Select Section</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
            {errors.section && (
              <p className="text-red-500 px-2">{errors.section.message}</p>
            )}
          </>
        )}
      />
      {/* Parent Category - Dropdown */}
      <label htmlFor="category">Category</label>
      <Controller
        name="category"
        control={control}
        defaultValue=""
        rules={{ required: "Category is required" }}
        render={({ field }) => (
          <>
            <select
              {...field}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none"
              onChange={(e) => {
                field.onChange(e);
                handleParentCatChange(e);
              }}
            >
              <option value="">Select Category</option>
              {parentCat &&
                parentCat.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
            </select>
            {errors.category && (
              <p className="text-red-500 px-2">{errors.category.message}</p>
            )}
          </>
        )}
      />
      {/* Sub Category - Dropdown */}
      <label htmlFor="subCategory">Sub Category</label>
      <Controller
        name="subCategory"
        control={control}
        defaultValue=""
        rules={{ required: "Sub Category is required" }}
        render={({ field }) => (
          <>
            <select
              {...field}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none"
              onChange={(e) => {
                field.onChange(e);
                handleSubCatChange(e);
              }}
            >
              <option value="">Select Sub Category</option>
              {subcat &&
                subcat.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
            </select>
            {errors.subCategory && (
              <p className="text-red-500 px-2">{errors.subCategory.message}</p>
            )}
          </>
        )}
      />
      {/* Styles - Dropdown */}
      <label htmlFor="styles">Styles</label>
      <Controller
        name="styles"
        control={control}
        defaultValue=""
        rules={{ required: "Styles is required" }}
        render={({ field }) => (
          <>
            <select
              {...field}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none"
            >
              <option value="">Select Styles</option>
              {styles &&
                styles.map((style) => (
                  <option key={style._id} value={style._id}>
                    {style.title}
                  </option>
                ))}
            </select>
            {errors.styles && (
              <p className="text-red-500 px-2">{errors.styles.message}</p>
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
