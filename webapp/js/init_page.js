const card_key = ['用户','分组','角色','菜单','接口','日志'];
const link = ['/personnel/user','/personnel/group','/system/role','/system/menu','/system/api','/log/operation-log']
let card_order = [];
let user_order = null;


$.ajax({
    url :'http://localhost:3000/dashboard',
    type : 'get',
    data : {},
    dataType : 'json',
    async : false,
    success: (data) =>{
        user_order = data['count(user_id)']
    }
})

card_order =[user_order,0,0,0,0,0];

const card_span = document.getElementsByClassName('card_order'); 
const card_panel = document.getElementsByClassName('card-panel');
for(let i = 0 ;i<card_key.length;i++){
    card_span[i].textContent = card_order[i];
    card_panel[i].setAttribute('onclick','card_panel_skip('+i+')');
}






