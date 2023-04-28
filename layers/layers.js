var wms_layers = [];

var lyr_MDT02ETRS89HU3010533COB2_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "MDT02-ETRS89-HU30-1053-3-COB2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MDT02ETRS89HU3010533COB2_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-503514.616121, 4392403.175148, -484471.607616, 4404663.039656]
                            })
                        });
var lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ideandalucia.es/wms/ortofoto2016",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortofotografia_2016_rgb",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofografia de Andalucía 2016 Color RGB (0.50m Pixel / 0.25m Pixel)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_1, 0]);
var format_230414_2 = new ol.format.GeoJSON();
var features_230414_2 = format_230414_2.readFeatures(json_230414_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230414_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230414_2.addFeatures(features_230414_2);
var lyr_230414_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_230414_2, 
                style: style_230414_2,
                interactive: true,
                title: '230414'
            });
var lyr_Catastro_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?SRS%3DEPS%0AG:23029%26bbox%3D511950,4662900,512150,4663100%26width%3D756%26heig%0Aht%3D756%26transparent%3DNo%26layers%3Dcatastro",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_3, 0]);

lyr_MDT02ETRS89HU3010533COB2_0.setVisible(true);lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_1.setVisible(true);lyr_230414_2.setVisible(true);lyr_Catastro_3.setVisible(true);
var layersList = [lyr_MDT02ETRS89HU3010533COB2_0,lyr_OrtofografiadeAndaluca2016ColorRGB050mPixel025mPixel_1,lyr_230414_2,lyr_Catastro_3];
lyr_230414_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', });
lyr_230414_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Cam. Maker': 'TextEdit', 'Cam. Model': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'DateTime', 'Images': 'TextEdit', });
lyr_230414_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Name': 'no label', 'Date': 'no label', 'Time': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Altitude': 'no label', 'North': 'no label', 'Azimuth': 'no label', 'Cam. Maker': 'no label', 'Cam. Model': 'no label', 'Title': 'no label', 'Comment': 'no label', 'Path': 'no label', 'RelPath': 'no label', 'Timestamp': 'no label', 'Images': 'no label', });
lyr_230414_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});