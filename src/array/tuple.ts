export default function tupleSample() {
  // 厳密な配列 = タプル
  // ・タプルは配列の各要素の数と型を定義できる
  // ・配列の何番目に型何が入るかを定義できる
  // ・可変長（エストパラメータ）も使える

  // 一般的なタプルの型定義
  let respone: [number, string] = [200, 'OK'];
  // respone = [400, "Bad Request", "Email parameter is mssing"];
  // 上記の場合だと、型定義した時の配列の数が等しくないのでエラーが出る

  // respone = ['400', 'Bad Request'];
  // 上記の始めの型定義時に一つ目はnumber型と定義しているのでエラーになる

  console.log('Array tuple sample01:', respone);

  // 可変長引数を使ったタプル
  const girlfreiends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko'];
  girlfreiends.push('Misa');
  console.log('Array tuple sample02:', girlfreiends);
}
