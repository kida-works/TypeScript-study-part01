// アロー関数
export const logMessage = (message: string): void => {
  console.log('Function basic sample 1:', message);
};

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('Function basic sample 2:', message);
}

//関数式
export const logMessage3 = function (message: string): void {
  console.log('Function basic sample 3:', message);
};

// アロー関数省略記法
// ・void:return文を持たない関数の戻り値
export const logMessage4 = (message: string): void =>
  console.log('Function basic sample 4:', message);

// ・never:決して戻る事のない関数の戻り値
export const alwaysThrowError = (message: string): never => {
  throw new Error(message);
};

// 呼び出しシグネチャ
// シグネチャ → 関数名と引数の数、データ型、戻り値の型を組み合わせたもの
// ・どんな関数なのかを表現する型定義
//　　・省略記法はアロー関数と似た形
// ・完全な記法はオブジェクトに似た形

// 呼び出しシグネチャ（省略記法）
type LogMessage = (message: string) => void;
export const logMessage6: LogMessage = (message) => {
  console.log('Function basic sample 6:', message);
};

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void;
};
export const logMessage7: LogMessage = (message) => {
  console.log('Function basic sample 7:', message);
};
