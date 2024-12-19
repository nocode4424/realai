"use client";
import React from "react";

function MainComponent() {
  const deals = [
    {
      id: 1,
      address: "123 Main St",
      status: "In Progress",
      closingDate: "Mar 15, 2024",
      progress: 66,
      lastUpdate: "Contract signed 2 hours ago",
      price: "$450,000",
    },
    {
      id: 2,
      address: "456 Oak Ave",
      status: "Pending",
      closingDate: "Apr 1, 2024",
      progress: 33,
      lastUpdate: "Inspection scheduled",
      price: "$375,000",
    },
    {
      id: 3,
      address: "789 Pine Rd",
      status: "New",
      closingDate: "Apr 15, 2024",
      progress: 10,
      lastUpdate: "Offer accepted",
      price: "$525,000",
    },
  ];
  const handleSignOut = () => {
    window.location.href = "/account/logout";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">RealClose</h1>
          <button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome to RealClose</h1>
          <p className="text-gray-600">
            Let's help you get started with managing your real estate deals
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Active Deals</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
              <i className="fas fa-plus mr-2"></i>
              New Deal
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <a
                href={`/deals/${deal.id}`}
                key={deal.id}
                className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg">{deal.address}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      deal.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : deal.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {deal.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{deal.price}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Closing: {deal.closingDate}
                </p>
                <div className="mb-4">
                  <div className="h-2 bg-gray-200 rounded">
                    <div
                      className="h-full bg-blue-500 rounded"
                      style={{ width: `${deal.progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{deal.lastUpdate}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-blue-50">
                <i className="fas fa-plus-circle text-blue-500 text-2xl mb-2"></i>
                <span className="text-gray-700">New Deal</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-blue-50">
                <i className="fas fa-tasks text-blue-500 text-2xl mb-2"></i>
                <span className="text-gray-700">View Tasks</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-blue-50">
                <i className="fas fa-search text-blue-500 text-2xl mb-2"></i>
                <span className="text-gray-700">Search Deals</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-blue-50">
                <i className="fas fa-user-cog text-blue-500 text-2xl mb-2"></i>
                <span className="text-gray-700">Settings</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <i className="fas fa-check text-blue-500"></i>
                </div>
                <div>
                  <h3 className="font-medium">Create Your First Deal</h3>
                  <p className="text-sm text-gray-500">
                    Start by adding a new real estate deal to track
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  <i className="fas fa-circle text-gray-400"></i>
                </div>
                <div>
                  <h3 className="font-medium">Set Up Your Profile</h3>
                  <p className="text-sm text-gray-500">
                    Complete your profile information
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-2 rounded-full">
                  <i className="fas fa-circle text-gray-400"></i>
                </div>
                <div>
                  <h3 className="font-medium">Invite Team Members</h3>
                  <p className="text-sm text-gray-500">
                    Add colleagues to collaborate on deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Updates</h2>
            <button className="text-blue-500 hover:text-blue-600 text-sm">
              View All
            </button>
          </div>
          <div className="divide-y">
            <div className="py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 rounded">
                  <i className="fas fa-rocket text-green-500"></i>
                </div>
                <div>
                  <p className="font-medium">New Feature: Document Templates</p>
                  <p className="text-sm text-gray-500">
                    Create and save custom document templates
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">New</span>
            </div>
            <div className="py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-2 rounded">
                  <i className="fas fa-bell text-purple-500"></i>
                </div>
                <div>
                  <p className="font-medium">Mobile App Now Available</p>
                  <p className="text-sm text-gray-500">
                    Download RealClose on iOS and Android
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;