import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { slideIn } from "@/constants/SlideIn";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_ha1u87q",
        "template_wvjwwkf",
        {
          from_name: form.name,
          to_name: "shubham mishra",
          from_email: form.email,
          to_email: "shubhammishra3070@gmail.com",
          message: form.message
        },
        "RTFLa2SXLbGrXrc0Y"
      )
      .then(
        () => {
          setSending(false);
          alert("Thank you. I will get back to you as soon as possible");

          setForm({
            name: "",
            email: "",
            message: ""
          });
        },
        error => {
          setSending(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  const { resolvedTheme } = useTheme();

  return (
    <div id="contact" className="sm:flex pt-16 min-h-screen w-full">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="w-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/logo.png"
          alt="Imagica"
          height={300}
          width={300}
          className="size-full"
        />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex w-full gap-8 justify-center flex-col p-7 sm:p-10"
      >
        <h2
          className={`font-extrabold font-serif sm:text-3xl text-2xl lg:text-4xl ${resolvedTheme ==
          "dark"
            ? "text-slate-300"
            : "text-slate-700"}`}
        >
          Connect with Us
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`flex border-2 rounded-xl p-4 w-full gap-8 shadow-inner flex-col ${resolvedTheme ==
          "dark"
            ? "bg-slate-800 shadow-black border-slate-500"
            : "bg-slate-100 shadow-slate-500 border-slate-500"}`}
        >
          <label className="flex cursor-pointer flex-col gap-3 justify-center">
            <h3
              className={`font-bold sm:text-xl ${resolvedTheme == "dark"
                ? "text-slate-400"
                : "text-slate-500"}`}
            >
              Enter your name
            </h3>
            <Input
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border-2 rounded-lg border-slate-400 h-12 font-bold lg:text-lg"
            />
          </label>
          <label className="flex flex-col cursor-pointer gap-3 justify-center">
            <h3
              className={`font-bold sm:text-xl ${resolvedTheme == "dark"
                ? "text-slate-400"
                : "text-slate-500"}`}
            >
              Enter your mail
            </h3>
            <Input
              type="email"
              placeholder="Enter your e-mail"
              required
              name="email"
              value={form.email}
              className="border-2 rounded-lg border-slate-400 h-12 font-bold lg:text-lg"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col cursor-pointer gap-3 justify-center">
            <h3
              className={`font-bold sm:text-xl ${resolvedTheme == "dark"
                ? "text-slate-400"
                : "text-slate-500"}`}
            >
              Enter your message
            </h3>
            <textarea
              rows={7}
              placeholder="Type your message..."
              required
              name="message"
              className="border-2 p-3 rounded-lg border-slate-400 font-bold lg:text-lg"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <Button
            className={`sm:text-xl shadow-inner text-lg font-bold w-full ${resolvedTheme ==
            "dark"
              ? "bg-slate-700 shadow-black hover:bg-slate-800"
              : "bg-slate-200 shadow-slate-400 hover:bg-slate-300"}`}
            type="submit"
          >
            {sending ? "Sending..." : "Send"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
