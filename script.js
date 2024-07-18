$(document).ready(function() {
    const images = [
        { src: "./assets/images/thumbnail_img1.jpg", alt: "Thumbnail Image-1", id: "img1" },
        { src: "./assets/images/thumbnail_img2.jpg", alt: "Thumbnail Image-2", id: "img2" },
        { src: "./assets/images/thumbnail_img3.webp", alt: "Thumbnail Image-3", id: "img3" },
        { src: "./assets/images/thumbnail_img4.jpg", alt: "Thumbnail Image-4", id: "img4" },
        { src: "./assets/images/thumbnail_img5.jpg", alt: "Thumbnail Image-5", id: "img5" }
    ];

    const galleryList = $(".gallery-list");

    images.forEach(image => {
        const listItem = $("<li>", { class: "gallery-item", id: image.id });
        const imgElement = $("<img>", { src: image.src, alt: image.alt });

        listItem.append(imgElement);
        galleryList.append(listItem);

        // Preload full-size image
        new Image().src = image.src;
    });

    $(".gallery-item img").on("click", function() {
        const imgSrc = $(this).attr("src");
        const imgAlt = $(this).attr("alt");

        $("#full-image").fadeOut(300, function() {
            $(this).attr("src", imgSrc).attr("alt", imgAlt).fadeIn(300);
        });
        $(".full-size-image").fadeIn(300);
    });

    $(".full-size-image").on("click", function() {
        $(this).fadeOut(300);
    });
});
