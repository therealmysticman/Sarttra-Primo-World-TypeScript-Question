// mergeSorted.ts

export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    const reversed2 = reverseArray(collection_2);
    return mergeThreeSorted(collection_1, reversed2, collection_3);
  }
  
  function reverseArray(arr: number[]): number[] {
    const result: number[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  }
  
  function mergeTwoSorted(arr1: number[], arr2: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);
    return merged;
  }
  
  function mergeThreeSorted(a: number[], b: number[], c: number[]): number[] {
    return mergeTwoSorted(mergeTwoSorted(a, b), c);
  }
  