"use client";

import { useState } from "react";
import { useCart } from "@/app/context/cartContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const [shippingRates, setShippingRates] = useState<any[]>([]);
  const [selectedRate, setSelectedRate] = useState<string | null>(null);
  const [labelUrl, setLabelUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addressFrom = {
    name: "Your Store",
    street1: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "US",
  };

  const addressTo = {
    name: "Customer Name",
    street1: "456 Another St",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    country: "US",
  };

  const parcel = {
    length: "10",
    width: "5",
    height: "5",
    distance_unit: "in",
    weight: "2",
    mass_unit: "lb",
  };

  const getShippingRates = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/shippo/get-rates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addressFrom, addressTo, parcel }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch shipping rates");
      }

      const data = await response.json();
      setShippingRates(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createShippingLabel = async () => {
    if (!selectedRate) {
      setError("Please select a shipping rate!");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/shippo/create-label", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rateId: selectedRate }),
      });

      if (!response.ok) {
        throw new Error("Failed to create shipping label");
      }

      const data = await response.json();
      setLabelUrl(data.label_url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <button
            onClick={getShippingRates}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
          >
            {loading ? "Fetching Rates..." : "Get Shipping Rates"}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          {shippingRates.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Choose a Shipping Rate:</h3>
              <ul className="space-y-3">
                {shippingRates.map((rate) => (
                  <li
                    key={rate.object_id}
                    className="flex justify-between items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700">
                      {rate.provider} - ${rate.amount}
                    </span>
                    <button
                      onClick={() => setSelectedRate(rate.object_id)}
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        selectedRate === rate.object_id
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      Select
                    </button>
                  </li>
                ))}
              </ul>

              <button
                onClick={createShippingLabel}
                disabled={loading || !selectedRate}
                className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:bg-green-300"
              >
                {loading ? "Processing..." : "Create Shipping Label"}
              </button>
            </div>
          )}

          {labelUrl && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Shipping Label:</h3>
              <a
                href={labelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                Download Label
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}