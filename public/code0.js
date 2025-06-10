gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.localVariables = [];
gdjs.Main_32menuCode.GDBackgroundObjects1= [];
gdjs.Main_32menuCode.GDBackgroundObjects2= [];
gdjs.Main_32menuCode.GDstartObjects1= [];
gdjs.Main_32menuCode.GDstartObjects2= [];
gdjs.Main_32menuCode.GDSummerBackgroundObjects1= [];
gdjs.Main_32menuCode.GDSummerBackgroundObjects2= [];
gdjs.Main_32menuCode.GDNewTextObjects1= [];
gdjs.Main_32menuCode.GDNewTextObjects2= [];
gdjs.Main_32menuCode.GDExitObjects1= [];
gdjs.Main_32menuCode.GDExitObjects2= [];
gdjs.Main_32menuCode.GDTutorialObjects1= [];
gdjs.Main_32menuCode.GDTutorialObjects2= [];


gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("rank", runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


};gdjs.Main_32menuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure("rank", runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


};gdjs.Main_32menuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.Main_32menuCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDstartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDstartObjects1[k] = gdjs.Main_32menuCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.Main_32menuCode.GDExitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDExitObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDExitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDExitObjects1[k] = gdjs.Main_32menuCode.GDExitObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDExitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__BackButton__doDefault.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Main_32menuCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDTutorialObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDTutorialObjects1[k] = gdjs.Main_32menuCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDTutorialObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tutorial", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("http:/127.0.0.1/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "appliction/jdon", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.Main_32menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("http:/127.0.0.1/rank", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), "POST", "appliction/jdon", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.Main_32menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32menuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32menuCode.GDstartObjects1.length = 0;
gdjs.Main_32menuCode.GDstartObjects2.length = 0;
gdjs.Main_32menuCode.GDSummerBackgroundObjects1.length = 0;
gdjs.Main_32menuCode.GDSummerBackgroundObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32menuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32menuCode.GDExitObjects1.length = 0;
gdjs.Main_32menuCode.GDExitObjects2.length = 0;
gdjs.Main_32menuCode.GDTutorialObjects1.length = 0;
gdjs.Main_32menuCode.GDTutorialObjects2.length = 0;

gdjs.Main_32menuCode.eventsList2(runtimeScene);
gdjs.Main_32menuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32menuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32menuCode.GDstartObjects1.length = 0;
gdjs.Main_32menuCode.GDstartObjects2.length = 0;
gdjs.Main_32menuCode.GDSummerBackgroundObjects1.length = 0;
gdjs.Main_32menuCode.GDSummerBackgroundObjects2.length = 0;
gdjs.Main_32menuCode.GDNewTextObjects1.length = 0;
gdjs.Main_32menuCode.GDNewTextObjects2.length = 0;
gdjs.Main_32menuCode.GDExitObjects1.length = 0;
gdjs.Main_32menuCode.GDExitObjects2.length = 0;
gdjs.Main_32menuCode.GDTutorialObjects1.length = 0;
gdjs.Main_32menuCode.GDTutorialObjects2.length = 0;


return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
