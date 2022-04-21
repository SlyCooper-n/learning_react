import Info from "./components/Info";
import MainText from "./components/MainText";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-3/4 mx-auto my-4 flex flex-col items-center bg-neutral-800 text-slate-200 rounded-md">
        <Info />
        <MainText />
        <Footer />
      </div>

      <style jsx>{`
        div.mx-auto {
          max-width: 500px;
          width: 75%;
        }
      `}</style>
    </>
  );
}

export default App;
