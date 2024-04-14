document.getElementById("add-button").addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let note = document.getElementById("note").value;
    let color = document.getElementById("color-input").value;
    console.log(title);
    console.log(note);
    console.log(color);
    let product = document.getElementById("product");
    let div = document.createElement("div");

    if (title.trim() === "" || note.trim() === "") {
      alert("Please fill both title and note fields");
      console.log("error");
    } else {
      div.innerHTML = `
        <div class="outerDiv">
            <h1>${title}</h1>
            <div class="div1" style="background-color: ${color};">
            <p class="para">${note}</p>
            <div class="innerdiv">
                <div id="close-btn">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </div>
                <div>
                    <span class="material-symbols-outlined">
                        drag_pan
                    </span>    
                </div>
                <div id="edit-btn">
                    <span class="material-symbols-outlined">
                        edit
                    </span> 
                </div>
            </div>    
        </div>
        </div>
    `;
      product.appendChild(div);
      document.getElementById("title").value = "";
      document.getElementById("note").value = "";
      CloseButton();
      EditButton();
    }
  });

  // document.getElementById("color-input").addEventListener("input", () => {
  //     let color = document.getElementById("color-input").value;
  //     let notes = document.querySelectorAll(".div1");
  //     notes.forEach(note => {
  //         note.style.backgroundColor = color;
  //     });
  // });

  function CloseButton() {
    let closeBtns = document.querySelectorAll("#close-btn");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.parentElement.parentElement.parentElement.style.display =
          "none";
      });
    });
  }

  function EditButton() {
    let editBtns = document.querySelectorAll("#edit-btn");
    editBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        let title = document.getElementById("title").value;
        console.log(title);
        let parentDiv = btn.parentElement.parentElement;
        let newText = parentDiv.querySelector(".para").innerText;

        parentDiv.innerHTML = `
                <div class="div1" contenteditable="true">
                    <h1>${title}</h1>
                    <p class="para">${newText}</p>
                    <div class="innerdiv">
                        <div id="close-btn">
                            <span class="material-symbols-outlined">
                                close
                            </span>
                        </div>
                        <div>
                            <span class="material-symbols-outlined">
                                drag_pan
                            </span>    
                        </div>
                        <div id="edit-btn">
                            <span class="material-symbols-outlined">
                                edit
                            </span> 
                        </div>
                    </div>    
                </div>
            `;
        CloseButton();
        EditButton();
      });
    });
  }