import { findMedianSortedArrays } from "./median-of-two-sorted-arrays";

describe('Arrays: Median of Two Sorted Arrays', () => {
    it('should return the median of two sorted arrays', () => {
        const nums1 = [1, 3];
        const nums2 = [2];
        expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.0);
    })

    it('should return the median of two sorted arrays', () => {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.5)
    })

    it('should return the median of two sorted arrays', () => {
        const nums1 = [0, 0];
        const nums2 = [0, 0];
        expect(findMedianSortedArrays(nums1, nums2)).toEqual(0.0)
    })

    it('should return the median of two sorted arrays', () => {
        const nums1= [] as number[];
        const nums2 = [1];
        expect(findMedianSortedArrays(nums1, nums2)).toEqual(1.0)
    })

    it('should return the median of two sorted arrays', () => {
        const nums1 = [2];
        const nums2 = [] as number[];
        expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.0);
    })
});