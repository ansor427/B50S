const testimonialData = [
    {
        author: "Muhamad Ansor",
        quote: "Jasa Yang Mantap!",
        image: "/image/mansor.jpg",
        rating: 5,
    },
    {
        author: "Muhamad Ansor",
        quote: "Jasa Yang Mantap!",
        image: "/image/mansor.jpg",
        rating: 4,
    },
    {
        author: "Muhamad Ansor",
        quote: "Jasa Yang Mantap!",
        image: "/image/mansor.jpg",
        rating: 4,
    },
    {
        author: "Muhamad Ansor",
        quote: "Jasa Yang Mantap!",
        image: "/image/mansor.jpg",
        rating: 2,
    },
    {
        author: "Muhamad Ansor",
        quote: "Jasa Yang Mantap!",
        image: "/image/mansor.jpg",
        rating: 4,
    },
];

function allTestimonial() {
    let testimonialHTML = "";
    testimonialData.forEach(function(item) {
        testimonialHTML +=`
        <div class="testimonial">
            <img class="profile-testimonial" src="${item.image}" alt="profile" >
            <p class="quote">${item.quote}</p>
            <p class="author">${item.author}</p>
            <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
        </div>`;
    });
    document.getElementById("testimonials").innerHTML = testimonialHTML;
}
allTestimonial();

//filtered testimonial
function filterTestimonial(rating) {
    let testimonialHTML = "";
    const testimonialFiltered = testimonialData.filter(function(item) {
        return item.rating === rating;
    });
    //console.log(testimonialFiltered);
    if (testimonialFiltered.length === 0) {
        testimonialHTML += `<h1> Data not found!</h1>`;
    } else {
        testimonialFiltered.forEach(function (item) {
            testimonialHTML +=`
            <div class="testimonial">
                <img class="profile-testimonial" src="${item.image}" alt="profile" >
                <p class="quote">${item.quote}</p>
                <p class="author">${item.author}</p>
                <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
            </div>
            `;
        });
    }
    document.getElementById("testimonials").innerHTML = testimonialHTML;
}