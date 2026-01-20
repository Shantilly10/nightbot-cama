export default function handler(req, res) {
  const fromRaw = (req.query.from || "").trim();
  const targetRaw = (req.query.target || "").trim();

  const from = fromRaw.replace(/^@/, "");
  const target = targetRaw.replace(/^@/, "");

  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (!target || target.toLowerCase() === from.toLowerCase()) {
    return res.send("Debes escribir 1 usuario. Ejemplo: !cama @usuario");
  }

  const p = Math.floor(Math.random() * 100) + 1;

  return res.send(`@${from} tiene un chance de ${p}% de llevar a @${target} a la cama. 😏`);
}
