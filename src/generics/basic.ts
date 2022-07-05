export default function genericsBasicSample() {
  // 型を抽象化するジェネリック型
  // ジェネリックパラメータ
  // 型をパラメーター化（後から実パラメータを渡す。関数の引数みたいに方パラメータをジェネリック型を使う時に渡す）
  // T,U,V,Wがよく使われる

  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initiaValue: string): string => {
    let result = initiaValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log(
    'Generics basic sample 1:',
    stringReduce(['May', 'the', 'force', 'be', 'with', 'you'], '')
  );

  const numberReduce = (array: number[], initiaValue: number): number => {
    let result = initiaValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log('Generics basic sample 1:', numberReduce([100, 200, 300], 1000));

  // ジェネリック型を使うと
  type GenericsReduce<T> = {
    (array: T[], initiaValue: T): T;
  };

  const genericsStringReduce: GenericsReduce<string> = (array, initiaValue) => {
    let result = initiaValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log(
    'Generics basic sample 3:',
    genericsStringReduce(['MAKE ', 'TYPESCRIPT ', 'GREAT ', 'AGAIN'], '')
  );

  const genericsNumberReduce: GenericsReduce<number> = (array, initiaValue) => {
    let result = initiaValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };

  console.log(
    'Generics basic sample 3:',
    genericsNumberReduce([250, 100, 420], 100)
  );


  // ジェネリックの宣言方法
  // 「呼ぶだしシグネチャの記法」と「ジェネリック型の割り当て範囲」によって異なる

  // いろいろなジェネリック型の定義法
  // 完全な呼び出しシグネチャ（ここのシグネチャにジェネリック型を割り当てる）
  type GenericReduce2 = {
    <T>(array: T[], initiaValue: T): T
    <U>(array: U[], initiaValue: U): U
  }

  // 呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initiaValue: T)=> T
  type GenericReduce4<T> = (array: T[], initiaValue: T)=> T
}
