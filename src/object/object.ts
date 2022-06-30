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

  // オブジェクトの柔軟な型定義
  // インデックスシグネチャ
  // ・オブジェクトが複数のプロパティを持つ可能性がある
  // ・[key: T]: Uのように定義する。
  // ・keyはstringかnumberのみ

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };

  capitals.China = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('Object object Sample 4:', capitals);
}
