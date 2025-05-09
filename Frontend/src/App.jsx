export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Car Parking System</h1>
      </header>

      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Example card */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Available Slots</h2>
          <p className="text-gray-600">View and manage available parking slots in real time.</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Bookings</h2>
          <p className="text-gray-600">Monitor current and upcoming bookings easily.</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Parking History</h2>
          <p className="text-gray-600">Track past parking records and user activity.</p>
        </div>
      </main>
    </div>
  );
}