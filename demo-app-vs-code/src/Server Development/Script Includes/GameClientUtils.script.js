var GameClientUtils = Class.create();
GameClientUtils.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    hello:function(){
        return "Dev01 add new function!";
    },
    type: 'GameClientUtils'
});