
var static = new Object();
let home =null;
let url_key =null;
let standard =null;
let practical=null;

$.ajax({
    url :'http://localhost:3000/getlink',
    type : 'get',
    data : {'url':''},
    dataType : 'json',
    success: (data) =>{
        //复制json对象
        static.url = JSON.parse(JSON.stringify(data));
        home = Object.keys(static.url)[0];
        url_key = Object.keys(static.url);
        $('.nav div:first>a').attr('href','/#'+home);
        
    }
})






function on(id){
   //元素获取
   var $main = $('#createTd_'+id);
   var $menu = $('.tr_box'+id);
   var $module = $('.td_box'+id); 
   var text_list = []
   var rom = null
   
   if(id == '1'){
       rom = 3;
       text_list = ['用户管理','分组管理','字段关系管理'];
   }
   if(id == '2'){
       rom = 3;
       text_list = ['角色管理','菜单管理','接口管理'];
   }
   if(id == '3'){
       rom = 1;
       text_list = ['操作日志'];
   }

    var px = (rom * 50).toString();
    //创建元素
    if($menu.length == 0 ){

        $main.after('<div class="tr_box'+id+'"></div>');
        var $menu = $('.tr_box'+id);
        if($menu.css('height') == '0px'){
            
            $menu.css('height',px + 'px');
        }
        

        for(var i = 0;i<rom;i++){
            standard = url_key[Number(id)];
            practical =  static.url[url_key[Number(id)]];
            var url = '/#'+ standard + practical[i];
            $menu.append('<div class="td_box'+id+'"><a href="'+url+'">'+text_list[i]+'</a></div>');
        }
        var $module = $('.td_box'+id);
        if($module.css('height') == '0px'){
            $module.css('height','50px');
        }

    //下拉效果
    }else{
        if ($menu.css('height') == '0px' ){
            $menu.css('height',px+'px');
           
        
        }else{
            $menu.css('height','0px');
            $menu.css('overflow-y','hidden');             
        }       
        
    }
}






$('.vs').click(()=>{
    
    var $nav =$('.nav');
    if ($nav.css('width') === '210px'){
        $nav.css('width','53px');
        $('.nav>div').css('overflow','hidden');
        $('div[id^=createTd_]').attr('onclick','');
        $('div[class^=tr_box]').css('height','0px');

        $('.data-district').css('width','1372px');
        

        var  $ico=$('.bi-text-indent-right path');
        $ico.attr('d','M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z');

        
    }else if ($nav.css('width') === '53px'){
        $nav.css('width','210px');
        for (var i=1;i<4;i++){
            $('#createTd_'+i.toString()).attr('onclick','on('+i.toString()+')');
        }
        $('.data-district').css('width','1215px');

        var  $ico=$('.bi-text-indent-right path');
        $ico.attr('d','M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z');

    }
    
})



