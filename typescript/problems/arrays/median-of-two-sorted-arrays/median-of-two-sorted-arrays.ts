/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *
 * see: https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 */

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = merged.length;
    const mid = Math.floor(length / 2);

    return length % 2 === 0 ? (merged[mid] + merged[mid - 1]) / 2 : merged[mid];
};