{
  const images = new Array(8).fill().map((_, i) => `./lit${i}.svg`);

  console.log(images);

  const img = document.getElementsByTagName('img')[0];
  let counter = images.length - 1;

  setInterval(() => {
    counter = counter - 1 || images.length - 1;
    img.src = images[counter];
  }, 100);
}
