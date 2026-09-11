"use client";

import { useState } from "react";

const initialFormData = {
  name: "",
  instagram_link: "",
  youtube_link: "",
  twitter_link: "",
  email: "",
  state: "",
  phone: "",
  message: "",
};

const statesAndUTs = [
  {
    value: "Andhra Pradesh",
    label: "Andhra Pradesh",
  },
  {
    value: "Arunachal Pradesh",
    label: "Arunachal Pradesh",
  },
  {
    value: "Assam",
    label: "Assam",
  },
  {
    value: "Bihar",
    label: "Bihar",
  },
  {
    value: "Chhattisgarh",
    label: "Chhattisgarh",
  },
  {
    value: "Goa",
    label: "Goa",
  },
  {
    value: "Gujarat",
    label: "Gujarat",
  },
  {
    value: "Haryana",
    label: "Haryana",
  },
  {
    value: "Himachal Pradesh",
    label: "Himachal Pradesh",
  },
  {
    value: "Jharkhand",
    label: "Jharkhand",
  },
  {
    value: "Karnataka",
    label: "Karnataka",
  },
  {
    value: "Kerala",
    label: "Kerala",
  },
  {
    value: "Madhya Pradesh",
    label: "Madhya Pradesh",
  },
  {
    value: "Maharashtra",
    label: "Maharashtra",
  },
  {
    value: "Manipur",
    label: "Manipur",
  },
  {
    value: "Meghalaya",
    label: "Meghalaya",
  },
  {
    value: "Mizoram",
    label: "Mizoram",
  },
  {
    value: "Nagaland",
    label: "Nagaland",
  },
  {
    value: "Odisha",
    label: "Odisha",
  },
  {
    value: "Punjab",
    label: "Punjab",
  },
  {
    value: "Rajasthan",
    label: "Rajasthan",
  },
  {
    value: "Sikkim",
    label: "Sikkim",
  },
  {
    value: "Tamil Nadu",
    label: "Tamil Nadu",
  },
  {
    value: "Telangana",
    label: "Telangana",
  },
  {
    value: "Tripura",
    label: "Tripura",
  },
  {
    value: "Uttar Pradesh",
    label: "Uttar Pradesh",
  },
  {
    value: "Uttarakhand",
    label: "Uttarakhand",
  },
  {
    value: "West Bengal",
    label: "West Bengal",
  },
  {
    value: "Andaman and Nicobar Islands",
    label: "Andaman & Nicobar Islands",
  },
  {
    value: "Chandigarh",
    label: "Chandigarh",
  },
  {
    value: "Dadra and Nagar Haveli and Daman and Diu",
    label: "Dadra & Nagar Haveli & Daman & Diu",
  },
  {
    value: "Delhi",
    label: "Delhi (NCT)",
  },
  {
    value: "Jammu and Kashmir",
    label: "Jammu & Kashmir",
  },
  {
    value: "Ladakh",
    label: "Ladakh",
  },
  {
    value: "Lakshadweep",
    label: "Lakshadweep",
  },
  {
    value: "Puducherry",
    label: "Puducherry",
  },
];

export default function InfluencerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [notification, setNotification] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState(initialFormData);


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
          form_type: "influencer",
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

        setFormData(initialFormData);
      } else {
        setNotification({
          type: "error",
          message:
            data?.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(
        "Error submitting influencer form:",
        error
      );

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
              {notification.type === "success"
                ? "✓"
                : "⚠"}
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

        {/* NAME */}

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
          type="url"
          name="instagram_link"
          value={formData.instagram_link}
          onChange={handleChange}
          placeholder="Instagram link*"
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
          type="url"
          name="youtube_link"
          value={formData.youtube_link}
          onChange={handleChange}
          placeholder="Youtube link"
          inputMode="url"
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
          name="twitter_link"
          value={formData.twitter_link}
          onChange={handleChange}
          placeholder="Twitter link"
          inputMode="url"
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



        <select
          name="state"
          value={formData.state}
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
          <option value="">
            Select state
          </option>

          {statesAndUTs.map((state) => (
            <option
              key={state.value}
              value={state.value}
            >
              {state.label}
            </option>
          ))}
        </select>



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