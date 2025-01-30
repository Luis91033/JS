/** @format */

/// <reference types="cypress" />

describe("Carga la página principal", () => {
  it("Carga la página principal", () => {
    cy.visit(
      "http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress/index.html"
    );
    //Verfificar el elemento y su texto
    cy.contains("h1", "Administrador de Pacientes de Veterinaria");
    // Verificar que exista
    cy.get("h1").should("exist");

    //Verificar que exista el elemento y contenga texto
    cy.get("h1")
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");
  });
});
