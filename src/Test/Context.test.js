import { getPersonFunction } from "../Contexto/Contexto";

describe("Pruebas para el archivo Context.js", () => {
  test("La funcion debe retornar un ARRAY con los datos de la API", async () => {
    const res = getPersonFunction();

    expect(typeof res).toBe([]);
  });
});
