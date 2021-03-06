let characters = [
    {
        name: "Uzumaki Naruto",
        character_img_1: "naruto-1.png",
        character_img_2: "naruto-2.png",
        price: "$100,000",
        color: "#f8b86b"
    },
    {
        name: "Uchiha Sasuke",
        character_img_1: "sasuke-1.png",
        character_img_2: "sasuke-2.png",
        price: "$100,000",
        color: "cornflowerblue"
    },
    {
        name: "Haruno Sakura",
        character_img_1: "sakura-1.jfif",
        character_img_2: "sakura-2.png",
        price: "$100,000",
        color: "deeppink"
    },
    {
        name: "Son Goku",
        character_img_1: "goku-1.png",
        character_img_2: "goku-2.png",
        price: "$150,000",
        color: "#a0f6fc"
    },
    {
        name: "Prince Vegeta",
        character_img_1: "vegeta-1.png",
        character_img_2: "vegeta-2.png",
        price: "$150,000",
        color: "pink"
    },
    {
        name: "Natsu Dragneel",
        character_img_1: "natsu-1.jfif",
        character_img_2: "natsu-2.png",
        price: "$50,000",
        color: "#e25822"
    },
    {
        name: "Gray Fullbuster",
        character_img_1: "gray-1.jfif",
        character_img_2: "gray-2.jfif",
        price: "$50,000",
        color: "aqua"
    },
    {
        name: "Monkey D. Luffy",
        character_img_1: "luffy-1.jfif",
        character_img_2: "luffy-2.png",
        price: "$75,000",
        color: "goldenrod"
    },
    {
        name: "Gon Freecss",
        character_img_1: "gon-1.jfif",
        character_img_2: "gon-2.jpg",
        price: "$25,000"
    },
    {
        name: "Killua Zoldyck",
        character_img_1: "killua-1.jfif",
        character_img_2: "killua-2.jpg",
        price: "$25,000"
    },
    {
        name: "Izuku Midoriya",
        character_img_1: "deku-1.jfif",
        character_img_2: "deku-2.png",
        price: "$40,000",
        color: "chartreuse"
    },
    {
        name: "Katsuki Bakugo",
        character_img_1: "bakugou-1.jfif",
        character_img_2: "bakugou-2.jfif",
        price: "$40,000"
    },
]

let characterSection = document.getElementById("anime-characters");
let html = "";

// ${element.matches(":hover")? `<img src="./img/${e.character_img_1}" />` : `<img src="./img/${e.character_img_1}" />`}
characters.forEach( e => {
    
    // console.log(a)
    html +=`
            <div class="character-card col-lg-4 col-md-6 ${e.color}">
                <div class="character-img mw-100">
                    <img src="./img/${e.character_img_2}" />
                </div>
                <div class="character-info">
                    <h4>${e.name}</h4>
                    <h4>${e.price}</h4>
                </div>
            </div>
            `
    characterSection.innerHTML = html
    let a = characterSection.children[0]
    // console.log(a)
    // console.log(characterSection.children[0])
})

let b = characterSection.children
let c = document.querySelectorAll(".character-card")
// console.log(c)
/*
for(let i=0; i < c.length; i++) {
    c[i].addEventListener("mouseover", () => {
        
        console.log(c[i].children[0].children[0].style.backgroundImage)
        console.log(characters[i].character_img_1)
        c[i].children[0].children[0].style.backgroundImage = `url(./img/${characters[i].character_img_2})`
        c[i].children[0].children[0].style.backgroundColor = `${characters[i].color}`
        c[i].children[0].children[0].classList.toggle("hidden");
    })
}

for(let i=0; i < c.length; i++) {
    c[i].addEventListener("mouseout", () => {
        c[i].children[0].children[0].classList.toggle("hidden");
        c[i].children[0].children[0].style.backgroundImage = `url(./img/${characters[i].character_img_1})`
        c[i].children[0].children[0].style.backgroundColor = ''
        c[i].children[0].children[0].style.transition = "ease-out 1.5s"
    })
}

*/
