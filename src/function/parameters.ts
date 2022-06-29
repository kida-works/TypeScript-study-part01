// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  let answer: boolean;
  if (userId === 'ABC') {
    console.log(
      'Function parameters sample 1: User is signed in! Username is',
      username
    );
    answer = true;
  } else {
    console.log('Function parameters sample 2: User is not signed in.');
    answer = false;
  }
  return answer;
};

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (
  userId: string,
  username: string = 'NO NAME'
): boolean => {
  let answer: boolean;
  if (userId === 'ABC') {
    console.log(
      'Function parameters sample 3: User is signed in! Username is',
      username
    );
    answer = true;
  } else {
    console.log('Function parameters sample 4: User is not signed in.');
    answer = false;
  }
  return answer;
};

// 可変長引数に型をつける
// 可変長引数とは？
// ・関数呼び出しの際に引数をいくつ渡してもOK！
// ・全く型安全ではない

// レストパラメータ
// ・パラメータに...を用いることで方定義ができる。
// ・パラメータの最後に最後に一つだけ指定できる。

//レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice;
  }, 0);
};
