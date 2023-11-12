let data=[
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
      question:"Which ocean lies on the east coast of the United States?",
      choice:["Eastern","Pacific","Indian","Atlantic"],
      answer:"Atlantic"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
      question:"Which is the world's highest mountain?",
      choice:["K2","Makalu","Mount Everest","Kilimanjaro"],
      answer:"Mount Everest"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
      question:"Which of these cities is not in Europe?",
      choice:["Prague","Moscow","Barcelona","Reykjavik"],
      answer:"Moscow"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
      question:"True or False: Iceland is covered in ice.",
      choice:[true,false],
      answer:false
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"The United Kingdom is comprised of how many countries?",
      choice:[1,2,3,4],
      answer:4
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"Which of the following countries do not border France?",
      choice:["Germany","Netherlands","Spain","Italy"],
      answer:"Netherlands"
    },
      { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
      question:"Which U.S. state is the Grand Canyon located in?",
      choice:["Wyoming","Arizona","New Mexico","Nevada"],
      answer:"Arizona"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
      question:"Which is the smallest country, measured by total land area?",
      choice:["Maldives","Monaco","Vatican"],
      answer:"Vatican"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
      question:"Which is the longest river in the world?",
      choice:["Amazon River","Congo River","Yellow River","Nile River"],
      answer:"Nile River"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
      question:"Which is the largest body of water?",
      choice:["Indian Ocean","Pacific Ocean","Atlantic Ocean","Nile-River"],
      answer:"Pacific Ocean"
    }
]

const content = document.getElementById('content')


    for(i=0;i<data.length;i++ ){
        if(i===3){
            content.innerHTML += `<img src="${data[i].url}" alt="">
            <h2>${data[i].question}</h2>
            <div><button>${data[i].choice[0]}</button>
            <button>${data[i].choice[1]}</button></div>`
        } else if (i===7){content.innerHTML += `<img src="${data[i].url}" alt="">
        <h2>${data[i].question}</h2>
        <div><button>${data[i].choice[0]}</button>
        <button>${data[i].choice[1]}</button>
        <button>${data[i].choice[2]}</button></div>`
        }else {content.innerHTML += `<img src="${data[i].url}" alt="">
        <h2>${data[i].question}</h2>
        <div><button>${data[i].choice[0]}</button>
        <button>${data[i].choice[1]}</button>
        <button>${data[i].choice[2]}</button>
        <button>${data[i].choice[3]}</button></div>`
        
        }
    } 

    const lastKid = content.lastElementChild
    console.log(lastKid);
const buttons = document.body.querySelectorAll('button')

const counterOutput = document.getElementById('output')
let counter = 0
buttons.forEach((elt)=>{
    elt.addEventListener("click", () =>{
        const target = event.target
        target.onclick = null
        console.log(target);
        for(let i=0; i<data.length; i++){
            if(elt.textContent === data[i].answer.toString()) {
            elt.style.backgroundColor = "green"
            console.log("green");
            counter++
            console.log(counter);
            const p = document.createElement('p')
                elt.parentElement.appendChild(p)
                elt.parentElement.lastElementChild.style.color = 'green'
                elt.parentElement.lastElementChild.innerHTML = "Your answer is correct!"

            // counterOutput.innerHTML = `You have answered ${counter} of ${data.length} questions correctly.`
            break;}
            if(elt.textContent !== data[i].answer) {
                elt.style.backgroundColor = "red"
                console.log("red");
                

                // counterOutput.innerHTML = `You have answered ${counter} of ${data.length} questions correctly.`
                
            }
        }
        if(elt.style.backgroundColor == "red"){
          const p = document.createElement('p')
            elt.parentElement.appendChild(p)
            elt.parentElement.lastElementChild.style.color = 'red'
            elt.parentElement.lastElementChild.innerHTML = "Your answer is wrong!"
            
        }
        for(let j=0;j < elt.parentElement.children.length; j++) {
          
            elt.parentElement.children[j].disabled = true
          }
          for(let t = 0; t < lastKid.children.length; t++){
            if(lastKid.children[t]=== target){
              counterOutput.innerHTML = `You have answered ${counter} of ${data.length} questions correctly.`
            }
          }
    })
})







