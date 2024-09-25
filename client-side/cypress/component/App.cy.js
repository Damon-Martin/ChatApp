import React from 'react'
import App from '../../src/pages/App'
import { assert, expect, should } from 'chai';

// App: Page Component
// LoginForm: Form Component 
describe('<App />', () => {
  it('test-page-component-renders', () => {
    cy.mount(<App />)
  })

  it('test-login-form-is-mounted-in-page-component', () => {
    assert.fail('Incomplete Test');
  });

  it('test-login-form-is-in-center-of-App', () => {
    assert.fail('Incomplete Test');
  });
})