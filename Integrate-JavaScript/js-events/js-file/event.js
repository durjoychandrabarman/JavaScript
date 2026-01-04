document.getElementById('change-page-title')
        .addEventListener('click',function(){
            const pageTitle = document.getElementById('page-title')
            // console.log(pageTitle)
            pageTitle.innerText = 'Ami ai text ta ke change korlam'
            
        })
        
document.getElementById('login-btn')
            .addEventListener('click',function(){
                const userInfo = document.getElementById('user-info');
                userInfo.innerText = 'Login succesfully'
            })