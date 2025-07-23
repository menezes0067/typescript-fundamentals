// create interface
interface Rectangle {
  height: number,
  width: number
}

// extends interface in other interface
interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
