/**
 * Google Apps Script — Riceve i lead dal form Morning Club
 * e li scrive nel foglio Google Sheets specificato.
 *
 * SETUP:
 * 1. Apri https://script.google.com e crea un nuovo progetto
 * 2. Incolla questo codice in Code.gs
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copia l'URL del deploy e mettilo in .env.local come NEXT_PUBLIC_APPS_SCRIPT_URL
 */

var SHEET_ID = "1aSs3-5x79W1-N3B1NA0ZLPTTrxPp2U7LYDzfmB4nCJw";

/** Strip HTML tags and limit length */
function sanitize(val, maxLen) {
  if (!val || typeof val !== "string") return "";
  return val.replace(/<[^>]*>/g, "").trim().substring(0, maxLen || 200);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Server-side validation
    var nome = sanitize(data.nome, 100);
    var cognome = sanitize(data.cognome, 100);
    var email = sanitize(data.email, 150);
    var telefono = sanitize(data.telefono, 30);
    var instagram = sanitize(data.instagram, 60);

    if (!nome || !email) {
      return ContentService.createTextOutput(
        JSON.stringify({ result: "error", error: "Campi obbligatori mancanti" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return ContentService.createTextOutput(
        JSON.stringify({ result: "error", error: "Email non valida" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheets()[0]; // primo foglio

    // Se il foglio è vuoto, aggiungi intestazioni
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Nome", "Cognome", "Email", "Telefono", "Instagram"]);
    }

    // Check for duplicate email
    var emailCol = sheet.getRange(1, 4, sheet.getLastRow()).getValues();
    for (var i = 1; i < emailCol.length; i++) {
      if (emailCol[i][0].toString().toLowerCase() === email.toLowerCase()) {
        return ContentService.createTextOutput(
          JSON.stringify({ result: "success" })
        ).setMimeType(ContentService.MimeType.JSON);
        // Silent success — don't reveal if email exists (privacy)
      }
    }

    sheet.appendRow([
      new Date().toISOString(),
      nome,
      cognome,
      email,
      telefono,
      instagram,
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// GET handler (richiesto da alcuni browser per il redirect)
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ result: "error", error: "Use POST" })
  ).setMimeType(ContentService.MimeType.JSON);
}
