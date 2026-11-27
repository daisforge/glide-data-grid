import { describe, expect, it } from "vitest";
import {
    CompactSelection,
    GridCellKind,
    type GridSelection,
    type InnerGridCell,
} from "../src/internal/data-grid/data-grid-types.js";
import { cellIsInRange } from "../src/internal/data-grid/render/data-grid-lib.js";

describe("cellIsInRange", () => {
    it("ячейка в активном диапазоне и rangeStack учитывается один раз", () => {
        const cell: InnerGridCell = {
            kind: GridCellKind.Text,
            data: "value",
            displayData: "value",
            allowOverlay: false,
        };
        const selection: GridSelection = {
            current: {
                cell: [1, 1],
                range: { x: 1, y: 1, width: 1, height: 5 },
                rangeStack: [{ x: 1, y: 3, width: 1, height: 1 }],
            },
            columns: CompactSelection.empty(),
            rows: CompactSelection.empty(),
        };

        expect(cellIsInRange([1, 3], cell, selection, false)).toBe(true);
    });
});
