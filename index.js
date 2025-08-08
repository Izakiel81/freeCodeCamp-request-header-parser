import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/whoami", (req, res) => {
  const ipaddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const language = req.headers["accept-language"]
    ? req.headers["accept-language"].split(",")[0]
    : "unknown";
  const software = req.headers["user-agent"]
    ? req.headers["user-agent"]
    : "unknown";
  res.json({ ipaddress, language, software });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
