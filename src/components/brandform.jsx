"use client";

import { useState } from "react";

export default function BrandForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    company_name: "",
    email: "",
    phone: "",
    website_link: "",
    message: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handlePhoneChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate requests
    if (isSubmitting) return;

    setIsSubmitting(true);

    setNotification({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_type: "brand",
          ...formData,
        }),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok) {
        setNotification({
          type: "success",
          message:
            "Your strategy request has been sent successfully! Our team will contact you soon.",
        });

        setFormData({
          company_name: "",
          email: "",
          phone: "",
          website_link: "",
          message: "",
        });
      } else {
        setNotification({
          type: "error",
          message:
            data?.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting brand form:", error);

      setNotification({
        type: "error",
        message:
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-lg md:p-10">

    
      {notification.message && (
        <div
          role="alert"
          aria-live="polite"
          className={`
            mb-6
            rounded-xl
            border
            p-4
            text-center
            font-semibold
            shadow-sm
            ${
              notification.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }
          `}
        >
          <div className="flex items-center justify-center gap-2">

            <span className="text-xl">
              {notification.type === "success" ? "✓" : "⚠"}
            </span>

            <span>
              {notification.message}
            </span>

          </div>
        </div>
      )}


 
      <form
        onSubmit={handleSubmit}
        className="grid gap-6"
      >


        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          placeholder="Company Name*"
          required
          autoComplete="organization"
          className="
            rounded-md
            border
            border-gray-300
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />



        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          required
          autoComplete="email"
          className="
            rounded-md
            border
            border-gray-300
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />



        <input
          type="url"
          name="website_link"
          value={formData.website_link}
          onChange={handleChange}
          placeholder="Website link*"
          required
          inputMode="url"
          autoComplete="url"
          className="
            rounded-md
            border
            border-gray-300
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />



        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="Phone"
          maxLength={10}
          inputMode="numeric"
          autoComplete="tel"
          className="
            rounded-md
            border
            border-gray-300
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />



        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="
            resize-y
            rounded-md
            border
            border-gray-300
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />



        <button
          type="submit"
          disabled={isSubmitting}
          className="
            rounded-md
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition-colors
            duration-200
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {isSubmitting
            ? "Sending..."
            : "✉️ Send My Strategy Now"}
        </button>

      </form>

    </section>
  );
}