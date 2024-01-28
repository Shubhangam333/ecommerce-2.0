import CategoryForm from "./CategoryForm";

const EditCategory = () => {
  return (
    <section className="p-4 min-h-screen">
      <CategoryForm isEditable={true} />
    </section>
  );
};

export default EditCategory;
