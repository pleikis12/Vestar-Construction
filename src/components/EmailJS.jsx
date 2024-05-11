import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function EmailJS() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vm9apqw", "template_o4ozcf9", form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Elektroninis Pastas Issiustas!");
        },
        (error) => {
          toast.error("Nepavyko...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Jusu Pilnas Vardas
          </label>
          <input
            placeholder="Paviziuj... Erikas Pleikys"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500"
            required
            type="text"
            name="from_name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Jusu Elektroninis Pastas
          </label>
          <input
            id="email"
            placeholder="Erikas@example.com"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:broder-blue-500"
            required
            type="email"
            name="from_email"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Jusu Telephono Numeris
          </label>
          <input
            id="number"
            placeholder="+8 333 3333"
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:broder-blue-500"
            required
            type="tel"
            name="number"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-sm font-semibold mb-2"
            htmlFor=""
          >
            Zinute
          </label>
          <textarea
            rows="4"
            placeholder="Jusu Zinute Cia..."
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:broder-blue-500"
            required
            type="text-box"
            name="message"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-gray-500 text-n-1/80 font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 focus:outline-gray-700 ">
          Siusti Elektronini Pasta
        </button>
        <Toaster richColors />
      </div>
    </form>
  );
}
