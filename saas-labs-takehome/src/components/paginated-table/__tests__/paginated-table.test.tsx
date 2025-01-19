import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PaginatedTable } from "../paginated-table";

const mockSixthRow = {
    "s.no": 5,
    "percentage.funded": 6666,
    "amt.pledged": 666666,
};

const mockData = [
    { "s.no": 0, "percentage.funded": 75, "amt.pledged": 1000 },
    { "s.no": 1, "percentage.funded": 50, "amt.pledged": 500 },
    { "s.no": 2, "percentage.funded": 75, "amt.pledged": 1000 },
    { "s.no": 3, "percentage.funded": 50, "amt.pledged": 500 },
    { "s.no": 4, "percentage.funded": 75, "amt.pledged": 1000 },
    { ...mockSixthRow },
];

describe("PaginatedTable Component", () => {
    it.each(["S.No.", "Percentage funded", "Amount pledged"])(
        "should render %s column correctly",
        ([headerName]) => {
            render(<PaginatedTable data={mockData} />);

            expect(
                screen.getByRole("columnheader", {
                    name: new RegExp(headerName),
                })
            ).toBeInTheDocument();
        }
    );

    it("should have Pagination navigation in it", () => {
        render(<PaginatedTable data={mockData} />);

        expect(
            screen.getByLabelText("Pagination navigation")
        ).toBeInTheDocument();
    });

    it("should show only 5 records for first page", () => {
        render(<PaginatedTable data={mockData} />);

        expect(screen.getAllByRole("columnheader").length).toBe(3);
        const bodyRows = screen.getAllByRole("rowgroup")[1];
        expect(bodyRows.childNodes.length).toBe(5);
    });

    it("should show only 1 records for second page on click of next", () => {
        render(<PaginatedTable data={mockData} />);

        fireEvent.click(screen.getByLabelText(/go to next page/i));
        const bodyRows = screen.getAllByRole("rowgroup")[1];
        expect(bodyRows.childNodes.length).toBe(1);
        const {
            "amt.pledged": amtPledged,
            "percentage.funded": perFunded,
            "s.no": sno,
        } = mockData[5];
        expect(screen.getByText(amtPledged)).toBeInTheDocument();
        expect(screen.getByText(perFunded)).toBeInTheDocument();
        expect(screen.getByText(sno)).toBeInTheDocument();
    });
});
