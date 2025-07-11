import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn, UserPlus, Mail, Lock, User } from "lucide-react";



export default function LoginSignup() {
  const [mode, setMode] = useState("login"); // "login" | "signup"

  // 👉 Form state (local only–replace with form libs if you like)
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "", 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "login") {
        await handleLogin(form.email, form.password);
      } else {
        if (form.password !== form.confirm) {
          throw new Error("Passwords do not match");
        }
        await handleSignup(form.name, form.email, form.password);
      }
      // ✅ Success ➜ redirect or show toast
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // 🔌 Replace with real API
  function fakeDelay() {
    return new Promise((r) => setTimeout(r, 800));
  }
  async function handleLogin(email, password) {
    await fakeDelay();
    // throw new Error("Invalid credentials");
  }
  async function handleSignup(name, email, password) {
    await fakeDelay();
  }

  const bgGradient =
    "bg-gradient-to-br from-emerald-100 via-sky-100 to-indigo-100";
  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div
      className={`min-h-screen ${bgGradient} flex items-center justify-center p-4`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={mode}
          variants={cardVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full max-w-md"
        >
          <Card className="overflow-hidden rounded-2xl shadow-xl border border-slate-200/50 backdrop-blur-md bg-white/80">
            <CardContent className="p-8 md:p-10">
              <header className="text-center mb-6">
                {mode === "login" ? (
                  <h2 className="text-3xl font-extrabold tracking-tight flex justify-center gap-2">
                    <LogIn className="w-8 h-8" /> <span>Welcome back!</span>
                  </h2>
                ) : (
                  <h2 className="text-3xl font-extrabold tracking-tight flex justify-center gap-2">
                    <UserPlus className="w-8 h-8" />{" "}
                    <span>Create an account</span>
                  </h2>
                )}
                <p className="mt-2 text-sm text-slate-600 max-w-xs mx-auto">
                  {mode === "login"
                    ? "Glad to see you again. Enter your details to continue."
                    : "Join our community of delightful writers and readers."}
                </p>
              </header>

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {mode === "signup" && (
                  <Field
                    label="Name"
                    type="text"
                    icon={User}
                    value={form.name}
                    onChange={(v) => updateField("name", v)}
                  />
                )}
                <Field
                  label="Email"
                  type="email"
                  icon={Mail}
                  value={form.email}
                  onChange={(v) => updateField("email", v)}
                />
                <Field
                  label="Password"
                  type="password"
                  icon={Lock}
                  value={form.password}
                  onChange={(v) => updateField("password", v)}
                />
                {mode === "signup" && (
                  <Field
                    label="Confirm Password"
                    type="password"
                    icon={Lock}
                    value={form.confirm}
                    onChange={(v) => updateField("confirm", v)}
                  />
                )}

                {error && (
                  <p className="text-red-600 text-sm text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-full mt-2"
                  disabled={loading}
                  size="lg"
                >
                  {loading
                    ? "Please wait…"
                    : mode === "login"
                    ? "Log In"
                    : "Sign Up"}
                </Button>
              </form>

              <footer className="text-center mt-6 text-sm">
                {mode === "login" ? (
                  <span>
                    New here?{" "}
                    <button
                      onClick={() => setMode("signup")}
                      className="font-semibold text-indigo-600 hover:underline"
                      type="button"
                    >
                      Create an account
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <button
                      onClick={() => setMode("login")}
                      className="font-semibold text-indigo-600 hover:underline"
                      type="button"
                    >
                      Log in
                    </button>
                  </span>
                )}
              </footer>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// 🛠️ Reusable input field with icon & label
function Field({ label, type = "text", icon: Icon, value, onChange }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
      {label}
      <span className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="w-4 h-4 text-slate-400" />
        </span>
        <Input
          required
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 placeholder:text-slate-400"
        />
      </span>
    </label>
  );
}
