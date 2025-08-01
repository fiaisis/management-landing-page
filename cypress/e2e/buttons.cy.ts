describe('Management Landing Page', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/');
  });

  it('displays the page title', () => {
    cy.contains('h4', 'Management').should('be.visible');
  });

  it('displays the ArgoCD button', () => {
    cy.contains('ArgoCD')
      .should('be.visible')
      .should('have.attr', 'href', 'https://management.reduce.isis.cclrc.ac.uk/argocd');
  });

  it('displays the Grafana button', () => {
    cy.contains('Grafana')
      .should('be.visible')
      .should('have.attr', 'href', 'https://management.reduce.isis.cclrc.ac.uk/grafana');
  });

  describe('Staging Section', () => {
    it('displays the section title', () => {
      cy.contains('h5', 'Staging').should('be.visible');
    });

    it('displays the Frontend button', () => {
      cy.contains('Staging').parent().parent().within(() => {
        cy.contains('Frontend')
          .should('be.visible')
          .should('have.attr', 'href', 'https://dev.reduce.isis.cclrc.ac.uk');
      });
    });

    it('displays the Admin-Portal button', () => {
      cy.contains('Staging').parent().parent().within(() => {
        cy.contains('Admin-Portal')
          .should('be.visible')
          .should('have.attr', 'href', 'https://dev.reduce.isis.cclrc.ac.uk/admin-portal');
      });
    });

    it('displays the API Docs button', () => {
      cy.contains('Staging').parent().parent().within(() => {
        cy.contains('API Docs')
          .should('be.visible')
          .should('have.attr', 'href', 'https://dev.reduce.isis.cclrc.ac.uk/api/docs');
      });
    });
  });

  describe('Production Section', () => {
    it('displays the section title', () => {
      cy.contains('h5', 'Production').should('be.visible');
    });

    it('displays the Frontend button', () => {
      cy.contains('Production').parent().parent().within(() => {
        cy.contains('Frontend')
          .should('be.visible')
          .should('have.attr', 'href', 'https://reduce.isis.cclrc.ac.uk/');
      });
    });

    it('displays the Admin-Portal button', () => {
      cy.contains('Production').parent().parent().within(() => {
        cy.contains('Admin-Portal')
          .should('be.visible')
          .should('have.attr', 'href', 'https://reduce.isis.cclrc.ac.uk/admin-portal');
      });
    });

    it('displays the API Docs button', () => {
      cy.contains('Production').parent().parent().within(() => {
        cy.contains('API Docs')
          .should('be.visible')
          .should('have.attr', 'href', 'https://reduce.isis.cclrc.ac.uk/api/docs');
      });
    });
  });
});