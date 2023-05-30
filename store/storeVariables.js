import { proxy } from "valtio";

const storeVariables = proxy({
  globalWeather: {},
});

export { storeVariables };
