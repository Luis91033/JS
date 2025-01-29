/** @format */
const cliente = {
  nombre: "Lalo",
  balance: 500,
};

describe("Testing al Cliente", () => {
  test("El cliente es premium", () => {
    expect(cliente.balance).toBeGreaterThan(400);
  });

  test("Verificar que es Lalo", () => {
    expect(cliente.nombre).toBe("Lalo");
  });

  test("No es otro cliente", () => {
    expect(cliente.nombre).not.toBe("Pedro");
  });
});
