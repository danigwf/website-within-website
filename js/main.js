console.log("hi");

const brandButton = document.getElementById("brands-button");
const brandsPage = document.getElementById("brands-page");
console.log(brandsPage);


brandButton.addEventListener("click", function(){
    brandsPage.scrollIntoView(
        {behavior: "smooth",
         block: "center",   }
    ); 


});

const possibilitiesButton = document.getElementById("possibilities-button");
const possibilitiesPage = document.getElementById("possibilities-page");

possibilitiesButton.addEventListener("click", function(){
    possibilitiesPage.scrollIntoView(
        {behavior: "smooth",
        }

    );

});


const contactButton = document.getElementById("contact-button");
const contactPage = document.getElementById("contact-page");

contactButton.addEventListener("click", function(){
    contactPage.scrollIntoView(
        {behavior: "smooth",
        }

    );

});