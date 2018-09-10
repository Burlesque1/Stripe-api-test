import React from "react";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Emaily! </h1>
      <h6>Collect feedback form your users</h6>
      <forms action="/login" method="POST">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="e-mail address"
          autofocus
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          minlength={6}
          required
        />
        <button>login</button>
        <p>
          New to here? >>
          <a href="/signup">Create an account</a>
        </p>
        <p>Created By しんらてんせい - Copyright © 2018.</p>
      </forms>
    </div>
  );
};

export default Landing;
