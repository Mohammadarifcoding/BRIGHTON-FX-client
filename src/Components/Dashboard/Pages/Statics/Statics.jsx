import PendingOrder from "../../../../Hook/PendingOrder";
import UseAcceptedOrder from "../../../../Hook/UseAcceptedOrder";



const Statics = () => {
   const [accepted] = UseAcceptedOrder()
   const [Pending] = PendingOrder()

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="bg-gray-800 py-4">
        <h1 className="text-3xl text-center font-bold">Statistics</h1>
      </header>
      <main className="flex-1 p-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-6">Statistics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Total Orders Box */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Accepted Orders</h3>
              <p className="text-4xl font-bold">{accepted.length}</p>
            </div>

            {/* Pending Orders Box */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pending Orders</h3>
              <p className="text-4xl font-bold">{Pending.length}</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 py-4 text-center">
        <p>© 2024 Currency Dashboard. All rights reserved.</p>
      </footer>
    </div>
    );
};

export default Statics;