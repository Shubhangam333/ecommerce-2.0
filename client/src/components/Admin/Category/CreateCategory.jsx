import CategoryForm from "./CategoryForm";

const CreateCategory = () => {
  return (
    <section className="p-4 min-h-screen">
      <CategoryForm isEditable={false} />
    </section>
  );
};

export default CreateCategory;
