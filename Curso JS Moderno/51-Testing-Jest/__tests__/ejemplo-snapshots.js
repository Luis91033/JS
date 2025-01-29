/** @format */

const cliente = {
  nombre: "Lalo",
  balance: 500,
  tipo: "premium",
};

describe("Testing al cliente", () => {
  test("Es Lalo", () => {
    expect(cliente).toMatchSnapshot();
  });
});
