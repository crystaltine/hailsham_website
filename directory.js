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
			name: "Harry C.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/harry.png"
		},
		{
			name: "Ruth M.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/kathy.png"
		},
		{
			name: "Sharon D.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.png"
		},
		{
			name: "Cynthia E.",
			desc: "<i>No biography provided</i>",
			imageSrc: "./assets/dir/unknown.png"
		}
	],
	staff: [
			{
					name: "Miss Emily",
					desc: "Headmaster and Founder",
					imageSrc: "./assets/dir/unknown.png"
			},
			{
					name: "Miss Lucy",
					desc: "Former Guardian. Always more theoretically idealistic, wanted the best for our students. We thank her for her service and wish her the best.",
					imageSrc: "./assets/dir/unknown.png"
			},
			{
					name: "Miss Marie-Claude",
					desc: "Collector of The Gallery",
					imageSrc: "./assets/dir/unknown.png"
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

console.log(JSON.stringify(dirContents))

students.forEach((info) => {
	studentCardsContainer.insertAdjacentHTML('beforeend', DirectoryCard(info.name, info.desc, info.imageSrc))
})
staff.forEach((info) => staffCardsContainer.insertAdjacentHTML('beforeend', DirectoryCard(info.name, info.desc, info.imageSrc)))