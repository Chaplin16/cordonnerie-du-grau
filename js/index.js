function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += 
        `<div class="w-100"><img src="${d.attachment}" alt="${d.alt}" style="width:180px; height:180px; object-fit:cover;"></div>`;
    });
    $(element).slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        arrow:false,
        speed:1000,
        adaptiveHeight: true,
        autoplaySpeed:1200,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    centerMode: true,
                    centerPadding:  '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            }
        ]
    });
}

carousel(".carousel-stamp", stamp);
carousel(".carousel-knife", knife);
carousel(".carousel-engraving", engraving);
carousel(".carousel-keys", keys),
carousel(".carousel-othersProducts", othersProducts);