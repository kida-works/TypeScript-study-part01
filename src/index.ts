// import World from './world';

// const root = document.getElementById('root');
// const world = new World('Hello World Torahack!');

// world.sayHello(root);

// 03.基本の型定義
import {
  primitiveSample,
  notExistSanple,
  anySanple,
  unknownSanple,
} from './basic';

primitiveSample();
notExistSanple();
anySanple();
unknownSanple();

// 04.関数の方定義
import { logMessage } from './function/basic';
logMessage("Hello TypeScript!")
