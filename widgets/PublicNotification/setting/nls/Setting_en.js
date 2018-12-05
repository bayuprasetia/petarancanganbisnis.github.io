// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/PublicNotification/setting/nls/strings":{searchSourceSetting:{title:"Search and Buffer Settings",mainHint:"You can enable text searches of addresses and features, geometry digitizing, and buffering."},addressSourceSetting:{title:"Address Layers",mainHint:"You can specify which addressee label layer(s) are available."},notificationSetting:{title:"Notification Options",mainHint:"You can specify which types of notification are available."},groupingLabels:{addressSources:"Layer to use to select addressee layers",
averyStickersDetails:"Avery(r) stickers",csvDetails:"Comma-separated values (CSV) file",drawingTools:"Drawing tools for specifying area",featureLayerDetails:"Feature layer",geocoderDetails:"Geocoder",labelFormats:"Available label formats",printingOptions:"Options for printed label pages",searchSources:"Search sources",stickerFormatDetails:"Label page parameters"},hints:{alignmentAids:"Marks added to label page to help you to align the page with your printer",csvNameList:"A comma-separated list of case-sensitive field names",
horizontalGap:"Space between two labels in a row",insetToLabel:"Space between side of label and start of text",labelFormatDescription:"How label style is presented in widget format options list",labelFormatDescriptionHint:"Tooltip to supplement description in format options list",labelHeight:"Height of each label on the page",labelWidth:"Width of each label on the page",localSearchRadius:"Specifies the radius of an area around the current map center that is used to boost the rank of geocoding candidates so that candidates closest to the location are returned first",
rasterResolution:"100 pixels per inch approximately matches screen resolution. The higher the resolution, the more browser memory is needed. Browsers differ in their ability to gracefully handle large memory demands.",selectionListOfOptionsToDisplay:"Checked items are displayed as options in the widget; change ordering as desired",verticalGap:"Space between two labels in a column"},propertyLabels:{bufferDefaultDistance:"Default buffer distance",bufferUnits:"Buffer units to provide in widget",countryRegionCodes:"Country or region codes",
description:"Description",descriptionHint:"Description hint",displayField:"Display field",drawingToolsFreehandPolygon:"freehand polygon",drawingToolsLine:"line",drawingToolsPoint:"point",drawingToolsPolygon:"polygon",drawingToolsPolyline:"polyline",enableLocalSearch:"Enable local search",exactMatch:"Exact match",fontSizeAlignmentNote:"Font size for note about print margins",gridDarkness:"Grid darkness",gridlineLeftInset:"Left gridline inset",gridlineMajorTickMarksGap:"Major tick marks every",gridlineMinorTickMarksGap:"Minor tick marks every",
gridlineRightInset:"Right gridline inset",labelBorderDarkness:"Label border darkness",labelBottomEdge:"Bottom edge of labels on page",labelFontSize:"Font size",labelHeight:"Label height",labelHorizontalGap:"Horizontal gap",labelInitialInset:"Inset to label text",labelLeftEdge:"Left edge of labels on page",labelMaxLineCount:"Maximum number of lines in label",labelPageHeight:"Page height",labelPageWidth:"Page width",labelRightEdge:"Right edge of labels on page",labelsInAColumn:"Number of labels in a column",
labelsInARow:"Number of labels in a row",labelTopEdge:"Top edge of labels on page",labelVerticalGap:"Vertical gap",labelWidth:"Label width",limitSearchToMapExtent:"Only search in current map extent",maximumResults:"Maximum results",maximumSuggestions:"Maximum suggestions",minimumScale:"Minimum scale",name:"Name",percentBlack:"% black",pixels:"pixels",pixelsPerInch:"pixels per inch",placeholderText:"Placeholder text",placeholderTextForAllSources:"Placeholder text for searching all sources",radius:"Radius",
rasterResolution:"Raster resolution",searchFields:"Search fields",showAlignmentAids:"Show alignment aids on page",showGridTickMarks:"Show grid tick marks",showLabelOutlines:"Show label outlines",showPopupForFoundItem:"Show pop-up for the found feature or location",tool:"Tools",units:"Units",url:"URL",urlToGeometryService:"URL to geometry service",useRelatedRecords:"Use its related records",useSecondarySearchLayer:"Use secondary selection layer",useSelectionDrawTools:"Use selection drawing tools",
useVectorFonts:"Use vector fonts (Latin fonts only)",zoomScale:"Zoom scale"},buttons:{addAddressSource:"Add layer containing address labels in its popup",addLabelFormat:"Add a label format",addSearchSource:"Add a search source",set:"Set"},placeholders:{averyExample:"e.g., Avery(r) label ${averyPartNumber}",countryRegionCodes:"e.g., USA,CHN",descriptionCSV:"Comma-separated values",descriptionPDF:"PDF label ${heightLabelIn} x ${widthLabelIn} inches; ${labelsPerPage} per page"},tooltips:{getWebmapFeatureLayer:"Get the feature layer from the webmap",
openCountryCodes:"Click to get more information about codes",openFieldSelector:"Click to open a field selector",setAndValidateURL:"Set and validate the URL"},problems:{noAddresseeLayers:"Please specify at least one addressee layer",noBufferUnitsForDrawingTools:"Please configure at least one buffer unit for the drawing tools",noBufferUnitsForSearchSource:'Please configure at least one buffer unit for search source "${sourceName}"',noGeometryServiceURL:"Please configure the URL to the geometry service",
noNotificationLabelFormats:"Please specify at least one notification label format",noSearchSourceFields:'Please configure one or more search fields for search source "${sourceName}"',noSearchSourceURL:'Please configure the URL for search source "${sourceName}"'},querySourceSetting:{sourceSetting:"Search source settings",instruction:"Add and configure geocode services or feature layers as search sources. These specified sources determine what is searchable within the search box.",add:"Add search source",
addGeocoder:"Add geocoder",geocoder:"Geocoder",setLayerSource:"Set layer source",setGeocoderURL:"Set geocoder URL",searchableLayer:"Feature layer",name:"Name",countryCode:"Country or region code(s)",countryCodeEg:"e.g. ",countryCodeHint:"Leaving this value blank will search all countries and regions",generalSetting:"General settings",allPlaceholder:"Placeholder text for searching all: ",showInfoWindowOnSelect:"Show pop-up for the found feature or location",showInfoWindowOnSelect2:"Show pop-up when the feature or location is found.",
searchInCurrentMapExtent:"Only search in current map extent",zoomScale:"Zoom scale",locatorUrl:"Geocoder URL",locatorName:"Geocoder name",locatorExample:"Example",locatorWarning:"This version of geocoding service is not supported. The widget supports geocoding service 10.1 and above.",locatorTips:"Suggestions are not available because the geocoding service doesn't support suggest capability.",layerSource:"Layer source",searchLayerTips:"Suggestions are not available because the feature service doesn't support pagination capability.",
placeholder:"Placeholder text",searchFields:"Search fields",displayField:"Display field",exactMatch:"Exact match",maxSuggestions:"Maximum suggestions",maxResults:"Maximum results",enableLocalSearch:"Enable local search",minScale:"Min scale",minScaleHint:"When the map scale is larger than this scale, local search will be applied",radius:"Radius",radiusHint:"Specifies the radius of an area around current map center that is used to boost the rank of geocoding candidates so that candidates closest to the location are returned first",
meters:"Meters",setSearchFields:"Set search fields",set:"Set",fieldSearchable:"searchable",fieldName:"Name",fieldAlias:"Alias",ok:"OK",cancel:"Cancel",invalidUrlTip:"The URL ${URL} is invalid or inaccessible.",locateResults:"Locate results",panTo:"Pan to",zoomToScale:"Zoom to scale"},_localized:{}}});