describe("SignIn", () => {
	it("should SignIn successfully", () => {
		cy.visit("http://localhost:3000/sign-in");
        cy.get('[placeholder="E-mail"]').type('camilo.coelho.gomes@gmail.com')
        cy.get('[placeholder="Senha"]').type('123456*abC')
        cy.get("[type='submit']").click();
        cy.url().should("equal", "http://localhost:3000/");
	});
});