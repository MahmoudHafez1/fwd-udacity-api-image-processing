import imageExists from "../../utilities/imageExists";

describe('test if image exists', () => {
    it('should be true when passing "fjord"', () => {
        expect(imageExists('fjord')).toBeTrue
    })

    it('should be false when passing "waterfall"', () => {
        expect(imageExists('waterfall')).toBeFalse
    })
})