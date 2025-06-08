const stories=[
	{ title: "Judgement Day", file: "stories/Judgement Day.docx" },
]


const listContainer = document.getElementById("story-list");
const viewer = document.getElementById("story-viewer");

stories.forEach(poem=>{
	const btn= document.createElement("sl-button");
	btn.variant="text";
	btn.classList.add('btn-cls');
	btn.textContent=poem.title;
	btn.onclick=() => loadDocx(poem.title, poem.file);
	listContainer.appendChild(btn);
})

const params = new URLSearchParams(window.location.search);
const storyName = params.get("story");

if(storyName){
	actualStoryName=storyName.replaceAll('%20',' ').trim();
	storyFilePath=stories.find(({title})=>{
		return title.toLowerCase()===actualStoryName.toLowerCase();
	}).file;
	loadDocx(actualStoryName,storyFilePath);
}

function loadDocx(fileTitle,filePath){
	viewer.innerHTML='<sl-spinner style="font-size: 3rem; justify-self:center;"></sl-spinner>';
	fetch(filePath).then(res=>res.arrayBuffer()).then(arrayBuffer=>mammoth.convertToHtml({ arrayBuffer })).then(result => {
      viewer.innerHTML = `<div class="stor-body">${result.value}</div>`;
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

function viewLatestStory(){
	window.open("poems.html", "_self");
}