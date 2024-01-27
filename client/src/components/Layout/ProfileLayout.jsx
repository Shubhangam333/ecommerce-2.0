import ProfileNav from "../Profile/ProfileNav";

const ProfileLayout = ({ children }) => {
  return (
    <section className="flex justify-between min-h-screen gap-2 px-12 py-4">
      <ProfileNav />
      <section className="basis-[80%]"> {children}</section>
    </section>
  );
};

export default ProfileLayout;
