export default function Profile() {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="flex items-center gap-4 mb-6">
        <img src="https://via.placeholder.com/100" alt="Profile" className="w-24 h-24 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-sm text-gray-600">Guest</p>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p><span className="font-semibold">Age:</span> 25</p>
        <p><span className="font-semibold">Gender:</span> Male</p>
        <p><span className="font-semibold">Communities Joined:</span> React, JavaScript, CSS</p>
      </div>
    </div>
  );
}