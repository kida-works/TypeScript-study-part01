export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue'];
  colors.push('yellow');
  // colors.push(123)
  console.log('Array array sample 1:', colors);

  const even: Array<number> = [2, 4, 6];
  even.push(8);
  // even.push('10');
  console.log('Array array sample 2:', even);

  // 合併型
  const ids: (string | number)[] = ['ABD', 123];
  ids.push('DEF');
  ids.push(456);
  // ids.push(true);
  console.log('Array array sample 3:', ids);

  // 配列の型推論
  const generateSameArray = () => {
    const _sameArray = []; //any[]
    _sameArray.push(123); //number[]
    _sameArray.push('ABC'); //(string | number)[]
    return _sameArray;
  };

  const sameArray = generateSameArray()
  sameArray.push(456)
  // sameArray.push(true)
  console.log('Array array sample 4:', sameArray);

}
