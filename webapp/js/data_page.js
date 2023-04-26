

/*
#############################################################################
*/

window.onhashchange = (event)=>{
    url_page.init_but();
    $('.nav a').css('color','#8b9aad');
    var url_ = document.location.hash.substr(1);
    if(url_ == '/dashboard'){
        $('title').html(title[0]);
       
        $('.nav a[href="/#/dashboard"]').css('color','#2897ff');
        url_page.one_but()
        url_page.data_page(0,'#f0f2f6');
        
    }else if(url_ == '/personnel/user'){
        $('title').html(title[1]);
        
        $('.td_box1 a[href="/#/personnel/user"]').css('color','#2897ff');
        url_page.but_change('1','1','1');
        url_page.data_page(1);

    }else if(url_=='/personnel/group'){
        $('title').html(title[2]);
        url_page.but_change('2','1','2');
        $('.td_box1 a[href="/#/personnel/group"]').css('color','#2897ff');
        url_page.data_page(2);

    }else if(url_=='/personnel/fieldRelation'){
        $('title').html(title[3]);
        $('.td_box1 a[href="/#/personnel/fieldRelation"]').css('color','#2897ff');
        url_page.but_change('3','1','3');
        url_page.data_page(3);
       
    }else if(url_=='/system/role'){
        $('title').html(title[4]);
        $('.td_box2 a[href="/#/system/role"]').css('color','#2897ff');

        url_page.but_change('4','2','1');
        url_page.data_page(4);
       
    }else if(url_=='/system/menu'){
        $('title').html(title[5]);
        $('.td_box2 a[href="/#/system/menu"]').css('color','#2897ff');
        url_page.but_change('5','2','2');
        url_page.data_page(5);
        
    }else if(url_=='/system/api'){
        $('title').html(title[6]);
        $('.td_box2 a[href="/#/system/api"]').css('color','#2897ff');
        url_page.but_change('6','2','3');
        url_page.data_page(6);
        
    }else if(url_=='/log/operation-log'){
        $('title').html(title[7]);
        $('.td_box3 a[href="/#/log/operation-log"]').css('color','#2897ff');
        url_page.but_change('7','3','1');
        url_page.data_page(7);
        
    }
    
    $.ajax({
        url : 'http://localhost:3000'+url_,
        type :'get',
        
    })
  
}

/*
#############################################################################
*/


//user_page

function text_get(id){
    $('select[class^=select-input]').css('border-color','#dcdfe6');
    $('.select-input'+id).css('border-color','#0052d4');
}

function text_lose(id){
    $('.select-input'+id).css('border-color','#dcdfe6');
}



