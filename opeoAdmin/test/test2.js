const static = new Object();

const webparh = '/Users/luodi/Desktop/opeoAdmin/webapp';

const url_list = {'/dashboard':'',
                  '/personnel':['/user','group','fieldRelation'],
                  '/system':['role','menu','api'],
                  'log':['operation-log']
                }


static.url = url_list;

static.path = {'web': webparh,file:['html','css','js']}


exports.static = static