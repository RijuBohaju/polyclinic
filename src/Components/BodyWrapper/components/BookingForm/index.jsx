import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to submit the form data, like sending it to a backend server
    console.log("Form submitted with data:", { name, email, phone, date, time });
    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <label>
        Preferred Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <label>
        Preferred Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
