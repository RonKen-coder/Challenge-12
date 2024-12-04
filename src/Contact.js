
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prev) => ({ ...prev, [field]: 'This field is required' }));
    }
  };

  const validateEmail = () => {
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onBlur={() => handleBlur('name')}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onBlur={() => validateEmail()}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p>{errors.email}</p>}
        <textarea
          placeholder="Message"
          value={formData.message}
          onBlur={() => handleBlur('message')}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;