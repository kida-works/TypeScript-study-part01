// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  let answer:boolean;
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Username is', username);
    answer = true
  }else{
    console.log('Function parameters sample 2: User is not signed in.');
    answer = false
  }
  return answer;
};

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, username: string="NO NAME"): boolean => {
  let answer:boolean;
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is signed in! Username is', username);
    answer = true
  }else{
    console.log('Function parameters sample 4: User is not signed in.');
    answer = false
  }
  return answer;
};

