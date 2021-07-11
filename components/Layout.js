import Head from "next/head";
import Navbar from "./Navbar";
function Layout({ title, children }) {
  return (
    <div className=" max-w-screen-lg	max-h-screen	mx-auto">
      <Head>
        <title> {title}</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
