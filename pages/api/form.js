export default function handler(req, res) {
  const email = req.body.email

  if (!email) {
    return res.status(400).json({ done: false })
  }

  res.status(200).json({ done: true })
}