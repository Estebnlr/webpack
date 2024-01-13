const $links = document.getElementById('links');
const $socials = document.getElementById('socials');
const $name = document.querySelector('h1');
const $nick= document.getElementById('nick');
const $description= document.getElementById('description');
const $reseña= document.getElementById('reseña');
const $imagenContainer= document.getElementById('imagen-container');
const $footer= document.getElementById('footer');

const data = {
  name: "Manuel Lucero",
  nick: "@manuelr",
  description: "Desarrollador Front-end, creando mi primera página web en el 2024, Actualmente Freelance, aprendiendo en Platzi - #JavaScript #React #Web3 #WithAstro PE",
  imagenSrc: "https://avatars.githubusercontent.com/u/99986563?v=4",
  reseña:"Con un fuerte compromiso en el crecimiento y desarrollo de la comunidad educativa en línea, estoy dedicado a compartir mi conocimiento y habilidades para impulsar un cambio positivo en la vida de aquellos que deseen aprender y crecer en el ámbito tecnológico y digital.",
  socials: [
    {
      name: "twitter",
      url: "https://twitter.com/",
      color:"text-blue-300",
      view: `viewBox="0 0 24 24"`,
      path: ` d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" `,
    },
    {
      name: "instagram",
      url: "https://instagram.com/",
      color:"text-[#E4405F]",
      view: `viewBox="0 0 24 24"`,
      path: `d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" `,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      color:"text-[#FF0000]",
      view: `viewBox="0 0 24 24"`,
      path: ` d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" `,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com",
      color:"text-blue-500 ",
      view: `viewBox="0 0 448 512"`,
      path: `d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" `,
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/",
      color:"text-[#9146FF] ",
      view: `viewBox="0 0 24 24"`,
      path: `d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" `,
    },
  ],
  links: [
    {
      name: "My website",
      url: "https://estebnlr.github.io/manuel-lucero/portafolioCV/index.html",
      color: "blue",
      emoji: "🌎",
    },
    {
      name: "GitHub Projects",
      url: "https://github.com/Estebnlr",
      color: "green",
      emoji: "🤓",
    },
    {
      name: "manuelr.dev",
      url: "https://estebnlr.github.io/manuel-lucero/portafolioCV/index.html",
      color: "red",
      emoji: "📖",
    },
    {
      name: "Podcast",
      url: "https://estebnlr.github.io/manuel-lucero/portafolioCV/index.html",
      color: "yellow",
      emoji: "💬",
    },
    {
      name: "Contacto",
      url: "https://estebnlr.github.io/manuel-lucero/portafolioCV/index.html",
      color: "orange",
      emoji: "📞",
    },
    {
      name: "Sobre mi",
      url: "https://estebnlr.github.io/manuel-lucero/portafolioCV/index.html",
      color: "purple",
      emoji: "🧑",
    },
   
  ],
  footer: "Copyleft © 2023 🚀 Per Aspera Ad Astra",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let nick= document.createTextNode(data?.nick);
  let reseña= document.createTextNode(data?.reseña);
  let description= document.createTextNode(data?.description);
  let footer= document.createTextNode(data?.footer);
  let links = data?.links?.map((link) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.ulr}" target="_blank">
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>`;
  }).join('');
  let newItem = document.createElement("section");
 
  let socials = data?.socials?.map((socials) => {
    return `<a href=${socials.url} target="_blank">
    <svg class="w-6 h-6 cursor-pointer text-gray-400 hover:${socials.color} fill-current" xmlns="http://www.w3.org/2000/svg" ${socials.view}>
      <title>${socials.name}</title>
      <path ${socials.path} />
    </svg>
  </a>`;
  }).join('');
 

  $name.appendChild(name);
  $nick.appendChild(nick);
  $description.appendChild(description);
  $reseña.appendChild(reseña);
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $socials.innerHTML = socials;
  $footer.appendChild(footer);

  const imagen = document.createElement('img');
  imagen.src = data?.imagenSrc;
  imagen.alt = "Manuel Lucero Roque";
  
  // Agregar la imagen al contenedor
  $imagenContainer.appendChild(imagen);
};


main();