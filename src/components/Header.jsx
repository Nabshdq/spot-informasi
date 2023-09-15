const Header = ({ title, image }) => {
  return (
    <div className="p-12 pb-8 flex flex-col justify-center items-center">
      <img src={`${image}`} className="border-8 rounded-3xl max-h-96" />
      <h1 className="text-center mt-4 font-black text-2xl">{title}</h1>
    </div>
  );
};

export default Header;
