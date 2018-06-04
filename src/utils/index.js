export const translate = (x, y) => `translate(${x}, ${y})`;

export const generateData = () => {
  let data = [];
  for(let i = 0; i < 10;  i++) {
    data.push(Math.ceil(Math.random() * 20));
  }
  return data;
}
