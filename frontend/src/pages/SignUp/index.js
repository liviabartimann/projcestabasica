import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import api from "../../services/api";

export default function SignUp({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/User", {
        name,
        email,
        password
      });
      history.push("/");
    } catch (error) {
      alert("Error!");
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up ☺</h1>
        <div className="title">
          <div className="name">
            <input
              type="name"
              required
              placeholder="Nome: "
              onChange={event => setName(event.target.value)}
            />
          </div>

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
            <button type="button"> Sign Up </button>
          </div>
        </div>
      </form>
    </Container>
  );
}
