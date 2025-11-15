const employees = [
  {
    id: 1,
    name: "Aryan Khan",
    img: "https://i.pinimg.com/1200x/21/be/10/21be10df58569bdd5598207d9c1a4543.jpg",
    desc: "Frontend developer with strong JavaScript skills."
  },
  {
    id: 2,
    name: "Rohan Patel",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    desc: "Backend developer who loves working with PHP and MySQL."
  },
  {
    id: 3,
    name: "Ayesha Khan",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    desc: "HR executive passionate about people management."
  },
  {
    id: 4,
    name: "Siddharth Mehta",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    desc: "Team lead who guides projects and solves complex problems."
  },
  {
    id: 5,
    name: "Priya Desai",
    img: "https://randomuser.me/api/portraits/women/18.jpg",
    desc: "Creative UI/UX designer focused on smooth user experience."
  },
  {
    id: 6,
    name: "Arjun Singh",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    desc: "QA tester ensuring the product meets high-quality standards."
  }
];

let empData = [...employees];

let main = document.querySelector('.main')

function showData(){

     main.innerHTML="";

empData.forEach(ele => {
    
    let searchContainer = document.createElement('div')
    searchContainer.classList.add('search-container')
        let contain = document.createElement('div')
        contain.classList.add('contain')
        let containimg = document.createElement('div')
        containimg.classList.add('contain-image')

        let desc = document.createElement('div')
        desc.classList.add('desc')

        let img = document.createElement('img')


        let heading = document.createElement('h4')

        let para = document.createElement('p')



        desc.appendChild(heading)
        desc.appendChild(para)

        containimg.appendChild(img)
        contain.appendChild(containimg)
        contain.appendChild(desc)
        searchContainer.appendChild(contain)

        main.appendChild(searchContainer)

        para.textContent=`${ele.desc}`
        heading.textContent=`${ele.name}`
        img.src=`${ele.img}`
});

}

showData()

let inp = document.querySelector('#inp')
inp.addEventListener('input',function(e){

    let v = e.target.value.toLowerCase()
    
    empData = employees.filter(emp=>{
            return emp.name.toLowerCase().startsWith(v)
    })

    if(empData.length>0){
                showData()

    }else{
        main.innerHTML=`<div class="no-data">No Data Found</div>`

    }
    
})
