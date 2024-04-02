import { maxArea } from "./container-with-most-water";

describe('Arrays: Container with Most Water', () => {
    it('should return 49 for height = [1,8,6,2,5,4,8,3,7]', () => {
        const height = [1,8,6,2,5,4,8,3,7];
        expect(maxArea(height)).toBe(49);
    });

    it('should return 1 for height = [1,1]', () => {
        const height = [1,1];
        expect(maxArea(height)).toBe(1);
    });

    it('should return 16 for height = [4,3,2,1,4]', () => {
        const height = [4,3,2,1,4];
        expect(maxArea(height)).toBe(16);
    });

    it('should return 2 for height = [1,2,1]', () => {
        const height = [1,2,1];
        expect(maxArea(height)).toBe(2);
    });

    it('should return 24 for height = [1,3,2,5,25,24,5]', () => {
        const height = [1,3,2,5,25,24,5];
        expect(maxArea(height)).toBe(24);
    });
});