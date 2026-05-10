import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cosmosImage from "@assets/secondimage.jpg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact - S.A. Aljunied";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:aqeel@epicdynamics.ai?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[35vh] min-h-[240px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cosmosImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        <div className="relative z-10 flex flex-col h-full p-6 sm:p-10 md:p-14">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link href="/">
              <span className="inline-flex items-center gap-2 text-white/70 text-sm font-sans tracking-wider uppercase cursor-pointer" data-testid="link-back-home">
                <ArrowLeft className="w-4 h-4" />
                <span>Home</span>
              </span>
            </Link>
          </div>
          <div className="mt-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <Mail className="w-5 h-5 text-white/50" />
              <p className="text-white/50 text-xs sm:text-sm font-sans tracking-[0.3em] uppercase">
                Get in Touch
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              data-testid="text-contact-title"
            >
              Send a Message
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto px-6 sm:px-10 md:px-14 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-10"
        >
          {sent ? (
            <Card className="bg-white/[0.04] border-white/[0.08]">
              <CardContent className="p-8 text-center space-y-4">
                <Mail className="w-10 h-10 text-white/30 mx-auto" />
                <h2 className="font-serif text-2xl font-bold text-white" data-testid="text-sent-confirmation">
                  Opening your email client...
                </h2>
                <p className="text-white/50 text-sm font-sans leading-relaxed">
                  Your message has been prepared. If your email client didn't open, you can reach out directly at{" "}
                  <a href="mailto:aqeel@epicdynamics.ai" className="text-white/70 underline" data-testid="link-direct-email">
                    aqeel@epicdynamics.ai
                  </a>
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-white/20 text-white/70"
                  onClick={() => setSent(false)}
                  data-testid="button-send-another"
                >
                  Send another message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-white/40 text-xs font-sans tracking-wider uppercase">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-md px-4 py-3 text-white text-sm font-sans placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  data-testid="input-name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-white/40 text-xs font-sans tracking-wider uppercase">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-md px-4 py-3 text-white text-sm font-sans placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  data-testid="input-email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-white/40 text-xs font-sans tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  rows={6}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-md px-4 py-3 text-white text-sm font-sans placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  data-testid="input-message"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white/10 border border-white/20 text-white"
                data-testid="button-send"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <p className="text-white/30 text-xs font-sans text-center">
                This will open your email client to send the message to{" "}
                <span className="text-white/50">aqeel@epicdynamics.ai</span>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
