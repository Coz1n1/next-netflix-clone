import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { useCurrent } from "@/hooks/useCurrent";
import { Navbar } from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import { useMovieList } from "@/hooks/useMovieList";
import { useFavourites } from "@/hooks/useFavourites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

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
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <div className="bg-zinc-800">
        <InfoModal visible={isOpen} onClose={closeModal} />
        <Navbar username={user?.name} />
        <Billboard />
        <div className="pb-32">
          <MovieList title="Popular" data={movieList} />
          <MovieList title="My Favourites" data={favouriteList} />
        </div>
      </div>
    </>
  );
}
