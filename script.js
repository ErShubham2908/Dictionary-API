let btn = document.getElementById('search');
let words = document.getElementById('get_word');
let phonetic = document.getElementById('phonetic');
let audio = document.getElementById('audio');
let item_partOfSpeech = document.getElementById('item_partOfSpeech');
let flag = true;

btn.addEventListener('click', () => {
	let displayErr = document.getElementById('display');
	let input = document.getElementById('word').value;
	input = input.toLowerCase();
	console.log(input)
	let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`

	fetch(url)
	.then((d) => d.json())
	.then((item) => {
		item.map((data) => {
			words.innerText =  `${data.word}`;
			if(data.phonetic === undefined){
					phonetic.style.display = 'none';
				}
				else{
				phonetic.innerText = data.phonetic;
			}
			item_partOfSpeech.innerText = data.meanings[0].partOfSpeech;
			item_definition.innerText = data.meanings[0].definitions[0].definition;
		})
	})
	.catch((err) => {
		displayErr.innerText = "it's wrong word."
	});

})
