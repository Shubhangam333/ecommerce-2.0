import { useForm, Controller } from "react-hook-form";
import {
  useGetAllParentCategoriesQuery,
  useGetAllSubCatByParentIdMutation,
} from "../../../redux/api/category/categoryapi";
import { toast } from "react-toastify";
import {
  useCreateStyleMutation,
  useUpdateStyleMutation,
} from "../../../redux/api/style/styleapi";
import { useParams } from "react-router-dom";

const StyleForm = ({ isEditable, styleinfo }) => {
  console.log("s", styleinfo);
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { data } = useGetAllParentCategoriesQuery();
  const [getSubCat, { data: subcat }] = useGetAllSubCatByParentIdMutation();
  const [createStyle] = useCreateStyleMutation();
  const [updateStyle] = useUpdateStyleMutation();

  const { styleId } = useParams();
  const handleParentCatChange = async (e) => {
    try {
      await getSubCat(e.target.value).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (data) => {
    try {
      const formData = { ...data };
      console.log(formData);
      if (!isEditable) {
        const res = await createStyle(formData).unwrap();
        if (res) {
          toast.success("Style created successfully");
          reset();
        }
      }
      if (isEditable) {
        const formData = { styleId, ...data };
        const res = await updateStyle(formData).unwrap();
        if (res) {
          toast.success("Style updated successfully");
          reset();
        }
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
      <label htmlFor="title">Title</label>
      <Controller
        name="title"
        control={control}
        defaultValue={styleinfo ? styleinfo.title : ""}
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
              onChange={(e) => {
                field.onChange(e);
                handleParentCatChange(e);
              }}
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
      {/* Sub Category - Dropdown */}
      <label htmlFor="sub_category">Sub Category</label>
      <Controller
        name="sub_category"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <select
              {...field}
              className="w-full px-2 py-2 rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none"
            >
              <option value="">Select Sub Category</option>
              {subcat &&
                subcat.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
            </select>
            {errors.sub_category && (
              <p className="text-red-500 px-2">{errors.sub_category.message}</p>
            )}
          </>
        )}
      />
      <label htmlFor="section">Section</label>
      <Controller
        name="section"
        control={control}
        defaultValue={styleinfo ? styleinfo.section : ""}
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

export default StyleForm;
