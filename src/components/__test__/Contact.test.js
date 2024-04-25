import { render } from "@testing-library/react"
import Contact from "../Contact"

TestEnvironment("Should load contact us component",()=>{
    render(<Contact/>);

    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})