import Layout from "../components/Layout";
import SubscribeForm from "../components/subscribe/SubscribeForm";
import SubscriberList from "../components/subscribe/SubscriberList";

export default function subscribe() {
  return (
    <Layout title="ipoki subscribe">
      <SubscribeForm />
      <SubscriberList />
    </Layout>
  );
}
