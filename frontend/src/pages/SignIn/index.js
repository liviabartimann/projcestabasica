import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import api from "../../services/api";

export default function SignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/User", {
        email,
        password
      });
      history.push("/SignUp");
    } catch (error) {
      alert("Error!");
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Sign In ☻</h1>
        <div className="email">
          <input
            type="email"
            required
            placeholder="Email: "
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className="password">
          <input
            type="password"
            required
            placeholder="Password: "
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        <div>
          <button type="submit"> Sign In </button>
        </div>
      </form>
    </Container>
  );
}
