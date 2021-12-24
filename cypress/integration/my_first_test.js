///<reference types='cypress'/>

it('cypress assignment',function(){
    cy.visit('http://10.4.10.105/dashboard')
  cy.get('input[name="username"]').type('nisumAdmin')


    cy.get('input[name="password"]').type('super')

    cy.get('.el-button--primary > span').click()
    cy.get('.display_name').should('have.text','Test 1233')
    cy.get('.sidebar-title').should('have.text','KHUSHAMDEED')
//    cy.get('#txtUsername').type('Admin')
//    cy.get('#txtPassword').type('admin123')
//
//   // cy.get('#welcome').should('have.text', 'Welcome Samsodn');       //WITH TRADITIONAL APPROACH UI
//   cy.intercept('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials').as('getComment')
//   cy.get('#btnLogin').click()
//   cy.wait('@getComment').its('response.statusCode').should('eq',301)
})

it('verifyEmployeesModules',function(){
cy.visit('http://10.4.10.105/dashboard')
  cy.get('input[name="username"]').type('nisumAdmin')


    cy.get('input[name="password"]').type('super')

    cy.get('.el-button--primary > span').click()
    cy.get('.router-link-exact-active > .el-menu-item').should('have.text', 'Dashboard')
    cy.get('[role="menubar"] > :nth-child(2) > a > .el-menu-item').should('have.text', 'Monthly Activities')
    cy.get(':nth-child(3) > .el-submenu > .el-submenu__title').should('have.text', 'Attendance Management')
    cy.get(':nth-child(4) > .el-submenu > .el-submenu__title').should('have.text', 'Leaveeßs Management')
    cy.get(':nth-child(5) > .el-submenu > .el-submenu__title').should('have.text', 'Team Management')
    cy.get(':nth-child(6) > .el-submenu > .el-submenu__title').should('have.text', 'Request Management')
    cy.get(':nth-child(7) > .el-submenu > .el-submenu__title').should('have.text', 'Reimbursement Management')
    cy.get(':nth-child(8) > .el-submenu > .el-submenu__title').should('have.text', 'Employees')


})

it('verifyHrModules',function(){
cy.visit('http://10.4.10.105/dashboard')
  cy.get('input[name="username"]').type('nisumAdmin')


    cy.get('input[name="password"]').type('super')

    cy.get('.el-button--primary > span').click()
    cy.get('[style="margin-left: 50px; margin-top: 10px;"] > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret').click()
    cy.get('.el-scrollbar__view > :nth-child(2) > span').click()
    cy.get('.router-link-exact-active > .el-menu-item').should('have.text', 'Dashboard')
    cy.get('[role="menubar"] > :nth-child(2) > a > .el-menu-item').should('have.text', 'Monthly Activities')
    cy.get(':nth-child(3) > .el-submenu > .el-submenu__title').should('have.text', 'Employee Management')
    cy.get(':nth-child(4) > .el-submenu > .el-submenu__title').should('have.text', 'Attendance Management')
    cy.get(':nth-child(5) > .el-submenu > .el-submenu__title').should('have.text', 'Event / Leaves Management')
    cy.get(':nth-child(6) > .el-submenu > .el-submenu__title').should('have.text', 'Request Management')
    cy.get(':nth-child(7) > .el-submenu > .el-submenu__title').should('have.text', 'Line Management')


})