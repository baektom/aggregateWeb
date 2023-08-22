const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    console.log(value)

    list.forEach(i =>{
        const isVisible = i.question.toLowerCase().includes(value)
        i.element.classList.toggle("hide", !isVisible)
    })

})

console.log(userCardContainer)

for(let i=0; i< list.length; i++){
    const card = userCardTemplate.content.cloneNode(true).children[0]
    const header= card.querySelector("[data-header]")
    const body= card.querySelector("[data-body]")
    const idx= card.querySelector("[data-id]")

    header.textContent = list[i].question
    body.textContent = list[i].answer
    idx.textContent = list[i].id
    userCardContainer.append(card)
    list[i] = {id:i+1,idx:idx ,question: list[i].question, answer:list[i].answer,element: card}
}
