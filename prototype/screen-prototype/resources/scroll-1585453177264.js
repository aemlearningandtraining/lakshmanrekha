(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-644dc4b1-814f-41c3-b4ba-c09bd1ad2e39 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-644dc4b1-814f-41c3-b4ba-c09bd1ad2e39 #s-Content .layoutWrapper").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-644dc4b1-814f-41c3-b4ba-c09bd1ad2e39 #s-All .layoutWrapper").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-9265f9d1-dbba-4713-96cc-821e55565cad .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-bb250d04-5e6c-42ec-9ba0-0187bdd2ed2a .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);