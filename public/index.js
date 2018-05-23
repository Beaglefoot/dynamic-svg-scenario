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

{
  const svg = SVG.get('img');
  const polygons = svg.select('polygon');

  const initialColors = [];
  polygons.each(function() {
    initialColors.push(new SVG.Color(this.attr('fill')).toHex());
  });

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const recolor = () =>
    polygons.each(function(i) {
      const modifiedColor = chroma(initialColors[i])
        .darken(getRandom(0, 0.3))
        .brighten(getRandom(0, 0.3))
        .hex();

      this.attr('fill', modifiedColor);
    });

  // recolor();
  setInterval(recolor, 100);
}
