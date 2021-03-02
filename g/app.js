let wrapper = document.getElementById("wrapper");

fetch("/g/jason.json")
	.then((res) => res.json())
	.then((jason) => {
        Object.keys(jason).forEach((key) => {
            let obj = jason[key];

			let block = document.createElement("div");
			let img = document.createElement("img");
			let title = document.createElement("h2");
			let subtitle = document.createElement("h3");
			let text = document.createElement("p");

			img.src = obj.url;
			title.innerHTML = obj.name;
			subtitle.innerHTML = obj.capital;
			text.innerHTML = obj.content;

			block.classList.add("block");
			img.classList.add("block__img");
			title.classList.add("block__title");
			subtitle.classList.add("block__subtitle");
			text.classList.add("block__text");

			block.append(img);
			block.append(title);
			block.append(subtitle);
			block.append(text);
            wrapper.append(block);
		});
	});