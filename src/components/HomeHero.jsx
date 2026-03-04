import { useState } from "react";
import van from "../assets/swift_movers_van.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const HomeHero = () => {
  const [form, setForm] = useState({
    movingFrom: "",
    movingTo: "",
    name: "",
    email: "",
    phone: "",
    zipCode: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target.name;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      to_name: "Reliable Swift Movers",
      movingFrom: form.movingFrom,
      movingTo: form.movingTo,
      from_name: form.name,
      name: form.name,
      email: form.email,
      phone: form.phone,
      zipCode: form.zipCode,
    };

    try {
      await emailjs.send(
        "service_2ccvxdk", // service ID
        "template_c014sdc", // template ID
        templateParams,
        "eWajEKtVogHGSP8cC", // public key (EmailJS public key)
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
    <section className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold lg:text-shadow-lg mb-6 text-blue-700">
          Save Up To 60% On Your Move With Reliable Swift Movers
        </h1>
        <div class="bg-blue-600 rounded-lg p-4 md:p-6 lg:p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="font-bold text-white">Moving From:</label>
                <input
                  type="text"
                  placeholder="Enter your moving from location"
                  name="movingFrom"
                  value={form.movingFrom}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 rounded-md bg-white"
                />
              </div>
              <div>
                <label className="font-bold text-white">Moving To:</label>
                <input
                  type="text"
                  placeholder="Enter your moving to location"
                  name="movingTo"
                  value={form.movingTo}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 rounded-md bg-white"
                />
              </div>
              <div>
                <label className="font-bold text-white">Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 rounded-md bg-white"
                />
              </div>
              <div>
                <label className="font-bold text-white">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 rounded-md bg-white"
                />
              </div>
              <div>
                <label className="font-bold text-white">Phone:</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 rounded-md bg-white"
                />
              </div>
              <div>
                <label className="font-bold text-white">Zip Code:</label>
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                  className="w-full p-3 md:p-4 rounded-md bg-white"
                />
              </div>
              {/* <div>
                <label className="font-bold text-white">
                  Preferred Timing:
                </label>
                <select className="w-full p-3 md:p-4 rounded-md bg-white">
                  <option value="">Select preferred timing</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 8pm)</option>
                </select>
              </div>
              <div>
                <label className="font-bold text-white">Type Of Move:</label>
                <select className="w-full p-3 md:p-4 rounded-md bg-white">
                  <option value="">Select Type Of Move</option>
                  <option value="morning">Morning (8am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 4pm)</option>
                  <option value="evening">Evening (4pm - 8pm)</option>
                </select>
              </div> */}
            </div>
            <button className="mt-6 w-full bg-red-600 text-white py-3 rounded font-bold text-lg hover:bg-red-700 transition-colors cursor-pointer">
              {sending ? "Sending..." : "Get Quote"}
            </button>
          </form>
        </div>
      </div>
      <div>
        <img src={van} alt="Reliable Swift Movers" className="w-full" />
      </div>
    </section>
  );
};

export default HomeHero;
