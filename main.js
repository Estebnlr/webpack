(()=>{const e=document.getElementById("links"),t=document.querySelector("h1"),n={name:"Manuel Lucero",nickname:"@manuelr",description:"...",avatar:"...",social:[{name:"platzi",url:"https://platzi.com/",username:""},{name:"youtube",url:"https://www.youtube.com/",username:""},{name:"github",url:"https://github.com/",username:""},{name:"instagram",url:"https://instagram.com/",username:""},{name:"twitter",url:"https://twitter.com/",username:""},{name:"linkedin",url:"https://www.linkedin.com/",username:""},{name:"twitch",url:"https://twitch.tv/",username:""},{name:"discord",url:"https://discord.gg/",username:""}],links:[{name:"mentorías",url:"https://example.com/",color:"fuchsia",emoji:"💻"},{name:"blog",url:"https://example.com/",color:"red",emoji:"📖"},{name:"podcast",url:"https://example.com/",color:"yellow",emoji:"💬"},{name:"cursos",url:"https://example.com/",color:"lime",emoji:"🎒"},{name:"sponsors",url:"https://example.com/",color:"rose",emoji:"🚀"}],footer:"Made with Love on Perú"};(()=>{let o=document.createTextNode(n.name),m=n.links.map((e=>`\n      <div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n        <a\n          class="text-sm font-bold text-${e.color}-600 text-center hover:text-${e.color}-800 cursor-pointer"\n          href=${e.url}\n          target="_blank"\n        >\n          ${e.name}\n        </a>\n        <span>${e.emoji}</span>\n      </div>`)).join(""),a=document.createElement("section");a.innerHTML=m,e.appendChild(a),t.appendChild(o)})()})();