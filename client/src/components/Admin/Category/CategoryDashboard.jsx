import CategoryHeader from "./CategoryHeader";
import CategoryList from "./CategoryList";

const CategoryDashboard = () => {
  return (
    <main className="py-12 px-6 flex flex-col gap-6">
      {/* <CategoryHeader /> */}
      <CategoryList />
    </main>
  );
};

export default CategoryDashboard;
