console.log = ("Mulai");
function asynchronous (iterasi, calback) {
    setTimeout(() => {
        console.log(`langkah ${iterasi}`);
        calback()
    })
}