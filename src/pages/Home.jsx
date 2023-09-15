import Header from "../components/Header";
import Music from "../components/Music";
import Desc from "../components/Desc";

const Home = () => {
  return (
    <div className="bg-yellow-400 min-h-screen w-full">
      <Header />
      <Music />
      <Desc />
    </div>
  );
};

export default Home;
