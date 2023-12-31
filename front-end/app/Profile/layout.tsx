import "../globals.css";
import Head from "next/head";
import Dashboard from '@/components/Dashboard/Dashboard/Dashboard'
import Header from "../../components/Dashboard/Home/Header/Header"
import Reload from "../reload";
export const metadata = {
  title: "Profile",
  description: "ft_transcendence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta httpEquiv="refresh" content="0;url=/new-page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="h-[100vh] w-[100vw] flex  pl-[150px] bg-[#FAFDFF] lsm:max-lg:overflow-x-hidden lsm:max-lg:pl-[100px] lsm:max-sm:pl-[0px]">
          <Dashboard path='Profile'/>
          <Reload>
            {children}
          </Reload>
        </div>
    </>
  );
}
