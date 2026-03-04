import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      to_name: "Reliable Swift Movers",
      from_name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    };

    try {
      await emailjs.send(
        "service_2ccvxdk",
        "template_c014sdc",
        templateParams,
        "eWajEKtVogHGSP8cC",
      );
      toast.success("Message sent — we'll get back to you shortly!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Message send failed, please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-16 lg:mt-16">
      <div>
        <h4 className="text-2xl md:text-3xl font-bold text-blue-700 mb-5">
          Get In Touch With Us
        </h4>
        <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 md:p-4 lg:p-5 rounded-md bg-black/10"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 md:p-4 lg:p-5 rounded-md bg-black/10"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 md:p-4 lg:p-5 rounded-md bg-black/10"
            />
          </div>
          <div>
            <textarea
              className="w-full p-3 md:p-4 rounded-md bg-black/10"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={7}
              placeholder="Enter your message"
              required
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-red-600 text-white py-3 rounded font-bold text-lg hover:bg-red-700 transition-colors cursor-pointer disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="w-full overflow-x-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1951.5938567057044!2d-113.94547102340071!3d51.15990877173639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537161801da2c54d%3A0x5b68f62d3e9a32e1!2s282%20Cornerstone%20Cres%20NE%2C%20Calgary%2C%20AB%20T3N%201R4%2C%20Canada!5e1!3m2!1sen!2sgh!4v1772036893587!5m2!1sen!2sgh"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="location"
        />
      </div>
    </section>
  );
};

export default ContactForm;
