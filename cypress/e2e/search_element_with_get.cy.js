describe('formas de encotrar un elemento',function(){
    it('search with result',function(){
        cy.visit('https://www.amazon.com/');
        cy.get('.nav-input.nav-progressive-attribute#twotabsearchtextbox').type('dress pants women');//por clase si hay espacio reemplazas por punto
        cy.get('#twotabsearchtextbox').clear();//por id
        cy.get('[name="field-keywords"]').type('dress');
        cy.get('[type="text"]').type(' black');
        
    })
})