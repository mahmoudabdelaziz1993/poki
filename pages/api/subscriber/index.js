import DBConnection from "../../../utils/DBConnect";
import Subsciber from "../../../models/Subscriber";
DBConnection();

const SubscriberApi = async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        let subscribers = await Subsciber.find();
        res.status(200).json({ success: true, data: subscribers });
      } catch (error) {
        console.log(`error :`, error);
        res.status(400).send("Bad  :(");
      }

      break;

    case "POST":
      try {
        const subscriber = await Subsciber.create({ ...req.body });
        res.status(201).json({ succes: true, data: subscriber });
      } catch (error) {
        console.log(`error :`, error);
        res.status(400).send("Bad  :(");
      }
      break;
    default:
      res.status(405).end();

      break;
  }
};
export default SubscriberApi;
