describe("Contractor Management", () => {
  it("Add new contractor", () => {
    cy.visit("/");
    cy.get('[data-cy="add-btn"]').click();
    cy.url().should("include", "/new");
    cy.get('[data-cy="companyName"]').type("Test Contractor");
    cy.get('[data-cy="VATRegistrationsNumber"]').type("123");
    cy.get('[data-cy="typeOfCompany"]').click();
    cy.get(".v-select__content").first().click();
    cy.get('[data-cy="website"]').type("google.com");
    cy.get('[data-cy="email"]').type("trongbinhnguyen15@gmail.com");
    cy.get('[data-cy="address"]').type("Ho Chi Minh city");
    cy.get('[data-cy="submit-btn"]').click();

    cy.contains("td", "Test Contractor");
  });

  it("Delete contractor but cancel", () => {
    cy.visit("/");
    cy.get('[data-cy="company-row"]').then((beforeRows) => {
      cy.get('[data-cy="delete-btn"]').first().click();

      cy.get('[data-cy="confirm-cancel-btn"]').first().click();
      cy.get('[data-cy="company-row"]').then((afterRows) => {
        expect(afterRows).to.have.length(beforeRows.length);
      });
    });
  });

  it("Delete contractor", () => {
    cy.visit("/");
    cy.get('[data-cy="company-row"]').then((beforeRows) => {
      cy.get('[data-cy="delete-btn"]').first().click();
      cy.get('[data-cy="confirm-ok-btn"]').first().click();

      cy.visit("/");
      cy.get('[data-cy="company-row"]').then((afterRows) => {
        expect(afterRows).to.have.length(beforeRows.length - 1);
      });
    });
  });

  it("Edit contractor", () => {
    cy.visit("/");

    cy.get('[data-cy="edit-btn"]').first().click();
    cy.get('[data-cy="companyName"] input').clear();
    cy.get('[data-cy="companyName"]').type("New update Contractor");
    cy.get('[data-cy="submit-btn"]').click();
    cy.contains("td", "New update Contractor");
  });
});
