"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { failedMail, sendingMail, sendSuccuss } from "@/components/Universal/UniversalToast";
import PhoneInput from "react-phone-number-input";
import "./phone.css";
import "react-phone-number-input/style.css";

export default function AirportPickup() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    email: "",
    vehicle: "",
    message: "",
  });

  const [file, setFile] = useState<File[]>([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 3);
      setFile(selectedFiles);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    // Validate required fields
    if (
      !formData.patientName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.vehicle ||
      !formData.message
    ) {
      setLoading(false);
      toast.error("All fields are required.");
      return;
    }
    sendingMail()
    // Prepare form data
    const data = new FormData();
    data.append("name", formData.patientName);
    data.append("phone", formData.phoneNumber);
    data.append("email", formData.email);
    data.append("vehicle", formData.vehicle);
    data.append("messageForUs", formData.message);

    // Add file attachments to form data
    file.forEach((f) => {
      data.append("airTicket", f);
    });

    try {
      // Make API call
      const response = await fetch("/api/airportPickup", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        sendSuccuss();
        setFormData({
          patientName: "",
          phoneNumber: "",
          email: "",
          vehicle: "",
          message: "",
        });
        setFile([]);
        setLoading(false);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        setLoading(false);
        failedMail();
        toast.error(`Failed to send request: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
      failedMail();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-secondary text-xs text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Send Request
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] lg:max-w-[50%] h-[85%] sm:h-[90%] rounded-lg overflow-y-scroll overflow-x-hidden p-4 sm:p-6">
        <DialogTitle></DialogTitle>
        <div className="w-full mx-auto p-4 sm:p-6 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Airport Pickup
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div>
                <label
                  htmlFor="patientName"
                  className="block text-sm font-medium text-gray-700 labelGap"
                >
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  placeholder="Enter patient name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 labelGap"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-sm font-medium text-gray-700 labelGap"
                >
                  Vehicle
                </label>
                <select
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 labelGap"
                >
                  Phone Number
                </label>
                <PhoneInput
                  className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="IN"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={(value) => setFormData({ ...formData, phoneNumber: value || '' })}
                />
              </div>

              <div>
                <label
                  htmlFor="patient"
                  className="block text-sm font-medium text-gray-700 labelGap"
                >
                  Air Ticket (Max 3)
                </label>
                <input
                  type="file"
                  id="patient"
                  name="patient"
                  multiple
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
                <p className="text-xs text-gray-500">
                  Supported formats: .jpg, .jpeg, .png, .pdf
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 labelGap"
                >
                  Message for Us
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                ></textarea>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2">
              {success ? (
                <p className="text-green-500 text-center">
                  Request sent successfully!
                </p>
              ) : (
                <button
                  type="submit"
                  className="w-full py-2 bg-button-sec text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800"
                >
                  {loading ? "Please wait..." : "Submit"}
                </button>
              )}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
