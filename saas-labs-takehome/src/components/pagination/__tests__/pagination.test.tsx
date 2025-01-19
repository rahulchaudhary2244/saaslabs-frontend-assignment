import { render, screen, fireEvent } from "@testing-library/react";

import { afterEach, describe, expect, it, vi } from "vitest";
import { Pagination } from "../pagination";

describe("Pagination Component", () => {
    const mockHandleFirstPage = vi.fn();
    const mockHandlePreviousPage = vi.fn();
    const mockHandleNextPage = vi.fn();
    const mockHandleLastPage = vi.fn();

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should render the pagination buttons correctly", () => {
        render(
            <Pagination
                handleFirstPage={mockHandleFirstPage}
                handlePreviousPage={mockHandlePreviousPage}
                handleNextPage={mockHandleNextPage}
                handleLastPage={mockHandleLastPage}
                currentPage={2}
                totalPages={5}
            />
        );

        expect(
            screen.getByRole("button", { name: /go to first page/i })
        ).toBeEnabled();
        expect(
            screen.getByRole("button", { name: /go to previous page/i })
        ).toBeEnabled();
        expect(
            screen.getByRole("button", { name: /go to next page/i })
        ).toBeEnabled();
        expect(
            screen.getByRole("button", { name: /go to last page/i })
        ).toBeEnabled();
        expect(screen.getByText(/page 2 of 5/i)).toBeInTheDocument();
    });

    it("disables the 'First' and 'Previous' buttons on the first page", () => {
        render(
            <Pagination
                handleFirstPage={mockHandleFirstPage}
                handlePreviousPage={mockHandlePreviousPage}
                handleNextPage={mockHandleNextPage}
                handleLastPage={mockHandleLastPage}
                currentPage={1}
                totalPages={5}
            />
        );

        expect(screen.getByLabelText(/go to first page/i)).toBeDisabled();
        expect(screen.getByLabelText(/go to previous page/i)).toBeDisabled();
    });

    it("disables the 'Next' and 'Last' buttons on the last page", () => {
        render(
            <Pagination
                handleFirstPage={mockHandleFirstPage}
                handlePreviousPage={mockHandlePreviousPage}
                handleNextPage={mockHandleNextPage}
                handleLastPage={mockHandleLastPage}
                currentPage={5}
                totalPages={5}
            />
        );

        expect(screen.getByLabelText(/go to next page/i)).toBeDisabled();
        expect(screen.getByLabelText(/go to last page/i)).toBeDisabled();
    });

    it.each([
        ["first", mockHandleFirstPage, /go to first page/i],
        ["previous", mockHandlePreviousPage, /go to previous page/i],
        ["next", mockHandleNextPage, /go to next page/i],
        ["last", mockHandleLastPage, /go to last page/i],
    ])(
        "calls the appropriate handler when the %s button is clicked",
        (_buttonLabel, mockHandler, ariaLabel) => {
            render(
                <Pagination
                    handleFirstPage={mockHandleFirstPage}
                    handlePreviousPage={mockHandlePreviousPage}
                    handleNextPage={mockHandleNextPage}
                    handleLastPage={mockHandleLastPage}
                    currentPage={3}
                    totalPages={5}
                />
            );

            fireEvent.click(screen.getByLabelText(ariaLabel));
            expect(mockHandler).toHaveBeenCalledTimes(1);
        }
    );
});
