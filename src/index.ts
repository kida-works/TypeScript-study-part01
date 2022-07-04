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
import {
  isUserSignedIn,
  isUserSignedIn2,
  sumProductsPrice,
} from './function/parameters';
logMessage('Hello TypeScript!');
isUserSignedIn('ABC', 'Torahack');
isUserSignedIn('DEF');
isUserSignedIn2('ABC');
const sum = sumProductsPrice(100, 200, 300, 400);
console.log('Function parameters sample 4:', sum);

// 05.オブジェクトの型定義
import objectSample from './object/object';
import typeAliasSample from './object/alias';
objectSample();
typeAliasSample();

// 06.配列とタプルの型定義
import arraySample from './array/array';
import tupleSample from './array/tuple';
arraySample();
tupleSample();
