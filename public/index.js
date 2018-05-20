{
  const images = new Array(8).fill().map(
    (_, i) =>
      new Promise(resolve => {
        const image = new Image();
        image.src = `./public/lit${i}.svg`;
        image.onload = () => resolve(image);
      })
  );

  Promise.all(images).then(images => {
    const img = document.getElementsByTagName('img')[0];
    let counter = images.length - 1;

    setInterval(() => {
      counter = counter - 1 || images.length - 1;
      img.src = images[counter].src;
    }, 100);
  });
}
