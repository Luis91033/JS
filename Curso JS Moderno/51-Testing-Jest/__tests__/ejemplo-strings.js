/** @format */

const password = "123456";

describe("Valida que el password no esté vació y tenga una extensión de 6 valores", () => {
  test("Que el password tenga 6 caracteres", () => {
    expect(password).toHaveLength(6);
  });
  test("Password no vacío", () => {
    expect(password).not.toHaveLength(0);
  });
});
