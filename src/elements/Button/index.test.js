import React from "react"
import { render } from "@testing-library/react"
import Button from './index'

test("Shoul not allowed click button if isDisabled is present", () => {
    const { container } = render(<Button isDisabled />)

    expect(container.querySelector("span.disabled")).toBeInTheDocument()
})