window.location = "http://localhost:8000/#/dashboard";
//
const title = ['首页','用户管理','分组管理','字段关系管理','角色管理','菜单管理','接口管理','操作日志'];
const but_title = ['首页','用户管理','分组管理','字段关系管理','角色管理','菜单管理','接口管理','操作日志'];


for(var i =0 ;i<title.length;i++){
    title[i] = title[i]+'-Open Admin';
}

//
function init_but() {
    $('.record button').css('background','#fcfcfc');
    $('.record button').css('border','#d8dce5 1px solid');
    $('.record button').css('color','#606267');
}


//
function but_change(id,group,module){
    if ($('.record .insert-but'+id).length == 0){
        var but = '<button class="insert-but'+id+'" onclick="but_url('+Number(id)+','+Number(group)+','+Number(module)+')">'+but_title[Number(id)]+'</>'
        $('.record').append(but);
        $('.record .insert-but'+id).css('background','#00c081');
        
    }else{
        init_but();
        $('record .insert-but'+id).css('background','#f8fbfa');
        $('.record .insert-but'+id).css('background','#00c081');
        $('.record .insert-but'+id).css('border','none');  
        $('.record .insert-but'+id).css('color','#ffffff'); 
    }
}



//
window.onhashchange = (event)=>{
 
    init_but();
    
    var url_ = document.location.hash.substr(1);
    if(url_ == '/dashboard'){
        $('title').html(title[0]);
        $('.user-district').css('background','');
        $('record .one-but').css('background','#f8fbfa');
        $('.record .one-but').css('background','#00c081');
        $('.record .one-but').css('border','none');  
        $('.record .one-but').css('color','#606267'); 
    }else if(url_ == '/personnel/user'){
        $('title').html(title[1]);
        but_change('1','1','1');
        $('.user-district').css('background','');
        $('.user-district').css('background','red');
       
               
    }else if(url_=='/personnel/group'){
        $('title').html(title[2]);
        but_change('2','1','2');

      
        $('.user-district').css('background','');
        $('.user-district').css('background','blue');

    }else if(url_=='/personnel/fieldRelation'){
        $('title').html(title[3]);
        but_change('3','1','3');
        $('.user-district').css('background','');
        $('.user-district').css('background','violet');

    }else if(url_=='/system/role'){
        $('title').html(title[4]);
        but_change('4','2','1');
        $('.user-district').css('background','');
        $('.user-district').css('background','yellow');

    }else if(url_=='/system/menu'){
        $('title').html(title[5]);
        but_change('5','2','2');
        $('.user-district').css('background','');
        $('.user-district').css('background','wheat');

    }else if(url_=='/system/api'){
        $('title').html(title[6]);
        but_change('6','2','3');
        $('.user-district').css('background','');
        $('.user-district').css('background','turquoise');

    }else if(url_=='/log/operation-log'){
        $('title').html(title[7]);
        but_change('7','3','1');
        $('.user-district').css('background','');
        $('.user-district').css('background','tomato');
    }
    
    $.ajax({
        url : 'http://localhost:3000'+url_,
        type :'get',
        
    })
  
}




//
function but_url(id,group,module){
    if(id==0){
        init_but();
        $('.record .one-but').css('color','#ffffff'); 
        $('record .one-but').css('background','#f8fbfa');
        $('.record .one-but').css('background','#00c081');
        $('.record .one-but').css('border','none');  
        

        standard = url_key[id];
        document.location.hash = standard;
        return;
    }
    
    but_change(id.toString());
    
    standard = url_key[group];
    practical =  static.url[standard][module-1];
    // var url = '/#'+ standard;

    document.location.hash = standard+practical;
    
    
    
}


