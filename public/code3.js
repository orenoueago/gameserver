gdjs.clearCode = {};
gdjs.clearCode.localVariables = [];
gdjs.clearCode.GDNewSpriteObjects1= [];
gdjs.clearCode.GDNewSpriteObjects2= [];
gdjs.clearCode.GDBackgroundObjects1= [];
gdjs.clearCode.GDBackgroundObjects2= [];
gdjs.clearCode.GDSummerBackgroundObjects1= [];
gdjs.clearCode.GDSummerBackgroundObjects2= [];
gdjs.clearCode.GDNewSprite2Objects1= [];
gdjs.clearCode.GDNewSprite2Objects2= [];
gdjs.clearCode.GDNewTextObjects1= [];
gdjs.clearCode.GDNewTextObjects2= [];
gdjs.clearCode.GDMenuObjects1= [];
gdjs.clearCode.GDMenuObjects2= [];


gdjs.clearCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.clearCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.clearCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.clearCode.GDMenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.clearCode.GDMenuObjects1[k] = gdjs.clearCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.clearCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


};

gdjs.clearCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.clearCode.GDNewSpriteObjects1.length = 0;
gdjs.clearCode.GDNewSpriteObjects2.length = 0;
gdjs.clearCode.GDBackgroundObjects1.length = 0;
gdjs.clearCode.GDBackgroundObjects2.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects1.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects2.length = 0;
gdjs.clearCode.GDNewSprite2Objects1.length = 0;
gdjs.clearCode.GDNewSprite2Objects2.length = 0;
gdjs.clearCode.GDNewTextObjects1.length = 0;
gdjs.clearCode.GDNewTextObjects2.length = 0;
gdjs.clearCode.GDMenuObjects1.length = 0;
gdjs.clearCode.GDMenuObjects2.length = 0;

gdjs.clearCode.eventsList0(runtimeScene);
gdjs.clearCode.GDNewSpriteObjects1.length = 0;
gdjs.clearCode.GDNewSpriteObjects2.length = 0;
gdjs.clearCode.GDBackgroundObjects1.length = 0;
gdjs.clearCode.GDBackgroundObjects2.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects1.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects2.length = 0;
gdjs.clearCode.GDNewSprite2Objects1.length = 0;
gdjs.clearCode.GDNewSprite2Objects2.length = 0;
gdjs.clearCode.GDNewTextObjects1.length = 0;
gdjs.clearCode.GDNewTextObjects2.length = 0;
gdjs.clearCode.GDMenuObjects1.length = 0;
gdjs.clearCode.GDMenuObjects2.length = 0;


return;

}

gdjs['clearCode'] = gdjs.clearCode;
