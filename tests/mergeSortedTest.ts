import { merge } from "../src/mergeSorted";

describe("merge", () => {
  it("merges all three sorted arrays correctly", () => {
    const a = [1, 4, 7];
    const b = [9, 5, 2];
    const c = [8, 12, 15];
    console.log("Test 1 - Input arrays:");
    console.log("Array a:", a);
    console.log("Array b:", b);
    console.log("Array c:", c);
    const result = merge(a, b, c);
    console.log("Merged result:", result);
    console.log("Expected result:", [1, 2, 4, 5, 7, 8, 9, 12, 15]);
    expect(result).toEqual([1, 2, 4, 5, 7, 8, 9, 12, 15]);
  });

  it("handles empty arrays", () => {
    console.log("\nTest 2 - Empty arrays:");
    const result1 = merge([], [], []);
    console.log("merge([], [], []) =", result1);
    expect(result1).toEqual([]);
    
    const result2 = merge([], [3, 2, 1], []);
    console.log("merge([], [3, 2, 1], []) =", result2);
    expect(result2).toEqual([1, 2, 3]);
  });

  it("handles duplicates", () => {
    console.log("\nTest 3 - Duplicates:");
    const a = [1, 2, 3];
    const b = [3, 2, 1];
    const c = [2, 3];
    console.log("Input arrays:", a, b, c);
    const result = merge(a, b, c);
    console.log("Result with duplicates:", result);
    expect(result).toEqual([1, 1, 2, 2, 2, 3, 3, 3]);
  });

  it("works with single elements", () => {
    console.log("\nTest 4 - Single elements:");
    const a = [1];
    const b = [5];
    const c = [3];
    console.log("Input arrays:", a, b, c);
    const result = merge(a, b, c);
    console.log("Result:", result);
    expect(result).toEqual([1, 3, 5]);
  });
});
