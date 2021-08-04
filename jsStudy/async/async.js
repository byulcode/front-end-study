// async & await
// clear style of using promise

//1. async
async function fetchUser() {//자동으로 promise로 바뀜
        // do network request in 10 secs...
        return 'byul';
}

const user = fetchUser()
user.then(console.log);
console.log(user);

// 2. await     : async가 붙은 함수에서만 사용 가능
function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
        await delay(2000);
        return '사과';
}

async function  getBanana() {
        await delay(1000);
        return '바나나';
}

async function pickFruits(){
        const applePromise = getApple();
        const bananaPromise = getBanana();
        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// use/ful Promise APIs  => 가장 간단
function pickAllFruits() {
        return Promise.all([getApple(), getBanana()]).then(fruits =>
                fruits.join(' + ')
                );
}
pickAllFruits().then(console.log); //2번 출력됨

function pickOnlyOne() {
        return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);