import { proxy } from "valtio";

const storeVariables = proxy({
  globalWeather: {},
  // globalWardrobe: {},
});

export { storeVariables };
