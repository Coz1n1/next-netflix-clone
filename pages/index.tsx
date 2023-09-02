import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { useCurrent } from "@/hooks/useCurrent";
import { Navbar } from "@/components/Navbar";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrent();

  return (
    <>
      <div className="bg-zinc-800 h-screen">
        <Navbar />
        <div className="h-32">
          Netflix Clone NextJS hello: {user?.name}
          <button className="w-32 bg-red-600 text-xl" onClick={() => signOut()}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
