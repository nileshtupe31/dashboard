import { MainContainer } from "./components/MainContainer";

const Header = () => {
  return (
    <header className="bg-purple p-4 text-white">
      <div className="items-center justify-center">
        <h1 className="text-2xl font-semibold">Header</h1>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <p className="text-center">© {new Date().getFullYear()} Barclays. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-blue-200 container mx-auto">
        <MainContainer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
