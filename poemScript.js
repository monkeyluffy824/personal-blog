const poems=[
	{ title: "One Step", file: "poems/One Step.docx" },
	{ title: "7 paintings", file: "poems/7 paintings.docx" },
	{ title: "A Place", file: "poems/A Place.docx" },
	{ title: "A Star", file: "poems/A star_.docx" },
	{ title: "Badal aur Bachha", file: "poems/Badal aur Bachha.docx" },
	{ title: "Chaand ki hasi", file: "poems/Chaand ki hasi_.docx" },
	{ title: "Cure For Fear", file: "poems/Cure For Fear.docx" },
	{ title: "Dhadkan", file: "poems/Dhadkan_.docx" },
	{ title: "Greatest sculptor", file: "poems/Greatest sculptor.docx" },
	{ title: "Gullak", file: "poems/Gullak_.docx" },
	{ title: "MUSIC", file: "poems/MUSIC.docx" },
	{ title: "Reth Aur Hawa", file: "poems/Reth Aur Hawa.docx" },
	{ title: "Secrets", file: "poems/Secrets.docx" },
	{ title: "Suffering", file: "poems/Suffering.docx" },
	{ title: "3 demons", file: "poems/3 demons.docx" },
	{ title: "A moment", file: "poems/A moment_.docx" },
	{ title: "Alisina chilaka", file: "poems/Alisina chilaka_.docx" },
	{ title: "Anmol", file: "poems/Anmol.docx" },
	{ title: "Flames", file: "poems/Flames.docx" },
	{ title: "Ink", file: "poems/Ink.docx" },
	{ title: "Inka Naam", file: "poems/Inka Naam.docx" },
	{ title: "Memories", file: "poems/Memories.docx" },
	{ title: "O lonely wanderer", file: "poems/O lonely wanderer.docx" },
	{ title: "Perseverance", file: "poems/Perseverance_.docx" },
	{ title: "Poem for Me", file: "poems/Poem for Me.docx" },
	{ title: "Son chidiya", file: "poems/Son chidiya_.docx" },
	{ title: "Song", file: "poems/song.docx" },
	{ title: "The Dead", file: "poems/The Dead.docx" },
	{ title: "With you", file: "poems/With you.docx" },
]


const listContainer = document.getElementById("poem-list");
const viewer = document.getElementById("poem-viewer");

poems.forEach(poem=>{
	const btn= document.createElement("sl-button");
	btn.variant="text";
	btn.classList.add('btn-cls');
	btn.textContent=poem.title;
	btn.onclick=() => loadDocx(poem.title, poem.file);
	listContainer.appendChild(btn);
})
const params = new URLSearchParams(window.location.search);
const poemName = params.get("poem");

if(poemName){
	actualPoemName=poemName.replaceAll('%20',' ').trim();
	poemFilePath=poems.find(({title})=>{
		return title.toLowerCase()===actualPoemName.toLowerCase();
	}).file;
	loadDocx(actualPoemName,poemFilePath);
}

function loadDocx(fileTitle,filePath){
	fetch(filePath).then(res=>res.arrayBuffer()).then(arrayBuffer=>mammoth.convertToHtml({ arrayBuffer })).then(result => {
	  const poemContent =document.createElement("p");
	  poemContent.classList.add("poem-body")
	  poemContent.textContent=result.value;
      viewer.appendChild(`<h2 class="primary-text">${fileTitle}</h2><br>${poemContent}`);
    })
    .catch(err => {
      viewer.innerHTML = `<p style="color:red;">Error loading story: ${err.message}</p>`;
    });
}


function viewPoems(){
  window.open("poems.html", "_self");
}

function viewHome(){
	window.open("index.html", "_self");
}

function viewStories(){
	window.open("stories.html", "_blank");
}

function navigateAboutMe(){
	window.open("https://panangipalli-sai-charan.onrender.com", "_blank");
}