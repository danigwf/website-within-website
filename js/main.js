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

