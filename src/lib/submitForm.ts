export interface FormData {
  nome: string;
  cognome: string;
  email: string;
  telefono?: string;
  instagram?: string;
}

export interface SubmitResult {
  ok: boolean;
  message: string;
}

const ENDPOINT = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

export async function submitToSheet(data: FormData): Promise<SubmitResult> {
  if (!ENDPOINT) {
    return {
      ok: false,
      message: "Endpoint non configurato. Contattaci direttamente.",
    };
  }

  try {
    // text/plain avoids CORS preflight; redirect: "follow" handles Apps Script 302
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(data),
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
