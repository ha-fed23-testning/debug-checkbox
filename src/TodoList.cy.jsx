/* eslint-disable no-undef */
import TodoList from './TodoList'
import { useStore } from './store'

describe('<TodoList />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<TodoList />)
	})

	it('can toggle item', () => {
		useStore.setState({
			todos: [
				{ id: 100, title: 'toggle', done: false }
			]
		})
		cy.mount(<TodoList />)
		cy.get('.item [type="checkbox"]').should('not.be.checked')
		cy.get('.item label').click()
		cy.get('.item [type="checkbox"]').should('be.checked')
	})
})