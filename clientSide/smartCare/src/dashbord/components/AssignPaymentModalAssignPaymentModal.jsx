import React, { useState } from "react";
// muje yaha updateAppoinmentStatus function jo receptionService file me hai use import karna hai app suggestion do
import { updateAppointmentStatus } from "../../services/receptionService";

const AssignPaymentModal = ({
  isOpen,
  onClose,
  guestData,
  onSave,
  id,
  // refreshData,
}) => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [status, setStatus] = useState("Pending");

  // Agar popup open nahi hai, to screen par kuch mat dikhao
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Jo data save karna hai use parent component me bhej rahe hain
    console.log("Id kya aa gyi", id);
    let payload = {
      status: "confirmed",
      paymentStatus: "paid",
      paymode: paymentMethod,
      fees: amount,
    };
    updateAppointmentStatus(id, payload)
      .then((res) => {
        console.log("Status updated successfully:", res);
        // onSave({
        //   guestId: guestData?.id,
        //   amount: amount,
        //   method: paymentMethod,
        // });
        // refreshData();
      })
      .catch((err) => {
        console.error("Error updating status:", err);
        // Yaha par error handling kar sakte hain, jaise ki user ko error message dikhana
      });

    // onSave({
    //   guestId: guestData?.id,
    //   amount: amount,
    //   method: paymentMethod,
    //   status: status,
    //   date: new Date().toLocaleDateString(),
    // });

    // Form clear aur close karne ke liye
    setAmount("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center bg-emerald-600 px-6 py-4 text-white">
          <div>
            <h3 className="text-lg font-semibold">Assign Payment</h3>
            {guestData && (
              <p className="text-xs text-emerald-100 mt-0.5">
                For: {guestData.name}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-2xl transition"
          >
            &times;
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (₹)
            </label>
            <input
              type="number"
              required
              placeholder="Enter amount (e.g. 1500)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Payment Method Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="UPI">UPI (GPay/PhonePe/Paytm)</option>
              <option value="Cash">Cash</option>
              <option value="Card">Credit / Debit Card</option>
            </select>
          </div>

          {/* Payment Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-600">
                <input
                  type="radio"
                  name="status"
                  value="Paid"
                  checked={status === "Paid"}
                  onChange={() => setStatus("Paid")}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span>Paid (Received)</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-600">
                <input
                  type="radio"
                  name="status"
                  value="Pending"
                  checked={status === "Pending"}
                  onChange={() => setStatus("Pending")}
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span>Pending</span>
              </label>
            </div>
          </div>

          {/* Actions / Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition shadow-md shadow-emerald-100"
            >
              Add Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignPaymentModal;
