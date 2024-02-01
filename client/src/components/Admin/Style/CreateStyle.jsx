import StyleForm from "./StyleForm";

const CreateStyle = () => {
  return (
    <section className="p-4 min-h-screen">
      <StyleForm isEditable={false} />
    </section>
  );
};

export default CreateStyle;
