
export function importAll(r) {
    let images = [];
    if (!r) {
        return null;
    }
    r.keys().forEach((item, index) => {
        images[index] = r(item);
    });
    images.sort((a,b) => {
        const slashA = a.lastIndexOf('/');
        const slashB = b.lastIndexOf('/');

        const dotA = a.indexOf('.');
        const dotB = b.indexOf('.');
        const numberA = a.substring(slashA + 2, dotA);
        const numberB = b.substring(slashB + 2, dotB);
        return (Number)(numberA) - (Number)(numberB);
    })
    return images;
}