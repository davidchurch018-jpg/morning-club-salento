# Morning Club Salento — Landing Page

> Coffee & Disco · Next.js + TailwindCSS · Google Sheets form submission

---

## File Tree

```
morning-club/
├── public/
│   ├── fonts/
│   │   ├── MochaBubble.woff2
│   │   └── MochaSans.woff2
│   ├── hero-bg.jpg
│   └── logo-illustration.jpg
├── src/
│   ├── app/
│   │   ├── globals.css          # @font-face, palette, utility classes
│   │   ├── layout.tsx           # Root layout (meta, lang="it")
│   │   └── page.tsx             # Pagina principale
│   ├── components/
│   │   ├── AlternatingText.tsx  # Lettera per lettera: Sans ↔ Bubble
│   │   ├── Header.tsx           # Fixed header + CTA
│   │   ├── Hero.tsx             # Composizione tipografica grande
│   │   ├── Concept.tsx          # Micro-sezione concept
│   │   ├── SignupForm.tsx       # Form con validazione inline
│   │   └── Footer.tsx           # Footer minimale
│   └── lib/
│       └── submitForm.ts        # Helper POST → Google Sheets
├── .env.local                   # NEXT_PUBLIC_APPS_SCRIPT_URL
├── package.json
└── README.md
```

---

## Setup Locale

### 1. Installa dipendenze

```bash
cd morning-club
npm install
```

### 2. Avvia dev server

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

### 3. Build di produzione

```bash
npm run build && npm start
```

---

## Setup Google Sheets + Apps Script

### Passo 1: Crea un Google Sheet

1. Vai su [sheets.google.com](https://sheets.google.com) e crea un nuovo foglio.
2. Nella **riga 1** aggiungi queste intestazioni (esattamente così):

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| timestamp | nome | cognome | email | telefono | instagram |

### Passo 2: Crea lo script

1. Nel foglio, vai su **Estensioni → Apps Script**
2. Cancella il codice di default e incolla questo:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nome || "",
      data.cognome || "",
      data.email || "",
      data.telefono || "",
      data.instagram || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Salva (Ctrl+S).

### Passo 3: Deploy come Web App

1. Clicca **Deploy → Nuova distribuzione**
2. Tipo: **App web**
3. Esegui come: **Me**
4. Chi ha accesso: **Chiunque**
5. Clicca **Distribuisci** → copia l'URL generato.

### Passo 4: Configura l'URL nella landing

Apri `.env.local` e sostituisci il placeholder:

```
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/IL_TUO_ID/exec
```

Riavvia il dev server (`npm run dev`). Il form ora invia i dati al tuo Google Sheet.

---

## Note

- **Font**: I file `.woff2` in `public/fonts/` sono convertiti dai `.ttf` Mocha Outline (Bubble) e Mocha Sans.
- **CORS**: Il `Content-Type: text/plain` nel fetch evita il preflight CORS con Apps Script.
- **Privacy**: La checkbox è obbligatoria. Non vengono salvate chiavi segrete nel client.
- **Performance**: Solo CSS puro per le animazioni, nessuna libreria aggiuntiva.
