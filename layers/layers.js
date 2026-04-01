var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_tlm_kantonsgebiet_1 = new ol.format.GeoJSON();
var features_tlm_kantonsgebiet_1 = format_tlm_kantonsgebiet_1.readFeatures(json_tlm_kantonsgebiet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tlm_kantonsgebiet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tlm_kantonsgebiet_1.addFeatures(features_tlm_kantonsgebiet_1);
var lyr_tlm_kantonsgebiet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tlm_kantonsgebiet_1, 
                style: style_tlm_kantonsgebiet_1,
                popuplayertitle: 'tlm_kantonsgebiet',
                interactive: true,
                title: '<img src="styles/legend/tlm_kantonsgebiet_1.png" /> tlm_kantonsgebiet'
            });
var format_SchutzgebieteProNaturaLuzern_2 = new ol.format.GeoJSON();
var features_SchutzgebieteProNaturaLuzern_2 = format_SchutzgebieteProNaturaLuzern_2.readFeatures(json_SchutzgebieteProNaturaLuzern_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchutzgebieteProNaturaLuzern_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchutzgebieteProNaturaLuzern_2.addFeatures(features_SchutzgebieteProNaturaLuzern_2);
var lyr_SchutzgebieteProNaturaLuzern_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchutzgebieteProNaturaLuzern_2,
maxResolution:7.00111653806549,
 
                style: style_SchutzgebieteProNaturaLuzern_2,
                popuplayertitle: 'Schutzgebiete Pro Natura Luzern',
                interactive: true,
                title: '<img src="styles/legend/SchutzgebieteProNaturaLuzern_2.png" /> Schutzgebiete Pro Natura Luzern'
            });
var format_SchutzgebieteProNaturaLuzernPunkte_3 = new ol.format.GeoJSON();
var features_SchutzgebieteProNaturaLuzernPunkte_3 = format_SchutzgebieteProNaturaLuzernPunkte_3.readFeatures(json_SchutzgebieteProNaturaLuzernPunkte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchutzgebieteProNaturaLuzernPunkte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchutzgebieteProNaturaLuzernPunkte_3.addFeatures(features_SchutzgebieteProNaturaLuzernPunkte_3);
var lyr_SchutzgebieteProNaturaLuzernPunkte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchutzgebieteProNaturaLuzernPunkte_3,
maxResolution:280.0446615226196,
 minResolution:7.001396582727014,

                style: style_SchutzgebieteProNaturaLuzernPunkte_3,
                popuplayertitle: 'Schutzgebiete Pro Natura Luzern - Punkte',
                interactive: true,
                title: '<img src="styles/legend/SchutzgebieteProNaturaLuzernPunkte_3.png" /> Schutzgebiete Pro Natura Luzern - Punkte'
            });
var group_SchutzgebieteSchutzverordnungen = new ol.layer.Group({
                                layers: [lyr_SchutzgebieteProNaturaLuzern_2,lyr_SchutzgebieteProNaturaLuzernPunkte_3,],
                                fold: 'open',
                                title: 'Schutzgebiete - Schutzverordnungen'});
var group_Schutzgebiete_Puffer500 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Schutzgebiete_Puffer500'});
var group_Foremoos = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Foremoos'});
var group_Muelistutz = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Muelistutz'});
var group_Balmoos = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Balmoos'});
var group_Baldeggersee = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Baldeggersee'});
var group_Breitenacherried = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Breitenacherried'});
var group_AVundGemeindegrenzen = new ol.layer.Group({
                                layers: [lyr_tlm_kantonsgebiet_1,],
                                fold: 'open',
                                title: 'AV und Gemeindegrenzen'});
var group_Gewsser = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Gewässer'});
var group_GeoCover = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GeoCover'});
var group_Landwirtschaft = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Landwirtschaft'});
var group_Inventarenational = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Inventare national'});

