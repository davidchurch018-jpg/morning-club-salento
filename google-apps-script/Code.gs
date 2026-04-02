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

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheets()[0]; // primo foglio

    // Se il foglio è vuoto, aggiungi intestazioni
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Nome", "Cognome", "Email", "Telefono", "Instagram"]);
    }

    sheet.appendRow([
      new Date().toISOString(),
      data.nome || "",
      data.cognome || "",
      data.email || "",
      data.telefono || "",
      data.instagram || "",
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
