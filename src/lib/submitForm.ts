export interface FormData {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  instagram?: string;
}

export interface SubmitResult {
  ok: boolean;
  message: string;
}

const ENDPOINT = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

/** Strip HTML tags and trim to max length to prevent injection */
function sanitize(value: string, maxLen = 200): string {
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLen);
}

/** Simple client-side rate limiter — 1 submission per 30 seconds */
let lastSubmitTime = 0;
const RATE_LIMIT_MS = 30_000;

export async function submitToSheet(data: FormData): Promise<SubmitResult> {
  if (!ENDPOINT) {
    return {
      ok: false,
      message: "Endpoint non configurato. Contattaci direttamente.",
    };
  }

  // Rate limiting
  const now = Date.now();
  if (now - lastSubmitTime < RATE_LIMIT_MS) {
    return {
      ok: false,
      message: "Hai già inviato il form. Riprova tra qualche secondo.",
    };
  }

  // Sanitize all inputs
  const sanitized: FormData = {
    nome: sanitize(data.nome, 100),
    cognome: sanitize(data.cognome, 100),
    email: sanitize(data.email, 150),
    telefono: sanitize(data.telefono, 30),
    instagram: data.instagram ? sanitize(data.instagram, 60) : "",
  };

  try {
    lastSubmitTime = now;

    // text/plain avoids CORS preflight; redirect: "follow" handles Apps Script 302
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(sanitized),
      redirect: "follow",
    });

    if (!res.ok) {
      return { ok: false, message: "Ops, il server fa i capricci. Riprova tra un attimo." };
    }

    const json = await res.json();
    return {
      ok: json.result === "success",
      message:
        json.result === "success"
          ? "Sei dei nostri! ☕️"
          : json.error ?? "Qualcosa è andato storto, riprova.",
    };
  } catch {
    return {
      ok: false,
      message: "Ops, il server fa i capricci. Controlla la connessione e riprova.",
    };
  }
}
