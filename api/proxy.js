export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxChzrtia5dPttQmuGTlUmYQednE8p-FoU6EdCYFIR93fmp85fe5SB50Qc5BB1wAmr2/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
