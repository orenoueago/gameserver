gdjs.RankCode = {};
gdjs.RankCode.localVariables = [];
gdjs.RankCode.GD_9525490_9534892_9527036Objects1= [];
gdjs.RankCode.GD_9525490_9534892_9527036Objects2= [];
gdjs.RankCode.GDNewTextObjects1= [];
gdjs.RankCode.GDNewTextObjects2= [];
gdjs.RankCode.GDBackObjects1= [];
gdjs.RankCode.GDBackObjects2= [];


gdjs.RankCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.RankCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.RankCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.RankCode.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getChild("score").getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.RankCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RankCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.RankCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RankCode.GDBackObjects1[k] = gdjs.RankCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.RankCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


};

gdjs.RankCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RankCode.GD_9525490_9534892_9527036Objects1.length = 0;
gdjs.RankCode.GD_9525490_9534892_9527036Objects2.length = 0;
gdjs.RankCode.GDNewTextObjects1.length = 0;
gdjs.RankCode.GDNewTextObjects2.length = 0;
gdjs.RankCode.GDBackObjects1.length = 0;
gdjs.RankCode.GDBackObjects2.length = 0;

gdjs.RankCode.eventsList0(runtimeScene);
gdjs.RankCode.GD_9525490_9534892_9527036Objects1.length = 0;
gdjs.RankCode.GD_9525490_9534892_9527036Objects2.length = 0;
gdjs.RankCode.GDNewTextObjects1.length = 0;
gdjs.RankCode.GDNewTextObjects2.length = 0;
gdjs.RankCode.GDBackObjects1.length = 0;
gdjs.RankCode.GDBackObjects2.length = 0;


return;

}

gdjs['RankCode'] = gdjs.RankCode;
