let myLibrary = [];
newLibrary = [...myLibrary];

const table = document.getElementById('table')
const button = document.querySelector('button');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const author = document.querySelector('#author');
const status = document.querySelector('#status');

const add = document.querySelector('.new');
const main = document.querySelector('main');

function Book(title,pages,author,status) {
  this.title=title;
  this.pages=pages;
  this.author=author;
  this.status=status;
}

function clear(table){
  table.innerHTML='';
}

function addBookToLibrary(book) {
  
  for(let i=0;i<myLibrary.length;i++){
    const tr = document.createElement('div');
    tr.setAttribute('style', 'box-shadow:3px 3px 10px; padding:1rem;border-radius:1rem;')
    const td1 = document.createElement('div');
    const td2 = document.createElement('div');
    const td3 = document.createElement('div');
    const td4 = document.createElement('button');
    
    td1.textContent = 'title: '+ book[i].title;
    td2.textContent = 'pages: '+ book[i].pages;
    td3.textContent = 'author: '+ book[i].author;
    td4.textContent = 'status: ' + book[i].status;

    td4.addEventListener('click', ()=>{
      if (td4.textContent='status: read'){
        td4.textContent=='status: not read';
        book[i].status='read';
      } 
    })

    td4.addEventListener('dblclick', ()=>{
      if (td4.textContent='status: not read'){
        td4.textContent=='status: read';
        book[i].status='not read'
      } 
    })

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    const remove = document.createElement('button');
    remove.textContent = 'remove';
    tr.appendChild(remove);
    table.appendChild(tr);

 
    
    remove.addEventListener('click', ()=>{
      table.removeChild(tr);
      let num = myLibrary.indexOf(newLibrary[i])
      myLibrary.splice(num,1)
    })
}}

button.addEventListener('click', (ev)=>{
  ev.preventDefault();
  const book = new Book(title.value,pages.value,author.value,status.value);
  myLibrary.push(book);
  addBookToLibrary(myLibrary); 
  title.value = '';
  pages.value = '';
  author.value = '';
  main.classList.toggle("display")
})

button.addEventListener('mousedown', (ev)=>{
  ev.preventDefault();
  clear(table);
})

const light = document.getElementById('light');
const root = document.querySelector('html');

light.addEventListener('click', ()=>{
  root.classList.toggle("light");
})

add.addEventListener('click', ()=>{
  main.classList.toggle("display")
})
