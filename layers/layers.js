ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2056").setExtent([2598402.343815, 1167613.565260, 2715586.587629, 1249681.662556]);
var wms_layers = [];


    var projection_Landeskarte125000LK25_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Landeskarte125000LK25_0 = projection_Landeskarte125000LK25_0.getExtent();
    var size_Landeskarte125000LK25_0 = ol.extent.getWidth(projectionExtent_Landeskarte125000LK25_0) / 256;
    var resolutions_Landeskarte125000LK25_0 = new Array(14);
    var matrixIds_Landeskarte125000LK25_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Landeskarte125000LK25_0[z] = size_Landeskarte125000LK25_0 / Math.pow(2, z);
        matrixIds_Landeskarte125000LK25_0[z] = z;
    }
    var lyr_Landeskarte125000LK25_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "http://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml",
                                attributions: ' ',
                                "layer": "ch.swisstopo.pixelkarte-farbe-pk25.noscale",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Landeskarte125000LK25_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Landeskarte125000LK25_0),
                resolutions: resolutions_Landeskarte125000LK25_0,
                matrixIds: matrixIds_Landeskarte125000LK25_0
              }),
              style: 'ch.swisstopo.pixelkarte-farbe-pk25.noscale',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Landeskarte 1:25\'000 | LK25',
                            opacity: 0.9990000000000001,
                            
maxResolution:0.8401339845678589,

                            minResolution:0.14002233076130982,

                          });

        var lyr_EsriLightGray_1 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_tlm_kantonsgebiet_2 = new ol.format.GeoJSON();
var features_tlm_kantonsgebiet_2 = format_tlm_kantonsgebiet_2.readFeatures(json_tlm_kantonsgebiet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_tlm_kantonsgebiet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tlm_kantonsgebiet_2.addFeatures(features_tlm_kantonsgebiet_2);
var lyr_tlm_kantonsgebiet_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tlm_kantonsgebiet_2, 
                style: style_tlm_kantonsgebiet_2,
                popuplayertitle: 'tlm_kantonsgebiet',
                interactive: false,
                title: '<img src="styles/legend/tlm_kantonsgebiet_2.png" /> tlm_kantonsgebiet'
            });
var format_SchutzgebieteProNaturaLuzern_3 = new ol.format.GeoJSON();
var features_SchutzgebieteProNaturaLuzern_3 = format_SchutzgebieteProNaturaLuzern_3.readFeatures(json_SchutzgebieteProNaturaLuzern_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_SchutzgebieteProNaturaLuzern_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchutzgebieteProNaturaLuzern_3.addFeatures(features_SchutzgebieteProNaturaLuzern_3);
var lyr_SchutzgebieteProNaturaLuzern_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchutzgebieteProNaturaLuzern_3,
maxResolution:7.00111653806549,
 
                style: style_SchutzgebieteProNaturaLuzern_3,
                popuplayertitle: 'Schutzgebiete Pro Natura Luzern',
                interactive: true,
                title: '<img src="styles/legend/SchutzgebieteProNaturaLuzern_3.png" /> Schutzgebiete Pro Natura Luzern'
            });
var format_SchutzgebieteProNaturaLuzern_4 = new ol.format.GeoJSON();
var features_SchutzgebieteProNaturaLuzern_4 = format_SchutzgebieteProNaturaLuzern_4.readFeatures(json_SchutzgebieteProNaturaLuzern_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_SchutzgebieteProNaturaLuzern_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchutzgebieteProNaturaLuzern_4.addFeatures(features_SchutzgebieteProNaturaLuzern_4);
var lyr_SchutzgebieteProNaturaLuzern_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchutzgebieteProNaturaLuzern_4,
maxResolution:280.0446615226196,
 minResolution:7.001396582727014,

                style: style_SchutzgebieteProNaturaLuzern_4,
                popuplayertitle: 'Schutzgebiete Pro Natura Luzern',
                interactive: true,
                title: '<img src="styles/legend/SchutzgebieteProNaturaLuzern_4.png" /> Schutzgebiete Pro Natura Luzern'
            });
var group_SchutzgebieteSchutzverordnungen = new ol.layer.Group({
                                layers: [lyr_SchutzgebieteProNaturaLuzern_3,lyr_SchutzgebieteProNaturaLuzern_4,],
                                fold: 'open',
                                title: 'Schutzgebiete - Schutzverordnungen'});
