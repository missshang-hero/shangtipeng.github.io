
export default function toBase64(url) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = url;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    //const body = document.querySelector('body');
    context.drawImage(img,0, 0, canvas.width, canvas.height);
    console.log(canvas.toDataURL("image/png"));
    return canvas.toDataURL("image/png");

  };
 return img.onload();
}
