import React, { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";

// Global context
const GlobalContext = React.createContext();

// Context provider
const ContextProvider = ({ children }) => {
  // STATES PARA OBTENER FRASES Y PERSONAJES
  const [personList, setPersonList] = useState([]);
  const [person, setPerson] = useState([]);
  const [personName, setPersonName] = useState();
  const [quote, setQuote] = useState("");
  const [nextQuote, setNextQuote] = useState(false);
  const [pageCounter, setPageCounter] = useState(1);
  const [offset, setOffset] = useState(0);
  const [reload, setReload] = useState(false);
  const [inputFilter, setInputFilter] = useState("");
  const [allQuotes, setAllQuotes] = useState([]);

  // CALIFICACIONES E HISTORIAL DE CALIFICACIONES
  const [goodCounter, setGoodCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  // COMENTARIOS E HISTORIAL DE COMENTARIOS
  const [comentary, setComentary] = useState("");
  const [historyComentary, setHistoryComentary] = useState([]);
  const [saveConfirmedComentary, setSaveConfirmedComentary] = useState(false);

  // ADMINISTRACION DE FAVORITOS
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFavoriteAllQuotes, setIsFavoriteAllQuotes] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);
  // const [saveConfirmedFavorite, setSaveConfirmedFavorite] = useState(false);

  // CONSUMO DE LA API PARA OBTENER Y RECARGAR LA INFORMACION DEL PERSONAJE
  useEffect(() => {
    const getPersonFunction = async () => {
      const res = await fetch(
        `https://www.breakingbadapi.com/api/characters?limit=5&offset=${offset}`
      );
      const respuesta = await res.json();
      const personajeObtenido = respuesta[0];
      setPersonList(respuesta);
      setPerson(personajeObtenido);
      setPersonName(personajeObtenido.name);
    };

    getPersonFunction();
  }, [reload, offset]);

  // CONSUMO DE LA API PARA OBTENER UNA FRASE ALEATORIA Y NOMBRE DEL AUTOR
  useEffect(() => {
    const getQuoteFunction = async () => {
      const resQuote = await fetch(
        `https://breakingbadapi.com/api/quote/random?author=${personName}`
      );
      const answerQuote = await resQuote.json();
      setQuote(answerQuote[0]);
    };

    getQuoteFunction();
    setGoodCounter(0);
    setBadCounter(0);
  }, [personName, nextQuote]);

  // CONSUMO DE LA API PARA OBTENER EL LISTADO DE TODOS LOS PERSONAJES
  useEffect(() => {
    const getAllQutes = async () => {
      const resAllQuotes = await fetch("https://breakingbadapi.com/api/quotes");
      const answerAllQuotes = await resAllQuotes.json();
      setAllQuotes(answerAllQuotes);
    };

    getAllQutes();
  }, []);

  // ---------------------------------------------------- //

  /**
   * FUNCIONES PARA ADMINISTRACION DE FRASES Y PERSONAJES
   */

  const nextQuoteFunction = () => {
    setNextQuote(!nextQuote);
    setIsFavorite(false);
  };

  const nextPageFunction = () => {
    setOffset(offset + 5);
    setPageCounter(pageCounter + 1);
  };

  const previousPageFunction = () => {
    setOffset(offset - 5);
    setPageCounter(pageCounter - 1);
  };

  const reReadQuotes = () => {
    setReload(!reload);
    setOffset(0);
  };

  const searchingNameFilter = (inputState) => {
    return function (x) {
      return x.name.toLowerCase().includes(inputState) || !inputState;
    };
  };

  // ---------------------------------------------------- //

  /**
   * FUNCIONES PARA ADMINISTRACION DE COMENTARIOS
   */

  const saveComentary = () => {
    // FECHA ACTUAL
    let date = new Date();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate() - 1;
    let year = date.getFullYear();
    let today = `${day}/${month}/${year}`;

    // HORA ACTUAL
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let time = `${hour}:${minute}:${second}`;

    setHistoryComentary([
      ...historyComentary,
      { id: uuid4(), coment: comentary, dateTime: today, hourTime: time },
    ]);

    setSaveConfirmedComentary(true);
    setComentary("");

    setTimeout(() => {
      setSaveConfirmedComentary(false);
    }, 4000);
  };

  const deleteComentary = (coment) => {
    let arrayComentDelete = historyComentary.filter(
      (com) => com.coment !== coment
    );
    setHistoryComentary(arrayComentDelete);
  };

  // FUNCION PARA LOGICA DEL LIKE
  const allQuoteLike = (id) => {
    setGoodCounter(0);

    const newQuotes = allQuotes.map((quote) => {
      if (quote.quote_id === id) {
        let contador = (quote?.like || 0) + 1;
        return { ...quote, like: contador };
      }
      return quote;
    });

    setAllQuotes(newQuotes);
  };

  // FUNCION PARA LOGICA DEL DISLIKE
  const allQuoteDislike = (id) => {
    setGoodCounter(0);

    const newQuotesDis = allQuotes.map((quoteDis) => {
      if (quoteDis.quote_id === id) {
        let contador = (quoteDis?.dislike || 0) + 1;
        return { ...quoteDis, dislike: contador };
      }
      return quoteDis;
    });

    setAllQuotes(newQuotesDis);
  };

  // ---------------------------------------------------- //

  /**
   * FUNCIONES PARA LA GESTION DE FAVORITOS
   */

  const isFavoriteFunction = (id, quote, author) => {
    if (isFavorite) {
      let arrayFilter = favoriteList.filter(
        (iterador) => iterador.quote !== quote
      );

      setFavoriteList(arrayFilter);
      setIsFavorite(!isFavorite);
    } else {
      setIsFavorite(isFavorite === false);
      setFavoriteList([
        ...favoriteList,
        { id: id, quote: quote, author: author },
      ]);
    }
  };

  const isFavoriteAllQuotesFunction = (id, quote, author) => {
    setFavoriteList([
      ...favoriteList,
      { id: id, quote: quote, author: author },
    ]);
    setIsFavoriteAllQuotes(true);
  };

  const deleteQuote = (quote) => {
    let arrayDelete = favoriteList.filter((fav) => fav.quote !== quote);
    setFavoriteList(arrayDelete);

    setIsFavorite(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        // PERSONS AND QUOTES MANAGER
        person,
        quote,
        nextQuoteFunction,
        personList,
        nextPageFunction,
        previousPageFunction,
        pageCounter,
        reReadQuotes,
        allQuotes,

        // SEARCH FILTER SISTEM
        setInputFilter,
        inputFilter,
        searchingNameFilter,

        // CALIFICATION SISTEM
        goodCounter,
        badCounter,
        allQuoteLike,
        allQuoteDislike,

        // HISTORY COMENTARIES
        setComentary,
        comentary,
        saveComentary,
        historyComentary,
        saveConfirmedComentary,
        deleteComentary,

        // FAVORITE MANAGER
        isFavoriteFunction,
        isFavorite,
        favoriteList,
        deleteQuote,
        isFavoriteAllQuotesFunction,
        isFavoriteAllQuotes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export { GlobalContext, ContextProvider };
