import { IncomingForm } from "formidable";
import path from "path";
import Subscriber from "../../models/Subscriber";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = "./public/uploads";
export default function upload(req, res) {
  if (req.method == "POST") {
    // parse a file upload
    const promise = new Promise((resolve, reject) => {
      const form = new IncomingForm();
      form.multiples = true;
      form.keepExtensions = true;
      form.uploadDir = uploadDir;
      form.parse(req, (err, fields, files) => {
        if (err)
          res
            .status(400)
            .json({ success: false, message: "something went wrong ! " });
        resolve({ fields, files });
      });

      form.on("fileBegin", function (name, file) {
        const [fileName, fileExt] = file.name.split(".");
        let FormatedName = fileName.replace(/\s/g, "");
        file.path = path.join(uploadDir, `${FormatedName}.${fileExt}`);
        file.name = `${FormatedName}.${fileExt}`;
        console.log(file);
      });
    });

    return promise.then(({ fields, files }) => {
      console.log(object);

      let payload = { ...fields, avatar: `/uploads/${name}` };
      let subscriber = new Subscriber(payload);
      subscriber.save().then((err) => console.log(err));
      res.status(200).json(subscriber);
    });
  }
  res.status(400).json({ success: false, message: "something went wrong ! " });
  // contents is a string with the content of uploaded file, so you can read it or store
}
