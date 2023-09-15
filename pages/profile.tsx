import { useCurrent } from "@/hooks/useCurrent";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";

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

const Profile = () => {
  const { data: user } = useCurrent();
  const router = useRouter();

  return (
    <div className="flex items-center justify-center bg-zinc-800 h-screen">
      <div className="flex flex-col items-center">
        <span className="text-white text-4xl font-semibold">
          Who is watching?
        </span>
        <div
          onClick={() => router.push("/")}
          className="text-center cursor-pointer"
        >
          <div className="w-52 h-52 mt-8">
            <img
              src="/images/netflix_profile.jpg"
              alt="Profile picture"
              className="rounded-lg"
            />
          </div>
          <div className="text-white text-2xl mt-4">{user?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
