import Image from "next/image";

const Header = ({ title, image }) => {
  return (
    <div className="bg-white mx-7 p-3 mb-5 rounded-lg sm:mx-auto sm:w-full lg:w-1/3">
      <h3 className="text-orange-600 font-black text-center mb-2 text-xl">{title}</h3>
      <Image width={300} height={300} src={image} alt={title} className="rounded-xl w-full h-64 object-cover sm:h-full" />
    </div>
  );
};

export default Header;
