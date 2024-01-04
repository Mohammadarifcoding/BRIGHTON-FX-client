import CurrencyTable from "./CurrencyTable/CurrencyTable";


const CurrencyPage = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <header className="bg-gray-800 py-4">
          <h1 className="text-3xl text-center font-bold">Currency Dashboard</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium mb-6">Manipulate Currency</h2>
  
            {/* Search Bar */}
            <div className="flex justify-start mb-10">
              <input
                type="text"
                placeholder="Search currency..."
                className="w-full md:w-1/2 px-4 py-2 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
  
          <CurrencyTable></CurrencyTable>
          </div>
        </main>
        <footer className="bg-gray-800 py-4 text-center">
          <p>© 2024 Currency Dashboard. All rights reserved.</p>
        </footer>
      </div>
    );
};

export default CurrencyPage;