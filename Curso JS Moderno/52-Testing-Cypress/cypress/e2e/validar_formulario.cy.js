/** @format */

describe("Validar el Formulario", () => {
  it("Submit al formulario y mostrar la alerta de error", () => {
    cy.visit(
      "http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress/index.html"
    );

    cy.get('[data-cy="formulario"]').submit();
  });
});
