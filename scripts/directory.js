const dirContents = {
	students: [
		{
			name: "Kathy H.",
			desc: "<i>Thirty-one year old carer.</i>",
			imageSrc: "./assets/dir/kathy.jpg"
		},
		{
			name: "Tommy D.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/tommy.jpg	"
		},
		{
			name: "Marge K.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Christopher C.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Annette B.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Amanda",
			desc: "<i>No instance of surname found in records.</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Arthur",
			desc: "<i>No instance of surname found in records.</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Harry C.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Ruth M.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/ruth.jpg"
		},
		{
			name: "Laura",
			desc: "<i>No instance of surname found in records.</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "David",
			desc: "<i>No instance of surname found in records.</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "George",
			desc: "<i>No instance of surname found in records.</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Alice",
			desc: "<i>No instance of surname found in records.</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Hannah",
			desc: "<i>No instance of surname found in records.</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Cynthia E.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Michael H.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Martha H.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Sharon D.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
	],
	staff: [
		{
			name: "Miss Emily",
			desc: "Headmaster and Founder",
			imageSrc: "./assets/dir/miss_emily.jpg"
		},
		{
			name: "Miss Lucy",
			desc: "Former Guardian. Always more theoretically idealistic, wanted the best for our students. We thank her for her service and wish her the best.",
			imageSrc: "./assets/dir/miss_lucy.jpeg"
		},
		{
			name: "Miss Geraldine",
			desc: "Guardian. A kind and caring teacher of art and creativity. An inspiration to us all.", 
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Mr. Chris",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.jpg"
		},
		{
			name: "Miss Marie-Claude",
			desc: "Collector of The Gallery",
			imageSrc: "./assets/dir/madame.jpg"
		}
	]
}

function DirectoryCard(name, desc, imageSrc) {
  return `
		<div class="directory-card">
			<img src="${imageSrc}" alt=${name} class="directory-card-img">
			<h2 class="directory-card-name">${name}</h2>
			<p class="directory-card-desc">${desc}</p>
		</div>
  `;
}

const studentCardsContainer = document.getElementById("dir-cards-container-students");
const staffCardsContainer = document.getElementById("dir-cards-container-staff");

const {students, staff} = dirContents

/**
 * Shuffles array in place and returns it.
 * @param {Array<any>} array array to shuffle
 * @returns {Array<any>} shuffled array
 */
function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
  
	// While there remain elements to shuffle.
	while (currentIndex > 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
}

shuffle(students).forEach((info) => {
	studentCardsContainer.insertAdjacentHTML('beforeend', DirectoryCard(info.name, info.desc, info.imageSrc))
})
staff.forEach((info) => staffCardsContainer.insertAdjacentHTML('beforeend', DirectoryCard(info.name, info.desc, info.imageSrc)))