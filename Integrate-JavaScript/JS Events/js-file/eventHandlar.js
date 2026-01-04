// 📌 Example 1
document.getElementById('update-title')
        .addEventListener('click',function (){
            const pageTitle  =document.getElementById('page-title')
            pageTitle.innerText = 'Iam Changing This Title'
        })

// 📌 Example 2
document.getElementById('login-btn')
        .addEventListener('click',function(){
            const loginInfo =document.getElementById('user-info');
            loginInfo.innerText = 'Login successfull'
        })