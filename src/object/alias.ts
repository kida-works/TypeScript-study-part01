export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const japan: Country = {
    capital: 'Tokyo',
    language: 'japanese',
    name: 'japan',
  };
  console.log('Object alias sample01:', japan);

  const america: Country = {
    capital: 'Washington, D.C',
    language: 'English',
    name: 'United States of America',
  };

  console.log('Object alias sample02:', america);
}
