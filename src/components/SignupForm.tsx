"use client";

import { useState, useRef, type FormEvent } from "react";
import { submitToSheet, type FormData } from "../lib/submitForm";

interface FieldErrors {
  nome?: string;
  cognome?: string;
  email?: string;
  privacy?: string;
}

function validate(data: FormData, privacy: boolean): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.nome.trim()) errors.nome = "Inserisci il tuo nome";
  if (!data.email.trim()) {
    errors.email = "Ci serve la tua email per scriverti";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Mmm, controlla l'email — sembra manchi qualcosa";
  }
  if (!privacy) errors.privacy = "Ci serve il tuo ok (solo cose belle, promesso)";
  return errors;
}

function validateField(field: string, value: string, privacy?: boolean): string | undefined {
  switch (field) {
    case "nome": return !value.trim() ? "Inserisci il tuo nome" : undefined;
    case "cognome": return !value.trim() ? "Inserisci il tuo cognome" : undefined;
    case "email":
      if (!value.trim()) return "Ci serve la tua email per scriverti";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Mmm, controlla l'email — sembra manchi qualcosa";
      return undefined;
    case "privacy": return !privacy ? "Ci serve il tuo ok per scriverti (solo cose belle, promesso)" : undefined;
    default: return undefined;
  }
}

export default function SignupForm() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    instagram: "",
  });
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing (only if field was already touched)
    if (touched[field] && errors[field as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormData) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, form[field] ?? "");
    if (err) {
      setErrors((prev) => ({ ...prev, [field]: err }));
    } else {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypotRef.current && honeypotRef.current.value) return;

    const errs = validate(form, privacy);
    setErrors(errs);
    setTouched({ nome: true, email: true, privacy: true });
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    const result = await submitToSheet(form);
    setStatus(result.ok ? "success" : "error");
    setMessage(result.message);
  };

  if (status === "success") {
    return (
      <section id="iscriviti" className="scroll-mt-20 py-20 sm:py-28 bg-cream">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="stamp-badge text-base px-4 py-2 mb-6 inline-block !rotate-0">
            ✓ Sei in lista.
          </div>
          <h3 className="text-3xl sm:text-4xl text-foreground mb-3 font-[EloquiaDisplay]">
            Ci vediamo domenica.
          </h3>
          <p className="text-[0.75rem] tracking-[0.15em] uppercase text-blue-gray font-[EloquiaDisplay] mt-2" aria-live="polite">
            Ti avvisiamo per il prossimo appuntamento.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="iscriviti" className="scroll-mt-20 py-12 sm:py-22 bg-cream">
      <div className="max-w-lg mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-8">
          <span className="stamp-badge mb-3 inline-block">Lista</span>
          <h3 className="text-2xl sm:text-4xl text-foreground mt-2 font-[EloquiaDisplay] uppercase">
            Entra in lista
          </h3>
          <p className="text-[0.7rem] tracking-[0.15em] uppercase text-blue-gray mt-2 font-[EloquiaDisplay]">
            Niente spam. Solo il prossimo appuntamento.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-5">
          {/* Honeypot anti-spam */}
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="_hp">Non compilare</label>
            <input ref={honeypotRef} id="_hp" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Nome */}
          <Field
            label="Nome"
            id="nome"
            value={form.nome}
            onChange={set("nome")}
            onBlur={handleBlur("nome")}
            error={errors.nome}
            autoComplete="given-name"
            required
          />

          <Field
            label="Email"
            id="email"
            type="email"
            inputMode="email"
            autoCapitalize="none"
            value={form.email}
            onChange={set("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            autoComplete="email"
            required
          />

          <Field
            label="Instagram"
            id="instagram"
            value={form.instagram ?? ""}
            onChange={set("instagram")}
            placeholder="@handle"
            optional
          />

          {/* Privacy checkbox — compact */}
          <div className="-mt-0.5">
            <label className="flex items-start gap-2.5 cursor-pointer group p-1.5 -m-1.5 rounded transition-colors hover:bg-foreground/[0.02]">
              <input
                type="checkbox"
                checked={privacy}
                onChange={(e) => {
                  setPrivacy(e.target.checked);
                  setTouched((prev) => ({ ...prev, privacy: true }));
                  if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: undefined }));
                }}
                className="mt-0.5 min-w-[18px] w-[18px] h-[18px] accent-red border-black/20 rounded"
                aria-describedby={errors.privacy ? "privacy-error" : undefined}
              />
              <span className="text-[0.7rem] text-foreground/70 leading-snug">
                Accetto di ricevere aggiornamenti sugli eventi Morning Club.
              </span>
            </label>
            {errors.privacy && (
              <p id="privacy-error" className="text-xs text-red mt-1 pl-2" role="alert">
                {errors.privacy}
              </p>
            )}
          </div>

          {/* Error message */}
          {status === "error" && (
            <div className="bg-red/5 border border-red/20 text-red text-xs px-3 py-2.5 rounded" role="alert" aria-live="polite">
              {message}
            </div>
          )}

          {/* Progress microcopy */}
          <p className="text-center text-[0.6rem] text-blue-gray font-[EloquiaDisplay] tracking-[0.12em] !mt-1">
            30 secondi e sei dentro.
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-red hover:bg-red-dark text-cream py-4 min-h-[48px] text-base tracking-[0.25em] transition-all duration-200 hover:shadow-lg active:translate-y-[1px] active:shadow-none disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.12)" }}
          >
            {status === "loading" ? (
              <>
                <svg className="w-5 h-5 spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
                </svg>
                Invio in corso...
              </>
            ) : (
              <span className="uppercase tracking-[0.3em] font-[EloquiaDisplay]">Entro in lista</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ── Reusable field ── */
interface FieldProps {
  label: string;
  id: string;
  type?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "search" | "numeric" | "decimal" | "none";
  autoCapitalize?: string;
  autoComplete?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
}

function Field({
  label,
  id,
  type = "text",
  inputMode,
  autoCapitalize,
  autoComplete,
  value,
  onChange,
  onBlur,
  error,
  required,
  optional,
  placeholder,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.7rem] tracking-[0.05em] font-[EloquiaDisplay] text-foreground mb-1">
        {label}
        {optional && <span className="text-blue-gray font-normal ml-1 text-[0.65rem]">(opzionale)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-3.5 py-2.5 bg-white/65 border border-black/20 text-foreground text-[15px] placeholder:text-neutral-400 transition-all duration-150 outline-none focus:border-red focus:bg-white focus:shadow-[0_0_0_4px_rgba(224,60,40,0.12)] ${
          error ? "border-red bg-white" : ""
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1 text-xs text-red mt-1.5" role="alert">
          <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
          {error}
        </p>
      )}
    </div>
  );
}
