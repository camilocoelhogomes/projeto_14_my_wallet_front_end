describe("SignUp", () => {
	it("should SignUp successfully", () => {
		cy.visit("http://localhost:3000/sign-up");
        cy.get('[placeholder="Nome"]').type('Joao')
        cy.get('[placeholder="E-mail"]').type('omes@gmail.com')
        cy.get('[placeholder="Senha"]').type('123456*abC')
        cy.get('[placeholder="Confirme a Senha"]').type('123456*abC')
        cy.get("[type='submit']").click();
        cy.url().should("equal", "http://localhost:3000/sign-in");
	});
});