import { Filter } from "../../components/Filter";
import { HeaderHome } from "../../components/Header";
import { Mensagem } from "../../components/Mensagem";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { BackgroundLogged } from "../../components/BackgroundLogged";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import api from "../../services/axios";
import { Footer } from "../../components/Footer";

export default function Movies() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get("/movies");
      console.log(response);

      setMovies(response.data);
    };
    loadMovies();
  }, []);

  const handleDivClick = (id) => {
    setIsModalOpen(true);
    setSelectedMovieId(id);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleOutsideClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HeaderHome setIsSearchFocused={setIsSearchFocused} />
      <div className={styles.secondyBar}>
        <div className={styles.contentBar}>
          <Filter />
        </div>
      </div>
      {isSearchFocused ? (
        <Mensagem
          isSearchFocused={isSearchFocused}
          msg="pesquise o nome de um filme ou série."
        />
      ) : (
        <main className={styles.mainContent}>
          <BackgroundLogged />
          <div className={styles.cardsControll}>
            {movies.map((movie) => (
              <Card
                key={movie.id}
                onclick={() => handleDivClick(movie.id)}
                filmeImage={movie.thumbnail}
                title={movie.name}
              />
            ))}
            {isModalOpen && (
              <Modal
                fechar={isModalOpen ? handleOutsideClick : () => {}}
                manter={handleModalClick}
                selectedMovieId={selectedMovieId}
              />
            )}
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
