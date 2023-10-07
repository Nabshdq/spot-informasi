const Header = ({ title, image }) => {
  return (
    <div className="bg-white mx-7 p-3 mb-5 rounded-lg">
      <h3 className="text-orange-600 font-black text-center mb-2 text-xl">{title}</h3>
      <img src={image} alt={title} className="rounded-xl w-full h-64 object-fill" />
    </div>
  );
};

export default Header;
