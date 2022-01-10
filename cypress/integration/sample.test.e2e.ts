describe('Sample test', () => {
	it('Should navigate onto the treeview', () => {
		cy.visit('http://localhost:3000/');
		cy.get('[data-testid="header_home"]').should('have.class', 'active');

		cy.visit('http://localhost:3000/about');
		cy.get('[data-testid="header_about"]').should('have.class', 'active');

		cy.visit('http://localhost:3000/todos');
		cy.get('[data-testid="header_todos"]').should('have.class', 'active');
	});
});
