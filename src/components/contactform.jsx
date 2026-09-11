"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    goal: "",
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

    setIsSubmitting(true);

    // Remove previous notification
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
          form_type: "contact",
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
        // SUCCESS NOTIFICATION
        setNotification({
          type: "success",
          message:
            "Your strategy request has been sent successfully! Our team will contact you soon.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          brand: "",
          goal: "",
          message: "",
        });
      } else {
        // ERROR NOTIFICATION
        setNotification({
          type: "error",
          message:
            data?.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      setNotification({
        type: "error",
        message:
          "Failed to send your request. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl rounded-xl bg-white p-10 shadow-lg">

  

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
              {notification.type === "success"
                ? "✓"
                : "⚠"}
            </span>

            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid gap-6"
      >

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            autoComplete="name"
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
        </div>


        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength={10}
            inputMode="numeric"
            autoComplete="tel"
            placeholder="Phone"
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
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand Name / Industry"
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
        </div>


        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          required
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
        >
          <option value="">Your Goal*</option>

          <option value="Lead Generation">
            Lead Generation
          </option>

          <option value="ORM">
            ORM
          </option>

          <option value="Social Media Marketing">
            Social Media Marketing
          </option>

          <option value="Meme Marketing">
            Meme Marketing
          </option>

          <option value="Twitter Trend">
            Twitter Trends
          </option>

          <option value="Build a Portfolio Website">
            Build a Portfolio Website
          </option>

          <option value="Create a Business Website">
            Create a Business Website
          </option>

          <option value="Redesign My Existing Website">
            Redesign My Existing Website
          </option>

          <option value="Increase Online Presence">
            Increase Online Presence
          </option>

          <option value="Generate More Leads">
            Generate More Leads
          </option>

          <option value="Sell Products Online">
            Sell Products Online
          </option>

          <option value="Personal Branding">
            Personal Branding
          </option>

          <option value="Custom Web Application">
            Custom Web Application
          </option>

          <option value="New Website Development">
            New Website Development
          </option>

          <option value="Website Redesign">
            Website Redesign
          </option>

          <option value="Website Rebuild (From Scratch)">
            Website Rebuild (From Scratch)
          </option>

          <option value="Website Performance Optimization">
            Website Performance Optimization
          </option>

          <option value="UI/UX Improvement">
            UI/UX Improvement
          </option>

          <option value="Convert Figma to Website">
            Convert Figma to Website
          </option>

          <option value="Fix Bugs / Technical Issues">
            Fix Bugs / Technical Issues
          </option>

          <option value="Add New Features">
            Add New Features
          </option>

          <option value="E-commerce Setup">
            E-commerce Setup
          </option>

          <option value="SEO Optimization">
            SEO Optimization
          </option>
        </select>


        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
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