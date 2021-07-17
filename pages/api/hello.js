// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  // res.status(200).json({ name: req.method });
  switch (req.method) {
    case "GET":
      res.status(200).json({ message: "hay ninja " });
      break;
    case "POST":
      res.status(200).json({ message: req.method });
      break;
    default:
      res.status(405).end();
      break;
  }
}