var group_AVundGemeindegrenzen = new ol.layer.Group({
                                layers: [lyr_tlm_kantonsgebiet_2,],
                                fold: 'open',
                                title: 'AV und Gemeindegrenzen'});

lyr_Landeskarte125000LK25_0.setVisible(true);lyr_EsriLightGray_1.setVisible(true);lyr_tlm_kantonsgebiet_2.setVisible(true);lyr_SchutzgebieteProNaturaLuzern_3.setVisible(true);lyr_SchutzgebieteProNaturaLuzern_4.setVisible(true);
var layersList = [lyr_Landeskarte125000LK25_0,lyr_EsriLightGray_1,group_AVundGemeindegrenzen,group_SchutzgebieteSchutzverordnungen];
lyr_tlm_kantonsgebiet_2.set('fieldAliases', {'id': 'id', 'uuid': 'uuid', 'datum_aenderung': 'datum_aenderung', 'datum_erstellung': 'datum_erstellung', 'erstellung_jahr': 'erstellung_jahr', 'erstellung_monat': 'erstellung_monat', 'grund_aenderung': 'grund_aenderung', 'herkunft': 'herkunft', 'herkunft_jahr': 'herkunft_jahr', 'herkunft_monat': 'herkunft_monat', 'revision_jahr': 'revision_jahr', 'revision_monat': 'revision_monat', 'revision_qualitaet': 'revision_qualitaet', 'objektart': 'objektart', 'kantonsnummer': 'kantonsnummer', 'see_flaeche': 'see_flaeche', 'kantonsflaeche': 'kantonsflaeche', 'name': 'name', 'icc': 'icc', 'einwohnerzahl': 'einwohnerzahl', });
lyr_SchutzgebieteProNaturaLuzern_3.set('fieldAliases', {'fid': 'fid', 'Objektnummer': 'Objektnummer', 'Name': 'Name', 'sektion': 'sektion', });
lyr_SchutzgebieteProNaturaLuzern_4.set('fieldAliases', {'fid': 'fid', 'Schutzgebiet': 'Schutzgebiet', });
lyr_tlm_kantonsgebiet_2.set('fieldImages', {'id': 'TextEdit', 'uuid': 'TextEdit', 'datum_aenderung': 'DateTime', 'datum_erstellung': 'DateTime', 'erstellung_jahr': 'Range', 'erstellung_monat': 'Range', 'grund_aenderung': 'TextEdit', 'herkunft': 'TextEdit', 'herkunft_jahr': 'Range', 'herkunft_monat': 'Range', 'revision_jahr': 'Range', 'revision_monat': 'Range', 'revision_qualitaet': 'TextEdit', 'objektart': 'TextEdit', 'kantonsnummer': 'Range', 'see_flaeche': 'TextEdit', 'kantonsflaeche': 'TextEdit', 'name': 'TextEdit', 'icc': 'TextEdit', 'einwohnerzahl': 'Range', });
lyr_SchutzgebieteProNaturaLuzern_3.set('fieldImages', {'fid': 'Hidden', 'Objektnummer': 'Range', 'Name': 'TextEdit', 'sektion': 'Hidden', });
lyr_SchutzgebieteProNaturaLuzern_4.set('fieldImages', {'fid': 'Hidden', 'Schutzgebiet': 'TextEdit', });
lyr_tlm_kantonsgebiet_2.set('fieldLabels', {'id': 'no label', 'uuid': 'no label', 'datum_aenderung': 'no label', 'datum_erstellung': 'no label', 'erstellung_jahr': 'no label', 'erstellung_monat': 'no label', 'grund_aenderung': 'no label', 'herkunft': 'no label', 'herkunft_jahr': 'no label', 'herkunft_monat': 'no label', 'revision_jahr': 'no label', 'revision_monat': 'no label', 'revision_qualitaet': 'no label', 'objektart': 'no label', 'kantonsnummer': 'no label', 'see_flaeche': 'no label', 'kantonsflaeche': 'no label', 'name': 'no label', 'icc': 'no label', 'einwohnerzahl': 'no label', });
lyr_SchutzgebieteProNaturaLuzern_3.set('fieldLabels', {'Objektnummer': 'hidden field', 'Name': 'header label - visible with data', });
lyr_SchutzgebieteProNaturaLuzern_4.set('fieldLabels', {'Schutzgebiet': 'header label - always visible', });
lyr_SchutzgebieteProNaturaLuzern_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});