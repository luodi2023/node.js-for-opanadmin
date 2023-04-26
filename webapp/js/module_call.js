window.location = "http://localhost:8000/#/dashboard";
//

const url_page = new Object();
const home_page = new Object();
const user_page = new Object();
let el_form_item_label =['用户名','昵称','状态','同步状态'];
let option_stastu = [['正常','禁用'],['已同步','未同步']];

$.ajax({
    url :'http://localhost:3000/dashboard',
    type : 'get',
    data : {},
    dataType : 'json',
    async : false,
    success: (data) =>{
        for(let i in data){
            card_key.push(i);
        }

    }
})




const title  = [];
url_page.but_title = ['首页','用户管理','分组管理','字段关系管理','角色管理','菜单管理','接口管理','操作日志'];


for(var i =0 ;i<url_page.but_title.length;i++){
    title[i] = url_page.but_title[i]+'-Open Admin';
}



home_page.panel_group = ()=>{
    var str2 = '<div class="panel-group">';
    var create_panel_group_html = null;
    for(var i = 0;i<6;i++){
        var card_str = '<div class="card-panel" onclick="card_panel_skip('+i+')">\
                            <div class="card-panel-text">'+card_key[i]+'<span\
                            class="card_order">'+card_order[i]+'<span>\
                            </div>\
                        </div>';
        str2 =str2.concat(card_str);
    }

    create_panel_group_html = str2+'</div>';

    return create_panel_group_html;
}

home_page.apply = home_page.panel_group();





user_page.user_table =()=>{
    var str ='<div class="user-panel"><div class="user-operation-panel">\
              <div class="user-input">';
    var create_table_html = null;

    for(let i =0 ;i<4;i++){
        if (i<2){
            var input = '<span>'+el_form_item_label[i]+'</span><input class="select-input'+i+'" type="text" placeholder="'+el_form_item_label[i]+'"  onfocus="text_get('+i+')" onblur="text_lose('+i+')"/>';
            str = str.concat(input);
        }else{
            var option = '<span>'+el_form_item_label[i]+'</span>\
                          <select class="select-input'+i+'">\
                            <option>'+option_stastu[i-2][0]+'</option>\
                            <option>'+option_stastu[i-2][1]+'</option>\
                          </select>';
            str = str.concat(option);
        }
    }
    
    create_table_html = str+'</div><table border="1"></table></div>';
    console.log(create_table_html);
    return create_table_html;
}

user_page.apply = user_page.user_table();

/*
#############################################################################
*/
/* url_page对象封装
    方法:
        one_but :
        init_but : record栏按钮初始化
        but_change : 点击按钮变色,跳转url 
        data_page : 模块页面跳转过渡效果,显示页面

    参数:
        but_change:
            id : 按钮id
            group : 按钮所属的模块组
            module: 按钮所属的模块

*/


//属性定义

url_page.data_page_html = {
    title: url_page.but_title,
    html:[home_page['apply'],user_page['apply']]
}






//方法定义
url_page.init_but =()=>{
    $('.record button').css('background','#fcfcfc');
    $('.record button').css('border','#d8dce5 1px solid');
    $('.record button').css('color','#606267');
  
}


url_page.one_but =()=>{
    $('record .one-but').css('background','#f8fbfa');
    $('.record .one-but').css('background','#00c081');
    $('.record .one-but').css('border','none');  
    $('.record .one-but').css('color','#606267'); 

}

//
url_page.but_change = (id,group,module)=>{
    if ($('.record .insert-but'+id).length == 0){
        var but = '<button class="insert-but'+id+'" onclick="but_url('+Number(id)+','+Number(group)+','+Number(module)+')">'+url_page.but_title[id]+'</>'
        $('.record').append(but);
        $('.record .insert-but'+id).css('background','#00c081');
        
    }else{
        url_page.init_but();
        $('record .insert-but'+id).css('background','#f8fbfa');
        $('.record .insert-but'+id).css('background','#00c081');
        $('.record .insert-but'+id).css('border','none');  
        $('.record .insert-but'+id).css('color','#ffffff'); 
    }
}


url_page.data_page =(html_id,background='#ffffff')=>{
    $('.page').css('left','50px');
    $('.page').css('opacity',0);
    setTimeout(()=>{
        $('.page').remove();
        $('.user-district').css('margin-top','2px');
        $('.user-district').append('<div class="page">'+url_page.data_page_html['html'][html_id]+'</div>');
        $('.page').css('left','-50px');
        $('.page').css('opacity',0);
        $('.page').css('transition','all 0.5s ease');
    },100)
    if(background == '#f0f2f6'){
        setTimeout(()=>{
            $('.page').css('left','0px');
            $('.page').css('opacity',1);
            $('.page').css('background-color',background);
            $('.card-panel-text').css('margin-right','20px');
            $('.card_order').css('right','25px');
        },200)
    }else{
        setTimeout(()=>{
            $('.page').css('left','0px');
            $('.page').css('opacity',1);
            $('.page').css('background-color','#ffffff');
        },300)
    }
}

















/*
#############################################################################
*/








function but_url(id,group,module){
    if(id==0){
        $('.record .one-but').css('color','rgb(255,255,255)');
        standard = url_key[id];
        document.location.hash = standard;
        return;
    }
    
    url_page.but_change(id.toString());
    
    standard = url_key[group];
    practical =  static.url[standard][module-1];

    document.location.hash = standard+practical;
    
}

function card_panel_skip(id){
     document.location.hash = link[id];  
}