"use client";

import { useState } from "react";
import { contactEmail, contactSection, mailtoHref, voiceCallEnabled } from "@/lib/content";

type ContactProps = {
  /**
   * TODO(voice-call): pass the function that opens the AI voice call.
   * It runs only when `voiceCallEnabled` is true. Until then the button explains that the call is not live yet.
   */
  onStartVoiceCall?: () => void;
};

export function Contact({ onStartVoiceCall }: ContactProps) {
  const [soon, setSoon] = useState(false);

  function startVoiceCall() {
    if (voiceCallEnabled && onStartVoiceCall) {
      onStartVoiceCall();
      return;
    }
    setSoon(true);
  }

  return (
    <section id={contactSection.id} className="section" aria-labelledby="contacto-title">
      <div className="wrap">
        <div className="card reveal px-6 py-10 shadow-[8px_10px_0_rgba(28,27,22,0.12)] md:px-12 md:py-14">
          <p className="font-pixel2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            {contactSection.eyebrow}
          </p>
          <h2
            id="contacto-title"
            className="mt-4 max-w-xl font-sans text-[clamp(2.15rem,4.6vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink"
          >
            {contactSection.titleBefore}
            <span className="serif">{contactSection.titleEm}</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink2">{contactSection.body}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <button type="button" className="btn btn-primary" data-voice-call="pending" onClick={startVoiceCall}>
              {contactSection.cta}
              <span aria-hidden="true">→</span>
            </button>
            <a href={mailtoHref} className="text-link">
              {contactEmail}
            </a>
          </div>
          {soon ? (
            <p role="status" className="mt-4 max-w-md text-sm leading-relaxed text-ink2">
              {contactSection.soonLead}{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold text-ink underline decoration-accent/40 underline-offset-2">
                {contactEmail}
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
