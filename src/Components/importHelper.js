
// Get all images from folder
export function importAll(r) {
    let images = [];
    if (!r) {
        return null;
    }
    r.keys().forEach((item, index) => {
        images[index] = r(item);
    });

    // File names are in format .../.../b*number*.webp, so we need to extract *number* from it
    images.sort((a,b) => {
        const numberA = a.substring(a.lastIndexOf('/') + 2, a.indexOf('.'));
        const numberB = b.substring(b.lastIndexOf('/') + 2, b.indexOf('.'));
        return (Number)(numberA) - (Number)(numberB);
    })
    return images;
}