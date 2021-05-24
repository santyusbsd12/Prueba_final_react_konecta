import React, { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";

// Contexto global
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

  // CALIFICACIONES E HISTORIAL DE CALIFICACIONES
  const [calificationModGood, setCalificationModGood] = useState(false);
  const [calificationModBad, setCalificationModBad] = useState(false);
  const [goodCounter, setGoodCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  // COMENTARIOS E HISTORIAL DE COMENTARIOS
  const [comentary, setComentary] = useState("");
  const [historyComentary, setHistoryComentary] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  // ADMINISTRACION DE FAVORITOS
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

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

  useEffect(() => {
    const getQuoteFunction = async () => {
      const resQuote = await fetch(
        `https://breakingbadapi.com/api/quote/random?author=${personName}`
      );
      const respuestaquote = await resQuote.json();
      setQuote(respuestaquote[0]);
    };

    getQuoteFunction();
    setGoodCounter(0);
    setBadCounter(0);
  }, [personName, nextQuote]);

  // FUNCIONES PARA ADMINISTRACION DE FRASES Y PERSONAJES
  const nextQuoteFunction = () => {
    setNextQuote(!nextQuote);
    setCalificationModGood(false);
    setCalificationModBad(false);
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

  const searchingTheme = (inputState) => {
    return function (x) {
      return x.name.toLowerCase().includes(inputState) || !inputState;
    };
  };

  // FUNCIONES PARA ADMINISTRACION DE COMENTARIOS
  const changeCalificationModeGood = () => {
    if (calificationModBad) {
      return;
    } else {
      setCalificationModGood(!calificationModGood);
      setGoodCounter(goodCounter + 1);
    }
  };

  const changeCalificationModeBad = () => {
    if (isFavorite) {
      return;
    } else if (calificationModGood) {
      return;
    } else {
      setCalificationModBad(!calificationModBad);
    }

    if (badCounter >= 0) {
      setBadCounter(badCounter + 1);
    } else {
      return;
    }
  };

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
    setSaveConfirmed(true);
    setComentary("");

    setTimeout(() => {
      setSaveConfirmed(false);
    }, 4000);
  };

  const deleteComentary = (coment) => {
    let arrayComentDelete = historyComentary.filter(
      (com) => com.coment !== coment
    );
    setHistoryComentary(arrayComentDelete);
  };

  // FUNCIONES PARA LA GESTION DE FAVORITOS
  const isFavoriteFunction = (quote, author) => {
    if (calificationModBad) {
      setFavoriteList([...favoriteList]);
    } else if (isFavorite) {
      let arrayFilter = favoriteList.filter(
        (iterador) => iterador.quote !== quote
      );

      setFavoriteList(arrayFilter);
      setIsFavorite(!isFavorite);
    } else {
      setIsFavorite(!isFavorite);
      setFavoriteList([
        ...favoriteList,
        { id: uuid4(), quote: quote, author: author },
      ]);
    }
  };

  const deleteQuote = (quote) => {
    let arrayDelete = favoriteList.filter((fav) => fav.quote !== quote);
    setFavoriteList(arrayDelete);

    setIsFavorite(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        // Persons and quotes manager
        person,
        quote,
        nextQuoteFunction,
        personList,
        nextPageFunction,
        previousPageFunction,
        pageCounter,
        reReadQuotes,

        // Search filter sistem
        setInputFilter,
        inputFilter,
        searchingTheme,

        // Calification sistem
        changeCalificationModeGood,
        calificationModGood,
        changeCalificationModeBad,
        calificationModBad,
        goodCounter,
        badCounter,

        // History comentaries
        setComentary,
        comentary,
        saveComentary,
        historyComentary,
        saveConfirmed,
        deleteComentary,

        // FAVORITE MANAGER
        isFavoriteFunction,
        isFavorite,
        favoriteList,
        deleteQuote,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export { GlobalContext, ContextProvider };
