gdjs.tutorialCode = {};
gdjs.tutorialCode.localVariables = [];
gdjs.tutorialCode.GDSummerBackgroundObjects1= [];
gdjs.tutorialCode.GDSummerBackgroundObjects2= [];
gdjs.tutorialCode.GDNewSpriteObjects1= [];
gdjs.tutorialCode.GDNewSpriteObjects2= [];
gdjs.tutorialCode.GDNewSprite2Objects1= [];
gdjs.tutorialCode.GDNewSprite2Objects2= [];
gdjs.tutorialCode.GDNewTextObjects1= [];
gdjs.tutorialCode.GDNewTextObjects2= [];
gdjs.tutorialCode.GDNewText2Objects1= [];
gdjs.tutorialCode.GDNewText2Objects2= [];
gdjs.tutorialCode.GDNewSprite3Objects1= [];
gdjs.tutorialCode.GDNewSprite3Objects2= [];
gdjs.tutorialCode.GDNewText3Objects1= [];
gdjs.tutorialCode.GDNewText3Objects2= [];
gdjs.tutorialCode.GDNewText4Objects1= [];
gdjs.tutorialCode.GDNewText4Objects2= [];
gdjs.tutorialCode.GDNewText5Objects1= [];
gdjs.tutorialCode.GDNewText5Objects2= [];
gdjs.tutorialCode.GDNewSprite4Objects1= [];
gdjs.tutorialCode.GDNewSprite4Objects2= [];
gdjs.tutorialCode.GDPlatform_9595GroundObjects1= [];
gdjs.tutorialCode.GDPlatform_9595GroundObjects2= [];
gdjs.tutorialCode.GDMenuObjects1= [];
gdjs.tutorialCode.GDMenuObjects2= [];


gdjs.tutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.tutorialCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.tutorialCode.GDMenuObjects1.length;i<l;++i) {
    if ( gdjs.tutorialCode.GDMenuObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.tutorialCode.GDMenuObjects1[k] = gdjs.tutorialCode.GDMenuObjects1[i];
        ++k;
    }
}
gdjs.tutorialCode.GDMenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", false);
}}

}


};

gdjs.tutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tutorialCode.GDSummerBackgroundObjects1.length = 0;
gdjs.tutorialCode.GDSummerBackgroundObjects2.length = 0;
gdjs.tutorialCode.GDNewSpriteObjects1.length = 0;
gdjs.tutorialCode.GDNewSpriteObjects2.length = 0;
gdjs.tutorialCode.GDNewSprite2Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite2Objects2.length = 0;
gdjs.tutorialCode.GDNewTextObjects1.length = 0;
gdjs.tutorialCode.GDNewTextObjects2.length = 0;
gdjs.tutorialCode.GDNewText2Objects1.length = 0;
gdjs.tutorialCode.GDNewText2Objects2.length = 0;
gdjs.tutorialCode.GDNewSprite3Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite3Objects2.length = 0;
gdjs.tutorialCode.GDNewText3Objects1.length = 0;
gdjs.tutorialCode.GDNewText3Objects2.length = 0;
gdjs.tutorialCode.GDNewText4Objects1.length = 0;
gdjs.tutorialCode.GDNewText4Objects2.length = 0;
gdjs.tutorialCode.GDNewText5Objects1.length = 0;
gdjs.tutorialCode.GDNewText5Objects2.length = 0;
gdjs.tutorialCode.GDNewSprite4Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite4Objects2.length = 0;
gdjs.tutorialCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.tutorialCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.tutorialCode.GDMenuObjects1.length = 0;
gdjs.tutorialCode.GDMenuObjects2.length = 0;

gdjs.tutorialCode.eventsList0(runtimeScene);
gdjs.tutorialCode.GDSummerBackgroundObjects1.length = 0;
gdjs.tutorialCode.GDSummerBackgroundObjects2.length = 0;
gdjs.tutorialCode.GDNewSpriteObjects1.length = 0;
gdjs.tutorialCode.GDNewSpriteObjects2.length = 0;
gdjs.tutorialCode.GDNewSprite2Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite2Objects2.length = 0;
gdjs.tutorialCode.GDNewTextObjects1.length = 0;
gdjs.tutorialCode.GDNewTextObjects2.length = 0;
gdjs.tutorialCode.GDNewText2Objects1.length = 0;
gdjs.tutorialCode.GDNewText2Objects2.length = 0;
gdjs.tutorialCode.GDNewSprite3Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite3Objects2.length = 0;
gdjs.tutorialCode.GDNewText3Objects1.length = 0;
gdjs.tutorialCode.GDNewText3Objects2.length = 0;
gdjs.tutorialCode.GDNewText4Objects1.length = 0;
gdjs.tutorialCode.GDNewText4Objects2.length = 0;
gdjs.tutorialCode.GDNewText5Objects1.length = 0;
gdjs.tutorialCode.GDNewText5Objects2.length = 0;
gdjs.tutorialCode.GDNewSprite4Objects1.length = 0;
gdjs.tutorialCode.GDNewSprite4Objects2.length = 0;
gdjs.tutorialCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.tutorialCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.tutorialCode.GDMenuObjects1.length = 0;
gdjs.tutorialCode.GDMenuObjects2.length = 0;


return;

}

gdjs['tutorialCode'] = gdjs.tutorialCode;
