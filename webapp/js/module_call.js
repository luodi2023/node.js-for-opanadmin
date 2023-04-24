window.location = "http://localhost:8000/#/dashboard";

window.onhashchange = (event)=>{
    var url_ = document.location.hash.substr(1);
    if(url_ == '/dashboard'){
        $('.user-district').css('background','');

    }else if(url_ == '/personnel/user'){
         $('.user-district').css('background','');
         $('.user-district').css('background','red');

    }else if(url_=='/personnel/group'){
        $('.user-district').css('background','');
        $('.user-district').css('background','blue');

    }else if(url_=='/personnel/fieldRelation'){
        $('.user-district').css('background','');
        $('.user-district').css('background','violet');

    }else if(url_=='/system/role'){
        $('.user-district').css('background','');
        $('.user-district').css('background','yellow');

    }else if(url_=='/system/menu'){
        $('.user-district').css('background','');
        $('.user-district').css('background','wheat');

    }else if(url_=='/system/api'){
        $('.user-district').css('background','');
        $('.user-district').css('background','turquoise');

    }else if(url_=='/log/operation-log'){
        $('.user-district').css('background','');
        $('.user-district').css('background','tomato');
    }
    
    


    $.ajax({
        url : 'http://localhost:3000'+url_,
        type :'get',
        
    })
}