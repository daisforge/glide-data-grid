import * as React from "react";
import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { CompactSelection, DataEditor, type GridSelection } from "../src/index.js";
import { drawGrid } from "../src/internal/data-grid/render/data-grid-render.js";
import { basicProps, Context, prep, standardAfterEach, standardBeforeEach } from "./test-utils.js";

vi.mock("../src/common/resize-detector", () => ({
    useResizeDetector: () => ({ ref: undefined, width: 1000, height: 1000 })
}));
vi.mock("../src/internal/data-grid/render/data-grid-render.js", async importOriginal => {
    const actual = await importOriginal<typeof import("../src/internal/data-grid/render/data-grid-render.js")>();
    return { ...actual, drawGrid: vi.fn(actual.drawGrid) };
});

beforeEach(standardBeforeEach);
afterEach(() => {
    standardAfterEach();
    vi.useRealTimers();
});

test("changing activeSelectionRangeOutlineOpacity updates the active range independently of focus and external outlines", () => {
    vi.useFakeTimers();
    const range = { x: 1, y: 1, width: 2, height: 3 };
    const selection: GridSelection = {
        current: { cell: [1, 1], range, rangeStack: [] },
        rows: CompactSelection.empty(),
        columns: CompactSelection.empty()
    };
    const focus = { x: 1, y: 1, width: 1, height: 1 };
    const external = { color: "#ff0000", range: { x: 0, y: 3, width: 1, height: 1 }, style: "solid-outline" } as const;
    const props = {
        ...basicProps,
        gridSelection: selection,
        highlightRegions: [external],
        theme: { accentColor: "#123456" }
    };
    const { rerender } = render(<DataEditor {...props} />, { wrapper: Context });
    prep(false);

    const outlines = () => vi.mocked(drawGrid).mock.lastCall?.[0].highlightRegions;
    const rangeOutline = (alpha: number) => ({ range, style: "solid-outline", color: `rgba(18, 52, 86, ${alpha})` });
    const focusOutline = { range: focus, style: "solid-outline", color: props.theme.accentColor };
    expect(outlines()).toEqual([external, rangeOutline(1), focusOutline]);

    for (const opacity of [0.5, 0.25, 0, 1]) {
        rerender(<DataEditor {...props} activeSelectionRangeOutlineOpacity={opacity} />);
        act(() => {
            vi.runAllTimers();
        });
        const expected = opacity === 0 ? [external, focusOutline] : [external, rangeOutline(opacity), focusOutline];
        expect(outlines()).toEqual(expected);
    }
});
