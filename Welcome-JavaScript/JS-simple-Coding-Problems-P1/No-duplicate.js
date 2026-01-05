/**
 * Purpose : ami akti array declare korbo  and sei array te anok gulo duplicate element 
 * ace ami sei duplocate element bad diy ekti new array make korbo
 */

function noDuplicate ( array){
    const list = [];
    for (const item of array ){
        if (list.includes(item) === false){
            list.push(item)
        }
    }
    return list;
}

const BestFriend = ['Durjoy', 'Chandra', 'Barman','bijoy', 'Chandra','Barman','Durjoy ' ,'Durjoy']

const number = [2,4,5,6 ,3, 2,2,2,8,3, 2, 4,2 ,4,2,45,12] 

const section = noDuplicate(BestFriend);
console.log(section)