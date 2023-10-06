var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DeteccionsMontornsCadastremontornes_2000m2_1 = new ol.format.GeoJSON();
var features_DeteccionsMontornsCadastremontornes_2000m2_1 = format_DeteccionsMontornsCadastremontornes_2000m2_1.readFeatures(json_DeteccionsMontornsCadastremontornes_2000m2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsMontornsCadastremontornes_2000m2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsMontornsCadastremontornes_2000m2_1.addFeatures(features_DeteccionsMontornsCadastremontornes_2000m2_1);
var lyr_DeteccionsMontornsCadastremontornes_2000m2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsMontornsCadastremontornes_2000m2_1, 
                style: style_DeteccionsMontornsCadastremontornes_2000m2_1,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsMontornsCadastremontornes_2000m2_1.png" /> Deteccions Montornés Cadastre — montornes_2000m2'
            });
var format_DeteccionssegonaiteracizonaII_2 = new ol.format.GeoJSON();
var features_DeteccionssegonaiteracizonaII_2 = format_DeteccionssegonaiteracizonaII_2.readFeatures(json_DeteccionssegonaiteracizonaII_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionssegonaiteracizonaII_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionssegonaiteracizonaII_2.addFeatures(features_DeteccionssegonaiteracizonaII_2);
var lyr_DeteccionssegonaiteracizonaII_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionssegonaiteracizonaII_2, 
                style: style_DeteccionssegonaiteracizonaII_2,
                interactive: true,
                title: '<img src="styles/legend/DeteccionssegonaiteracizonaII_2.png" /> Deteccions segona iteració zona II'
            });
var format_DeteccionssegonaiteracizonaI_3 = new ol.format.GeoJSON();
var features_DeteccionssegonaiteracizonaI_3 = format_DeteccionssegonaiteracizonaI_3.readFeatures(json_DeteccionssegonaiteracizonaI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionssegonaiteracizonaI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionssegonaiteracizonaI_3.addFeatures(features_DeteccionssegonaiteracizonaI_3);
var lyr_DeteccionssegonaiteracizonaI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionssegonaiteracizonaI_3, 
                style: style_DeteccionssegonaiteracizonaI_3,
                interactive: true,
                title: '<img src="styles/legend/DeteccionssegonaiteracizonaI_3.png" /> Deteccions segona iteració zona I'
            });
var format_DeteccionsTerrassaCadastre_4 = new ol.format.GeoJSON();
var features_DeteccionsTerrassaCadastre_4 = format_DeteccionsTerrassaCadastre_4.readFeatures(json_DeteccionsTerrassaCadastre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsTerrassaCadastre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsTerrassaCadastre_4.addFeatures(features_DeteccionsTerrassaCadastre_4);
var lyr_DeteccionsTerrassaCadastre_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsTerrassaCadastre_4, 
                style: style_DeteccionsTerrassaCadastre_4,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsTerrassaCadastre_4.png" /> Deteccions Terrassa Cadastre'
            });
var format_DeteccionsSantQuirzeCadastre_5 = new ol.format.GeoJSON();
var features_DeteccionsSantQuirzeCadastre_5 = format_DeteccionsSantQuirzeCadastre_5.readFeatures(json_DeteccionsSantQuirzeCadastre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsSantQuirzeCadastre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsSantQuirzeCadastre_5.addFeatures(features_DeteccionsSantQuirzeCadastre_5);
var lyr_DeteccionsSantQuirzeCadastre_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsSantQuirzeCadastre_5, 
                style: style_DeteccionsSantQuirzeCadastre_5,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsSantQuirzeCadastre_5.png" /> Deteccions Sant Quirze Cadastre'
            });
var format_DeteccionsSabadaellCadastre_6 = new ol.format.GeoJSON();
var features_DeteccionsSabadaellCadastre_6 = format_DeteccionsSabadaellCadastre_6.readFeatures(json_DeteccionsSabadaellCadastre_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsSabadaellCadastre_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsSabadaellCadastre_6.addFeatures(features_DeteccionsSabadaellCadastre_6);
var lyr_DeteccionsSabadaellCadastre_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsSabadaellCadastre_6, 
                style: style_DeteccionsSabadaellCadastre_6,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsSabadaellCadastre_6.png" /> Deteccions Sabadaell Cadastre'
            });
var format_DeteccionsMatadeperaCadastre_7 = new ol.format.GeoJSON();
var features_DeteccionsMatadeperaCadastre_7 = format_DeteccionsMatadeperaCadastre_7.readFeatures(json_DeteccionsMatadeperaCadastre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsMatadeperaCadastre_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsMatadeperaCadastre_7.addFeatures(features_DeteccionsMatadeperaCadastre_7);
var lyr_DeteccionsMatadeperaCadastre_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsMatadeperaCadastre_7, 
                style: style_DeteccionsMatadeperaCadastre_7,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsMatadeperaCadastre_7.png" /> Deteccions Matadepera Cadastre'
            });
