/** @format */

const carrito = ["producto1", "producto2", "producto3"];

describe("Testing al carrito de compras", () => {
  test("Probar que el array tenga 3 elementos", () => {
    expect(carrito).toHaveLength(3);
  });
  test("Verificar que el password no esté vacío", () => {
    expect(carrito).not.toHaveLength(0);
  });
});
