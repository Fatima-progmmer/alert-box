let hello=document.querySelector('button')
hello.addEventListener("click",my());

function my()
        {
            alert("Don't be opened");
            let name=prompt();
            hello.textContent=("text",name);
        }