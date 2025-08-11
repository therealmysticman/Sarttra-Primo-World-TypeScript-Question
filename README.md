# Merge Sorted Arrays - TypeScript Project

A TypeScript implementation of a function that merges three sorted arrays into a single sorted array. The second array is reversed before merging, as per the project requirements.

## Project Description

This project implements a `merge` function that takes three sorted arrays as input and returns a single sorted array containing all elements. The function has the following characteristics:

- The first array (`collection_1`) is used as-is
- The second array (`collection_2`) is reversed before merging
- The third array (`collection_3`) is used as-is
- All three arrays are then merged into a single sorted array

## Features

- ✅ Merges three sorted arrays into one sorted array
- ✅ Reverses the second array before merging
- ✅ Handles empty arrays gracefully
- ✅ Preserves duplicate elements
- ✅ Works with arrays of any size (including single elements)
- ✅ Full TypeScript support with type safety
- ✅ Comprehensive test suite with Jest

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Primo_Typescript_Project
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Basic Usage

```typescript
import { merge } from './src/mergeSorted';

// Example 1: Merge three sorted arrays
const a = [1, 4, 7];
const b = [9, 5, 3];  // Will be reversed to [3, 5, 9]
const c = [8, 10, 11];

const result = merge(a, b, c);
console.log(result); // [1, 3, 4, 5, 7, 8, 9, 10, 11]
```

### More Examples

```typescript
// Empty arrays
merge([], [], []); // []

// Mixed empty and non-empty arrays
merge([], [3, 2, 1], []); // [1, 2, 3]

// Arrays with duplicates
merge([1, 2, 3], [3, 2, 1], [2, 3]); // [1, 1, 2, 2, 2, 3, 3, 3]

// Single elements
merge([1], [5], [3]); // [1, 3, 5]
```

## API Reference

### `merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]`

Merges three sorted arrays into a single sorted array.

**Parameters:**
- `collection_1` (number[]): First sorted array (used as-is)
- `collection_2` (number[]): Second sorted array (reversed before merging)
- `collection_3` (number[]): Third sorted array (used as-is)

**Returns:**
- `number[]`: A single sorted array containing all elements from the three input arrays

## Development

### Running Tests

```bash
npm test
```

This will run all tests and show detailed console output for each test case.

### Building the Project

```bash
npm run build
```

This compiles the TypeScript code to JavaScript in the `dist` directory.

### Project Structure

```
Primo_Typescript_Project/
├── src/
│   └── mergeSorted.ts          # Main implementation
├── tests/
│   └── mergeSortedTest.ts      # Test suite
├── package.json                # Dependencies and scripts
├── jest.config.js             # Jest configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## Implementation Details

The merge function works in the following steps:

1. **Reverse the second array**: The `collection_2` array is reversed using a custom `reverseArray` function
2. **Merge two arrays**: A helper function `mergeTwoSorted` merges two sorted arrays using a two-pointer approach
3. **Merge three arrays**: The `mergeThreeSorted` function merges all three arrays by first merging the first two, then merging the result with the third array

### Algorithm Complexity

- **Time Complexity**: O(n + m + p) where n, m, p are the lengths of the three arrays
- **Space Complexity**: O(n + m + p) for the output array

## Testing

The project includes comprehensive tests that cover:

1. **Basic functionality**: Merging three sorted arrays correctly
2. **Edge cases**: Handling empty arrays
3. **Duplicates**: Preserving duplicate elements in the output
4. **Single elements**: Working with arrays containing single elements

Each test includes detailed console logging to show:
- Input arrays
- Expected results
- Actual results
- Step-by-step execution

## Dependencies

- **TypeScript**: ^5.9.2 - For type safety and modern JavaScript features
- **Jest**: ^30.0.5 - Testing framework
- **ts-jest**: ^29.4.1 - TypeScript support for Jest
- **@types/jest**: ^30.0.0 - TypeScript definitions for Jest

## License

ISC License

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## Troubleshooting

### Tests not found
If Jest doesn't find your tests, make sure:
- Test files are in the `tests/` directory
- Test files have `.ts` extension
- Jest configuration includes the correct `testMatch` patterns

### TypeScript compilation errors
Run `npm run build` to check for TypeScript errors and ensure all types are correctly defined. 