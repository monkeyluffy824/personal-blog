function viewPoems(){
  window.open("poems.html", "_self");
}

function viewHome(){
	window.open("index.html", "_self");
}

function viewStories(){
	window.open("stories.html", "_self");
}

function navigateAboutMe(){
	window.open("https://panangipalli-sai-charan.onrender.com", "_blank");
}

function viewlatestPoem(event){
	poemName=event.target.dataset.id;
	window.open(`poems.html?poem=${poemName}`, "_self");
}

function viewLatestStory(event){
	storyName=event.target.dataset.id;
	window.open(`stories.html?story=${storyName}`, "_self");
}