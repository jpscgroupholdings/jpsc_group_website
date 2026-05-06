"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  TrendingUp,
  FileText,
  Clock,
} from "lucide-react";
import { InputField } from "@/components/ui/InputField";
import { TextareaField } from "@/components/ui/TextAreaField";
import { SelectField } from "@/components/ui/SelectField";
import SectionHero from "@/components/SectionHero";

type FormTab = "general" | "investor";

const officeLocations = [
  {
    name: "Head Office",
    address: "Makati City, Philippines",
    hours: "Mon – Fri, 10:00 AM – 5:00 PM",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123926.39955826882!2d121.0005!3d14.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0c5f5%3A0x68b576c2f0a0c5!2sMakati%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1699999999999",
  },
];

const generalContacts = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@company.com",
    href: "mailto:hello@company.com",
  },
  {
    icon: MessageCircle,
    label: "Message on Viber",
    value: "+63 912 345 6789",
    href: "#",
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon – Fri, 10:00 AM – 5:00 PM",
    href: null,
  },
];

const investorContacts = [
  {
    icon: Mail,
    label: "IR email",
    value: "ir@company.com",
    href: "mailto:ir@company.com",
  },
  {
    icon: FileText,
    label: "Annual reports",
    value: "View documents",
    href: "/investor-relations",
  },
  {
    icon: Phone,
    label: "Direct line",
    value: "+63 2 8123 4567",
    href: "tel:+63281234567",
  },
];

const inquiryTypes = [
  { value: "", label: "Select inquiry type", disabled: true },
  { value: "investment", label: "Investment opportunity" },
  { value: "partnership", label: "Strategic partnership" },
  { value: "joint-venture", label: "Joint venture" },
  { value: "franchise", label: "Franchise / licensing" },
  { value: "other", label: "Other" },
];

const investmentRanges = [
  { value: "", label: "Select range (optional)", disabled: true },
  { value: "under-1m", label: "Under ₱1M" },
  { value: "1m-10m", label: "₱1M – ₱10M" },
  { value: "10m-50m", label: "₱10M – ₱50M" },
  { value: "50m-plus", label: "₱50M+" },
];

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState<FormTab>("general");

  return (
    <section id="contact-section" className="bg-white">
      <SectionHero
        label="Get in touch"
        title="We'd love to hear from you"
        description="Whether you're an investor, a potential partner, or looking to collaborate - we're ready to connect."
      />
      <div className="mx-auto max-w-7xl py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* ── Left: Smart Form ── */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            {/* Tab toggle */}
            <div className="mb-8 flex gap-2 rounded-full bg-slate-100 p-1">
              {(["general", "investor"] as FormTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    activeTab === tab
                      ? "bg-white text-brand-primary-700 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab === "general"
                    ? "General inquiry"
                    : "Investor & business"}
                </button>
              ))}
            </div>

            {/* General Inquiry Form */}
            {activeTab === "general" && (
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <InputField
                    label="Full name"
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your full name"
                  />
                  <InputField
                    label="Email"
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <InputField
                  label="Phone number"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+63 912 345 6789"
                />
                <TextareaField
                  label="Message"
                  required
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-xl bg-brand-primary-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-brand-primary-600"
                >
                  Send message
                </button>
              </form>
            )}

            {/* Investor / Business Inquiry Form */}
            {activeTab === "investor" && (
              <form className="space-y-6">
                <div className="rounded-lg bg-brand-primary-50 px-4 py-3">
                  <p className="flex items-center gap-2 text-sm font-semibold text-brand-primary-600">
                    <TrendingUp size={16} />
                    Investor &amp; business relations
                  </p>
                  <p className="mt-1 text-xs leading-5 text-brand-primary-500/80">
                    Our investor relations team typically responds within 2
                    business days.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField
                    label="Full name"
                    required
                    type="text"
                    name="ir-name"
                    id="ir-name"
                    placeholder="Your full name"
                  />
                  <InputField
                    label="Company / organization"
                    required
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField
                    label="Email"
                    required
                    type="email"
                    name="ir-email"
                    id="ir-email"
                    placeholder="you@company.com"
                  />
                  <InputField
                    label="Phone number"
                    type="tel"
                    name="ir-phone"
                    id="ir-phone"
                    placeholder="+63 912 345 6789"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <SelectField
                    label="Inquiry type"
                    required
                    name="inquiry-type"
                    id="inquiry-type"
                    options={inquiryTypes}
                  />
                  <SelectField
                    label="Investment range"
                    name="investment-range"
                    id="investment-range"
                    options={investmentRanges}
                  />
                </div>

                <TextareaField
                  label="Message"
                  required
                  name="ir-message"
                  id="ir-message"
                  rows={4}
                  placeholder="Tell us about your inquiry or proposal…"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-xl bg-brand-primary-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-brand-primary-600"
                >
                  Submit inquiry
                </button>
              </form>
            )}
          </div>

          {/* ── Right: Sidebar ── */}
          <div className="space-y-5">
            {/* General contacts */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="mb-4 text-base font-bold text-brand-primary-900">
                General contacts
              </h3>
              <div className="space-y-4">
                {generalContacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-lg bg-brand-primary-50 p-2">
                        <Icon size={15} className="text-brand-primary-500" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-semibold text-brand-primary-600 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-brand-primary-900">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Investor relations */}
            <div className="rounded-2xl border border-brand-primary-100 bg-brand-primary-50 p-6">
              <h3 className="mb-1 text-base font-bold text-brand-primary-900">
                Investor relations
              </h3>
              <p className="mb-4 text-xs leading-5 text-brand-primary-500/80">
                For shareholders, analysts, and investment inquiries.
              </p>
              <div className="space-y-4">
                {investorContacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-lg bg-white p-2">
                        <Icon size={15} className="text-brand-primary-500" />
                      </div>
                      <div>
                        <p className="text-xs text-brand-primary-500/70">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-semibold text-brand-primary-600 hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-brand-primary-900">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office location + embedded map */}
            {officeLocations.map((loc) => (
              <div
                key={loc.name}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <iframe
                  title={`Map — ${loc.name}`}
                  src={loc.mapEmbedSrc}
                  width="100%"
                  height="180"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-white px-5 py-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-brand-primary-50 p-2">
                      <MapPin size={15} className="text-brand-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-primary-900">
                        {loc.name}
                      </p>
                      <p className="text-xs text-slate-500">{loc.address}</p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {loc.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
