
var static = new Object();
let home =null;
let url_key =null;


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
            var standard = url_key[Number(id)];
            var practical =  static.url[url_key[Number(id)]];
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
        $('.vs').text('展开');
        $nav.css('width','53px');
        $('.nav>div').css('overflow','hidden');
        $('div[id^=createTd_]').attr('onclick','');
        $('div[class^=tr_box]').css('height','0px');
    }else if ($nav.css('width') === '53px'){
        $('.vs').text('收起');
        $nav.css('width','210px');
        for (var i=1;i<4;i++){
            $('#createTd_'+i.toString()).attr('onclick','on('+i.toString()+')');
        }
        
    }
    
})



