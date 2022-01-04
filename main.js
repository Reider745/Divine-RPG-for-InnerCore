IMPORT("AchievementsAPI");
IMPORT("dimensions");
IMPORT("StructuresAPI");



IDRegistry.genBlockID("oreRealmite");
Block.createBlock("oreRealmite", [
     {name: "Realmite ore", texture: [["realmite_ore", 0]], inCreative: true}
]);ToolAPI.registerBlockMaterial(BlockID.oreRealmite, "stone", 2);
Block.registerDropFunction("oreRealmite", function(coords, id, data, diggingLevel, toolLevel){
     return [[id, 1, data]];
});

IDRegistry.genBlockID("oreArlemite");
Block.createBlock("oreArlemite", [
     {name: "Arlemite ore", texture: [["arlemite_ore", 0]], inCreative: true}
]);ToolAPI.registerBlockMaterial(BlockID.oreArlemite, "stone", 3);
Block.registerDropFunction("oreArlemite", function(coords, id, data, diggingLevel, toolLevel){
     return [[id, 1, data]];
});

IDRegistry.genBlockID("oreRupee");
Block.createBlock("oreRupee", [
     {name: "Rupee ore", texture: [["rupee_ore", 0]], inCreative: true}
]);ToolAPI.registerBlockMaterial(BlockID.oreRupee, "stone", 3);
Block.registerDropFunction("oreRupee", function(coords, id, data, diggingLevel, toolLevel){
     return [[id, 1, data]];
});
