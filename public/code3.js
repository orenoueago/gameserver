gdjs.clearCode = {};
gdjs.clearCode.localVariables = [];
gdjs.clearCode.GDNewSpriteObjects1= [];
gdjs.clearCode.GDNewSpriteObjects2= [];
gdjs.clearCode.GDNewSpriteObjects3= [];
gdjs.clearCode.GDBackgroundObjects1= [];
gdjs.clearCode.GDBackgroundObjects2= [];
gdjs.clearCode.GDBackgroundObjects3= [];
gdjs.clearCode.GDSummerBackgroundObjects1= [];
gdjs.clearCode.GDSummerBackgroundObjects2= [];
gdjs.clearCode.GDSummerBackgroundObjects3= [];
gdjs.clearCode.GDNewSprite2Objects1= [];
gdjs.clearCode.GDNewSprite2Objects2= [];
gdjs.clearCode.GDNewSprite2Objects3= [];
gdjs.clearCode.GDNewTextObjects1= [];
gdjs.clearCode.GDNewTextObjects2= [];
gdjs.clearCode.GDNewTextObjects3= [];
gdjs.clearCode.GDMenuObjects1= [];
gdjs.clearCode.GDMenuObjects2= [];
gdjs.clearCode.GDMenuObjects3= [];


gdjs.clearCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}}

}


};gdjs.clearCode.asyncCallback15567836 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.clearCode.localVariables);

{ //Subevents
gdjs.clearCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.clearCode.localVariables.length = 0;
}
gdjs.clearCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.clearCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().get("error")), (runtimeScene) => (gdjs.clearCode.asyncCallback15567836(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.clearCode.eventsList2 = function(runtimeScene) {

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


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11159084);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.clearCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.clearCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.clearCode.GDNewSpriteObjects1.length = 0;
gdjs.clearCode.GDNewSpriteObjects2.length = 0;
gdjs.clearCode.GDNewSpriteObjects3.length = 0;
gdjs.clearCode.GDBackgroundObjects1.length = 0;
gdjs.clearCode.GDBackgroundObjects2.length = 0;
gdjs.clearCode.GDBackgroundObjects3.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects1.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects2.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects3.length = 0;
gdjs.clearCode.GDNewSprite2Objects1.length = 0;
gdjs.clearCode.GDNewSprite2Objects2.length = 0;
gdjs.clearCode.GDNewSprite2Objects3.length = 0;
gdjs.clearCode.GDNewTextObjects1.length = 0;
gdjs.clearCode.GDNewTextObjects2.length = 0;
gdjs.clearCode.GDNewTextObjects3.length = 0;
gdjs.clearCode.GDMenuObjects1.length = 0;
gdjs.clearCode.GDMenuObjects2.length = 0;
gdjs.clearCode.GDMenuObjects3.length = 0;

gdjs.clearCode.eventsList2(runtimeScene);
gdjs.clearCode.GDNewSpriteObjects1.length = 0;
gdjs.clearCode.GDNewSpriteObjects2.length = 0;
gdjs.clearCode.GDNewSpriteObjects3.length = 0;
gdjs.clearCode.GDBackgroundObjects1.length = 0;
gdjs.clearCode.GDBackgroundObjects2.length = 0;
gdjs.clearCode.GDBackgroundObjects3.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects1.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects2.length = 0;
gdjs.clearCode.GDSummerBackgroundObjects3.length = 0;
gdjs.clearCode.GDNewSprite2Objects1.length = 0;
gdjs.clearCode.GDNewSprite2Objects2.length = 0;
gdjs.clearCode.GDNewSprite2Objects3.length = 0;
gdjs.clearCode.GDNewTextObjects1.length = 0;
gdjs.clearCode.GDNewTextObjects2.length = 0;
gdjs.clearCode.GDNewTextObjects3.length = 0;
gdjs.clearCode.GDMenuObjects1.length = 0;
gdjs.clearCode.GDMenuObjects2.length = 0;
gdjs.clearCode.GDMenuObjects3.length = 0;


return;

}

gdjs['clearCode'] = gdjs.clearCode;