var format_DeteccionsCastellarCadastre_8 = new ol.format.GeoJSON();
var features_DeteccionsCastellarCadastre_8 = format_DeteccionsCastellarCadastre_8.readFeatures(json_DeteccionsCastellarCadastre_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsCastellarCadastre_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsCastellarCadastre_8.addFeatures(features_DeteccionsCastellarCadastre_8);
var lyr_DeteccionsCastellarCadastre_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsCastellarCadastre_8, 
                style: style_DeteccionsCastellarCadastre_8,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsCastellarCadastre_8.png" /> Deteccions Castellar Cadastre'
            });
var format_DeteccionsCardedeuCadastre_9 = new ol.format.GeoJSON();
var features_DeteccionsCardedeuCadastre_9 = format_DeteccionsCardedeuCadastre_9.readFeatures(json_DeteccionsCardedeuCadastre_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeteccionsCardedeuCadastre_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeteccionsCardedeuCadastre_9.addFeatures(features_DeteccionsCardedeuCadastre_9);
var lyr_DeteccionsCardedeuCadastre_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DeteccionsCardedeuCadastre_9, 
                style: style_DeteccionsCardedeuCadastre_9,
                interactive: true,
                title: '<img src="styles/legend/DeteccionsCardedeuCadastre_9.png" /> Deteccions Cardedeu Cadastre'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DeteccionsMontornsCadastremontornes_2000m2_1.setVisible(true);lyr_DeteccionssegonaiteracizonaII_2.setVisible(true);lyr_DeteccionssegonaiteracizonaI_3.setVisible(true);lyr_DeteccionsTerrassaCadastre_4.setVisible(true);lyr_DeteccionsSantQuirzeCadastre_5.setVisible(true);lyr_DeteccionsSabadaellCadastre_6.setVisible(true);lyr_DeteccionsMatadeperaCadastre_7.setVisible(true);lyr_DeteccionsCastellarCadastre_8.setVisible(true);lyr_DeteccionsCardedeuCadastre_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DeteccionsMontornsCadastremontornes_2000m2_1,lyr_DeteccionssegonaiteracizonaII_2,lyr_DeteccionssegonaiteracizonaI_3,lyr_DeteccionsTerrassaCadastre_4,lyr_DeteccionsSantQuirzeCadastre_5,lyr_DeteccionsSabadaellCadastre_6,lyr_DeteccionsMatadeperaCadastre_7,lyr_DeteccionsCastellarCadastre_8,lyr_DeteccionsCardedeuCadastre_9];
lyr_DeteccionsMontornsCadastremontornes_2000m2_1.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionssegonaiteracizonaII_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_DeteccionssegonaiteracizonaI_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area': 'area', });
lyr_DeteccionsTerrassaCadastre_4.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsSantQuirzeCadastre_5.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsSabadaellCadastre_6.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsMatadeperaCadastre_7.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsCastellarCadastre_8.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lowerCorner': 'lowerCorner', 'upperCorner': 'upperCorner', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsCardedeuCadastre_9.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_DeteccionsMontornsCadastremontornes_2000m2_1.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionssegonaiteracizonaII_2.set('fieldImages', {'fid': '', 'id': '', 'area': '', });
lyr_DeteccionssegonaiteracizonaI_3.set('fieldImages', {'fid': '', 'id': '', 'area': '', });
lyr_DeteccionsTerrassaCadastre_4.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsSantQuirzeCadastre_5.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsSabadaellCadastre_6.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsMatadeperaCadastre_7.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsCastellarCadastre_8.set('fieldImages', {'fid': '', 'gml_id': '', 'lowerCorner': '', 'upperCorner': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsCardedeuCadastre_9.set('fieldImages', {'fid': '', 'gml_id': '', 'beginLifespanVersion': '', 'conditionOfConstruction': '', 'beginning': '', 'end': '', 'endLifespanVersion': '', 'informationSystem': '', 'reference': '', 'localId': '', 'namespace': '', 'horizontalGeometryEstimatedAccuracy': '', 'horizontalGeometryEstimatedAccuracy_uom': '', 'horizontalGeometryReference': '', 'referenceGeometry': '', 'currentUse': '', 'numberOfBuildingUnits': '', 'numberOfDwellings': '', 'numberOfFloorsAboveGround': '', 'documentLink': '', 'format': '', 'sourceStatus': '', 'officialAreaReference': '', 'value': '', 'value_uom': '', });
lyr_DeteccionsMontornsCadastremontornes_2000m2_1.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionssegonaiteracizonaII_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_DeteccionssegonaiteracizonaI_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'area': 'no label', });
lyr_DeteccionsTerrassaCadastre_4.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsSantQuirzeCadastre_5.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsSabadaellCadastre_6.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsMatadeperaCadastre_7.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsCastellarCadastre_8.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'lowerCorner': 'no label', 'upperCorner': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsCardedeuCadastre_9.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_DeteccionsCardedeuCadastre_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});