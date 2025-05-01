"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      let result = await res.json();
      console.log(result);

      setLoading(false);
      if (res.ok) {
        alert(result.msg);
      } else {
        alert(result.msg);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <form className="pt-[20px]" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row items-center gap-[30px]">
        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
          <label className="text-[1rem] text-white">First Name</label>
          <input
            type="text"
            className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-white transition-colors duration-300"
          />
        </div>

        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
          <label className="text-[1rem] text-white">Last Name</label>
          <input
            type="text"
            className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-white transition-colors duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
          <label className="text-[1rem] text-white">Email Address</label>
          <input
            type="email"
            className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-white transition-colors duration-300"
          />
        </div>

        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
          <label className="text-[1rem] text-white">Phone Number</label>
          <input
            type="number"
            className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-white transition-colors duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[5px] w-full mt-10">
        <label className="text-[1rem] text-white">Write Message</label>
        <textarea className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-white transition-colors focus:border-[#3B9DF8] duration-300"></textarea>
      </div>

      <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
        <button
          disabled={loading}
          type="submit"
          className={`dark:border-slate-700 py-2.5 px-6 bg-[#0078FF] hover:bg-blue-800 ${
            loading ? "cursor-not-allowed bg-slate-700" : ""
          } cursor-pointer text-white rounded-md text-[1rem] mt-[10px] w-max`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
