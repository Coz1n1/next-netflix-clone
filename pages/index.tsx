import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { useCurrent } from "@/hooks/useCurrent";
import { Navbar } from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import { MovieList } from "@/components/MovieList";
import { useMovieList } from "@/hooks/useMovieList";
import { useFavourites } from "@/hooks/useFavourites";

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
  const { data: movieList = [] } = useMovieList();
  const { data: favouriteList = [] } = useFavourites();

  return (
    <>
      <div className="bg-zinc-800 h-screen">
        <Navbar />
        <Billboard />
        <MovieList title="Popular" data={movieList} />
        <MovieList title="My Favourites" data={favouriteList} />
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
