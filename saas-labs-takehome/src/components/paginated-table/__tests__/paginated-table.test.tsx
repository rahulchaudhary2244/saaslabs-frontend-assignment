import { screen, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("PaginatedTable renders correctly", () => {
    it("should render the title", () => {
        render(<button>hi</button>);

        expect(screen.getByRole("button")).toHaveTextContent("hi");
    });
});
