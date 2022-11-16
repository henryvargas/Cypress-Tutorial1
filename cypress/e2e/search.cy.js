describe('Search test case',function() {
    it('search with result',function(){
        cy.visit('https://www.amazon.com/');
        cy.get('#twotabsearchtextbox').type('dress pants women');
        cy.get('#nav-search-submit-button').click();
        cy.get('.a-section > .a-color-state').contains('"dress pants women"')
    })
})