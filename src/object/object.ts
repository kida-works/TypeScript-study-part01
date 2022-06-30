// オブジェクトの型定義
export default function objectSample() {
  const a: object = {
    name: 'Torahack',
    age: 28,
  };
  // a.name;

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };

  console.log('Object object Sample 1:', country);

  country = {
    language: 'English',
    name: 'United States of America',
  };
  console.log('Object object Sample 2:', country);
}

// 特別なプロパティを扱う
// ・オプショナル（？）のついたプロパティはあってもなくてもOK
// ・readonlyのついたプロパティは上書きできない

// オプショナルとreadonly
const torahack: {
  age: number;
  lastName: string;
  readonly firstName: string;
  gender?: string;
} = {
  age: 28,
  lastName: 'Yamada',
  firstName: 'Tarou',
};

torahack.gender = 'male';
torahack.lastName = 'kamado';
// torahack.firstName = 'Tanjiro';

console.log('Object object Sample 3:', torahack);
