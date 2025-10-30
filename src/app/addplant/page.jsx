"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Addplant() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    plantName: "",
    category: "succulent",
    description: "",
    careLevel: "easy",
    wateringFrequency: "",
    lastWateredDate: "",
    nextWateringDate: "",
    healthStatus: "good",
    userEmail: "",
    userName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "plant added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/allplant");
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error adding plant:", error);
      alert("Failed to add plant");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🌿 Add New Plant</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 rounded-lg shadow-lg p-6 space-y-6"
        >
          {/* Plant Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Plant Name *
            </label>
            <input
              type="text"
              name="plantName"
              value={formData.plantName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter plant name"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL *
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="succulent">Succulent</option>
              <option value="tropical">Tropical</option>
              <option value="cactus">Cactus</option>
              <option value="flowering">Flowering</option>
              <option value="foliage">Foliage</option>
              <option value="herb">Herb</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your plant..."
            />
          </div>

          {/* Care Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Care Level *
            </label>
            <select
              name="careLevel"
              value={formData.careLevel}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Watering Frequency *
            </label>
            <input
              type="text"
              name="wateringFrequency"
              value={formData.wateringFrequency}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., every 4 days"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Watered Date *
              </label>
              <input
                type="date"
                name="lastWateredDate"
                value={formData.lastWateredDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Next Watering Date *
              </label>
              <input
                type="date"
                name="nextWateringDate"
                value={formData.nextWateringDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Health Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Health Status *
            </label>
            <select
              name="healthStatus"
              value={formData.healthStatus}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>

          {/* User Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Name *
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Email *
              </label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
            >
              {loading ? "Adding Plant..." : "Add Plant"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/allplant")}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
