import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import ImageLight from "../../assets/img/login-office.jpeg";
import ImageDark from "../../assets/img/login-office-dark.jpeg";
import { Label, Input, Button } from "@windmill/react-ui";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form.email);
    Inertia.post("/login", {
      email: form.email,
      password: form.password,
    });
  }

  const errors = usePage().props.errors;

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <form onSubmit={handleSubmit}>
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <Label>
                  <span>Email</span>
                  <Input
                    type="email"
                    id="email"
                    className="mt-1"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-sm text-red-500">{errors.email}</div>
                  )}
                </Label>

                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    className="mt-1"
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </Label>

                <Button className="mt-4" block type="submit">
                  Log in
                </Button>
                <hr className="my-8" />

                <InertiaLink href="/forgot" className="">
                  Forgot your password?
                </InertiaLink>
                <p className="mt-1">
                  <InertiaLink href="/register" className="">
                    Create account
                  </InertiaLink>
                </p>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
