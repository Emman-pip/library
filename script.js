class Library {
  constructor (title,pages,author,status) {
    this.title=title;
    this.pages=pages;
    this.author=author;
    this.status=status;
  }

  addButtons(){
      document.querySelector('.new').addEventListener('click',()=>{
        const main = document.querySelector('main');
        main.setAttribute('style', 'display:block')
      })
      
      document.querySelector('#new').addEventListener('click',()=>{
        const main = document.querySelector('main');
        main.setAttribute('style', 'display:none')
      })
  }

  display(book, book2){
    document.querySelector('#table').innerHTML = '';
    for (let i=0; i<book.length; i++){
      const element = document.createElement('div');
      const td1 = document.createElement('div');
      const td2 = document.createElement('div');
      const td3 = document.createElement('div');
      const td4 = document.createElement('button');
      
      td1.textContent = 'title: '+ book[i].title;
      td2.textContent = 'pages: '+ book[i].pages;
      td3.textContent = 'author: '+ book[i].author;
      td4.textContent = 'status: ' + book[i].status;

      document.querySelector('#table').appendChild(element)
      element.appendChild(td1);
      element.appendChild(td2);
      element.appendChild(td3);
      element.appendChild(td4);

      const remove = document.createElement('button');
      remove.textContent = 'remove';
      element.appendChild(remove);
      table.appendChild(element);

      remove.addEventListener('click', ()=>{
        table.removeChild(element);
        let num = book.indexOf(book2[i])
        book.splice(num,1)
    })
    }
  }

  event(){
    const books = [];
    const books2 = [];
    this.addButtons()
    document.querySelector('button').addEventListener('click', (e)=>{
      e.preventDefault();
      const book1 = new Library(document.querySelector('#title').value,document.querySelector('#pages').value,document.querySelector('#author').value,document.querySelector('#status').value);
      books.push(book1);
      books2.push(book1);
      this.display(books, books2)
    })
  }



}

Library.prototype.event()


