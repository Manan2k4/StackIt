import React, { useState } from 'react';

const Communities = () => {
  // Initial dummy communities
  const [communities, setCommunities] = useState([
    { id: 0, name: 'Community-00', description: '(Some Description...)' },
    { id: 1, name: 'Community-00 1', description: '(Some Description...)' },
    { id: 2, name: 'Community-00 2', description: '(Some Description...)' },
    { id: 3, name: 'Community-00 3', description: '(Some Description...)' },
  ]);

  const [showModal, setShowModal] = useState(false);

  // Modal form state
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('public');
  const [newDesc, setNewDesc] = useState('');

  const handleCreate = () => {
    if (!newName || !newDesc) {
      alert('Name and description are required.');
      return;
    }

    const newCommunity = {
      id: Date.now(),
      name: newName,
      type: newType,
      description: newDesc,
    };

    setCommunities([...communities, newCommunity]);

    // Reset form and close modal
    setNewName('');
    setNewType('public');
    setNewDesc('');
    setShowModal(false);
  };

  return (
    <section className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Communities</h2>
        <button
          onClick={() => setShowModal(true)}
          className="border px-4 py-1 rounded hover:bg-gray-100"
        >
          Add Community
        </button>
      </div>

      {/* Grid of Communities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {communities.map((community) => (
          <div
            key={community.id}
            className="border p-4 rounded shadow bg-white flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">{community.name}</h3>
              <div className="flex gap-2 text-xl cursor-pointer">
                <span>☆</span>
                <span>＋</span>
              </div>
            </div>
            <hr />
            <p className="mt-2 text-gray-700">{community.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white border rounded-lg w-[500px] p-6 relative">
            <h3 className="text-lg font-semibold mb-4">Create New Community</h3>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Community Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter community name"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Community Type</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  rows="3"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Write a description..."
                  className="w-full border px-3 py-2 rounded"
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Communities;