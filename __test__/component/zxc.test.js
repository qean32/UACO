import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders a message', () => {
    const { asFragment, getByText } = render(<div></div>)
    expect(getByText('Hello, world!')).toBeInTheDocument()
    expect(asFragment()).toMatchInlineSnapshot(`
    <h1>Hello, World!</h1>
  `)
})
