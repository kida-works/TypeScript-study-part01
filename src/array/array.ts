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


  // イミュータブルな配列
  // JavaScriptのconstで宣言してもミュータブル（書き換え可能）
  // readonlyでイミュータブル（書き換え不可）な配列/タプルを作れる

  // イミュータブルな配列を作る
  const commands: readonly string[] = ["git add", "git commit", "git push"]
  // commands.push("git fetch")
  // readonlyを使うとpushメソッドが使えなくなるため上記はエラーになる
  // commands[2] = "git pull";
  // readonlyは書き換えも不可なため上記もエラーになる

  console.log('Array array sample 5:', commands);


}