lyr_CartoLight_0.setVisible(true);lyr_tlm_kantonsgebiet_1.setVisible(true);lyr_SchutzgebieteProNaturaLuzern_2.setVisible(true);lyr_SchutzgebieteProNaturaLuzernPunkte_3.setVisible(true);
var layersList = [lyr_CartoLight_0,group_AVundGemeindegrenzen,group_SchutzgebieteSchutzverordnungen];
lyr_tlm_kantonsgebiet_1.set('fieldAliases', {'id': 'id', 'uuid': 'uuid', 'datum_aenderung': 'datum_aenderung', 'datum_erstellung': 'datum_erstellung', 'erstellung_jahr': 'erstellung_jahr', 'erstellung_monat': 'erstellung_monat', 'grund_aenderung': 'grund_aenderung', 'herkunft': 'herkunft', 'herkunft_jahr': 'herkunft_jahr', 'herkunft_monat': 'herkunft_monat', 'revision_jahr': 'revision_jahr', 'revision_monat': 'revision_monat', 'revision_qualitaet': 'revision_qualitaet', 'objektart': 'objektart', 'kantonsnummer': 'kantonsnummer', 'see_flaeche': 'see_flaeche', 'kantonsflaeche': 'kantonsflaeche', 'name': 'name', 'icc': 'icc', 'einwohnerzahl': 'einwohnerzahl', });
lyr_SchutzgebieteProNaturaLuzern_2.set('fieldAliases', {'fid': 'fid', 'Objektnummer': 'Objektnummer', 'Name': 'Name', 'sektion': 'sektion', });
lyr_SchutzgebieteProNaturaLuzernPunkte_3.set('fieldAliases', {'fid': 'fid', 'Schutzgebiet': 'Schutzgebiet', });
lyr_tlm_kantonsgebiet_1.set('fieldImages', {'id': 'TextEdit', 'uuid': 'TextEdit', 'datum_aenderung': 'DateTime', 'datum_erstellung': 'DateTime', 'erstellung_jahr': 'Range', 'erstellung_monat': 'Range', 'grund_aenderung': 'TextEdit', 'herkunft': 'TextEdit', 'herkunft_jahr': 'Range', 'herkunft_monat': 'Range', 'revision_jahr': 'Range', 'revision_monat': 'Range', 'revision_qualitaet': 'TextEdit', 'objektart': 'TextEdit', 'kantonsnummer': 'Range', 'see_flaeche': 'TextEdit', 'kantonsflaeche': 'TextEdit', 'name': 'TextEdit', 'icc': 'TextEdit', 'einwohnerzahl': 'Range', });
lyr_SchutzgebieteProNaturaLuzern_2.set('fieldImages', {'fid': 'TextEdit', 'Objektnummer': 'Range', 'Name': 'TextEdit', 'sektion': 'TextEdit', });
lyr_SchutzgebieteProNaturaLuzernPunkte_3.set('fieldImages', {'fid': 'TextEdit', 'Schutzgebiet': 'TextEdit', });
lyr_tlm_kantonsgebiet_1.set('fieldLabels', {'id': 'no label', 'uuid': 'no label', 'datum_aenderung': 'no label', 'datum_erstellung': 'no label', 'erstellung_jahr': 'no label', 'erstellung_monat': 'no label', 'grund_aenderung': 'no label', 'herkunft': 'no label', 'herkunft_jahr': 'no label', 'herkunft_monat': 'no label', 'revision_jahr': 'no label', 'revision_monat': 'no label', 'revision_qualitaet': 'no label', 'objektart': 'no label', 'kantonsnummer': 'no label', 'see_flaeche': 'no label', 'kantonsflaeche': 'no label', 'name': 'no label', 'icc': 'no label', 'einwohnerzahl': 'no label', });
lyr_SchutzgebieteProNaturaLuzern_2.set('fieldLabels', {'fid': 'no label', 'Objektnummer': 'no label', 'Name': 'no label', 'sektion': 'no label', });
lyr_SchutzgebieteProNaturaLuzernPunkte_3.set('fieldLabels', {'fid': 'no label', 'Schutzgebiet': 'no label', });
lyr_SchutzgebieteProNaturaLuzernPunkte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});