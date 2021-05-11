import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
      value={name}
      onChange={({target}) => {setName(target.value)}}
      required
      placeholder="Name"
      />
      <input type='tel'
      value={phone}
      onChange={({target}) => {setPhone(target.value)}}
      pattern='^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$'
      required
      placeholder="Phone"
      />
      <input type='email'
      value={email}
      onChange={({target}) => {setEmail(target.value)}}
      required
      placeholder="Email"
      />
      <input type='submit' />
    </form>
  );
};
