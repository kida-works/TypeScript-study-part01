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

  // 合併型（union）と交差型（intersection）
  // ・合併型：型Aか型Bどちらかの方を持つ
  // ・交差型：型Aと型B両方の方を持つ
  // ※交差型は「AとBに共通する型」ではない！

  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };
  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  // 合併型（union）...KnightまたはWizardの型を持つますよ
  type Adventurer = Knight | Wizard;

  // 交差型（intersection）...KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard;

  // Knightよりの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
  };

  // Wizardよりの冒険者
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  };

  console.log('Object alias sample03:', adventurer1);
  console.log('Object alias sample04:', adventurer2);

  const paladin: Paladin = {
    hp: 100,
    sp: 100,
    mp: 100,
    weapon: '銀の杖',
    magicSkill: 'ファイアボール',
    swordSkill: '三連斬り',
  };
  console.log('Object alias sample05:', paladin);

  // 合併型は二つの型をAかBどちらかの型を持つことが出来るというものだが、両方の型を持つこともできる。
  //交差型は二つの型をAとBどちらの型も持つことができる。何か抜けているとエラーになる。
}
