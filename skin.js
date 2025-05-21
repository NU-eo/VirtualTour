// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: apt_skin.ggsk
// Generated 2025-05-21T21:43:50

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_right', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_left', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_floorplan_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('image_hs_description', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popup_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_hs_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_video_youtube_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_controller', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_prev_next', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('width_controls_left', 1, 0, { ignoreInState: 0  });
	player.addVariable('width_controls_right', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_share_buttons', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_phone_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('kb_accessibility', 2, false, { ignoreInState: 1  });
	player.addVariable('selected_filter', 0, "", { ignoreInState: 0  });
	player.addVariable('selected_floor', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_floorMenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('unique_nodes', 0, "", { ignoreInState: 0  });
	player.addVariable('var_tag', 0, "uniqueOffice", { ignoreInState: 1  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('is_office', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_vis_controls_left = {};
		me._variable_vis_controls_left.ggCurrentLogicState = -1;
		me._variable_vis_controls_left.logicBlock = function() {
			var newLogicState_vis_controls_left;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicState_vis_controls_left = 0;
			}
			else {
				newLogicState_vis_controls_left = -1;
			}
			if (me._variable_vis_controls_left.ggCurrentLogicState != newLogicState_vis_controls_left) {
				me._variable_vis_controls_left.ggCurrentLogicState = newLogicState_vis_controls_left;
				if (me._variable_vis_controls_left.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_controls_left', false);
				}
				else {
					player.setVariableValue('vis_controls_left', true);
				}
			}
		}
		me._variable_vis_floorplan = {};
		me._variable_vis_floorplan.ggCurrentLogicState = -1;
		me._variable_vis_floorplan.logicBlock = function() {
			var newLogicState_vis_floorplan;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicState_vis_floorplan = 0;
			}
			else {
				newLogicState_vis_floorplan = -1;
			}
			if (me._variable_vis_floorplan.ggCurrentLogicState != newLogicState_vis_floorplan) {
				me._variable_vis_floorplan.ggCurrentLogicState = newLogicState_vis_floorplan;
				if (me._variable_vis_floorplan.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_floorplan', false);
				}
				else {
					player.setVariableValue('vis_floorplan', false);
				}
			}
		}
		me._variable_vis_video_hs_popup = {};
		me._variable_vis_video_hs_popup.ggCurrentLogicState = -1;
		me._variable_vis_video_hs_popup.logicBlock = function() {
			var newLogicState_vis_video_hs_popup;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicState_vis_video_hs_popup = 0;
			}
			else {
				newLogicState_vis_video_hs_popup = -1;
			}
			if (me._variable_vis_video_hs_popup.ggCurrentLogicState != newLogicState_vis_video_hs_popup) {
				me._variable_vis_video_hs_popup.ggCurrentLogicState = newLogicState_vis_video_hs_popup;
				if (me._variable_vis_video_hs_popup.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_video_hs_popup', true);
				}
				else {
					player.setVariableValue('vis_video_hs_popup', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', true);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_vis_popup = {};
		me._variable_vis_popup.ggCurrentLogicState = -1;
		me._variable_vis_popup.logicBlock = function() {
			var newLogicState_vis_popup;
			if (
				((player.getVariableValue('vis_url_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_video_youtube_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_popup') == true)) || 
				((player.getVariableValue('vis_video_file_popup') == true)) || 
				((player.getVariableValue('vis_video_url_popup') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_map') == true)) || 
				((player.getVariableValue('vis_phone_floorplan') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true)) || 
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_nodes') == true))
			)
			{
				newLogicState_vis_popup = 0;
			}
			else {
				newLogicState_vis_popup = -1;
			}
			if (me._variable_vis_popup.ggCurrentLogicState != newLogicState_vis_popup) {
				me._variable_vis_popup.ggCurrentLogicState = newLogicState_vis_popup;
				if (me._variable_vis_popup.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_popup', true);
				}
				else {
					player.setVariableValue('vis_popup', false);
				}
			}
		}
		me._variable_is_office = {};
		me._variable_is_office.ggCurrentLogicState = -1;
		me._variable_is_office.logicBlock = function() {
			var newLogicState_is_office;
			if (
				((me.ggUserdata.tags.indexOf("office") != -1))
			)
			{
				newLogicState_is_office = 0;
			}
			else {
				newLogicState_is_office = -1;
			}
			if (me._variable_is_office.ggCurrentLogicState != newLogicState_is_office) {
				me._variable_is_office.ggCurrentLogicState = newLogicState_is_office;
				if (me._variable_is_office.ggCurrentLogicState == 0) {
					player.setVariableValue('is_office', true);
				}
				else {
					player.setVariableValue('is_office', false);
				}
			}
		}
		el=me._container_controls=document.createElement('div');
		el.ggId="container_controls";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_controls.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_controls.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_controls.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_controls.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_controls.style.transition='';
				if (me._container_controls.ggCurrentLogicStateVisible == 0) {
					me._container_controls.style.visibility=(Number(me._container_controls.style.opacity)>0||!me._container_controls.style.opacity)?'inherit':'hidden';
					me._container_controls.ggVisible=true;
				}
				else {
					me._container_controls.style.visibility="hidden";
					me._container_controls.ggVisible=false;
				}
			}
		}
		me._container_controls.logicBlock_visible();
		me._container_controls.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_right=document.createElement('div');
		el.ggId="controls_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px 0px 0px 18px;';
		hs+='bottom : 24px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_right.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('has_fullscreen') == true)) && 
				((player.getVariableValue('opt_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controls_right.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controls_right.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controls_right.style.transition='';
				if (me._controls_right.ggCurrentLogicStateVisible == 0) {
					me._controls_right.style.visibility=(Number(me._controls_right.style.opacity)>0||!me._controls_right.style.opacity)?'inherit':'hidden';
					me._controls_right.ggVisible=true;
				}
				else {
					me._controls_right.style.visibility="hidden";
					me._controls_right.ggVisible=false;
				}
			}
		}
		me._controls_right.logicBlock_visible();
		me._controls_right.ggUpdatePosition=function (useTransition) {
		}
		el=me._cr_fullscreen=document.createElement('div');
		el.ggId="cr_fullscreen";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('has_fullscreen') == true)) && 
				((player.getVariableValue('opt_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_fullscreen.style.transition='';
				if (me._cr_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._cr_fullscreen.style.visibility=(Number(me._cr_fullscreen.style.opacity)>0||!me._cr_fullscreen.style.opacity)?'inherit':'hidden';
					me._cr_fullscreen.ggVisible=true;
				}
				else {
					me._cr_fullscreen.style.visibility="hidden";
					me._cr_fullscreen.ggVisible=false;
				}
			}
		}
		me._cr_fullscreen.logicBlock_visible();
		me._cr_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._cr_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._cr_fs_exit=document.createElement('div');
		els=me._cr_fs_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDggMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW'+
			'5lIHgyPSIzNS41NCIgeTE9IjE2LjQ1IiB4MT0iNDcuNjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjI4LjQ2Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgyPSIyOC40NiIgeTE9IjQ3LjU1IiB4MT0iMTYuMzUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1p'+
			'dGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjM1LjU0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._cr_fs_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cr_fs_exit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjQ4IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0ID'+
			'E2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iMzUuNTQiIHkxPSIxNi40NSIgeDE9IjQ3LjY1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSIyOC40NiIvPgogIDxwb2x5bGluZSBwb2ludHM9IjE2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9r'+
			'ZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iMjguNDYiIHkxPSI0Ny41NSIgeDE9IjE2LjM1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSIzNS41NCIvPgogPC9nPgo8L3N2Zz4K';
		me._cr_fs_exit__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cr_fs_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_fs_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_fs_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_fs_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_fs_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_fs_exit.style.transition='';
				if (me._cr_fs_exit.ggCurrentLogicStateVisible == 0) {
					me._cr_fs_exit.style.visibility=(Number(me._cr_fs_exit.style.opacity)>0||!me._cr_fs_exit.style.opacity)?'inherit':'hidden';
					me._cr_fs_exit.ggVisible=true;
				}
				else {
					me._cr_fs_exit.style.visibility="hidden";
					me._cr_fs_exit.ggVisible=false;
				}
			}
		}
		me._cr_fs_exit.logicBlock_visible();
		me._cr_fs_exit.onmouseenter=function (e) {
			me._cr_fs_exit__img.style.visibility='hidden';
			me._cr_fs_exit__imgo.style.visibility='inherit';
			me.elementMouseOver['cr_fs_exit']=true;
		}
		me._cr_fs_exit.onmouseleave=function (e) {
			me._cr_fs_exit__img.style.visibility='inherit';
			me._cr_fs_exit__imgo.style.visibility='hidden';
			me.elementMouseOver['cr_fs_exit']=false;
		}
		me._cr_fs_exit.ggUpdatePosition=function (useTransition) {
		}
		me._cr_fullscreen.appendChild(me._cr_fs_exit);
		el=me._cr_fs_enter=document.createElement('div');
		els=me._cr_fs_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgyPSI0OCIgeT'+
			'E9IjI4IiB4MT0iMzUuODkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjE2Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgyPSIxNiIgeTE9IjM2IiB4MT0iMjguMTEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQ4Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._cr_fs_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cr_fs_enter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjM1LjU0IDE2IDQ4IDE2IDQ4IDE2IDQ4IDI4LjQ2IiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iNDgiIHkxPSIyOCIgeDE9IjM1Ljg5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSIxNiIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjQ2IDQ4IDE2IDQ4IDE2IDQ4IDE2IDM1LjU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7'+
			'IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iMTYiIHkxPSIzNiIgeDE9IjI4LjExIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0OCIvPgogPC9nPgo8L3N2Zz4K';
		me._cr_fs_enter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cr_fs_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cr_fs_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cr_fs_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cr_fs_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cr_fs_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cr_fs_enter.style.transition='';
				if (me._cr_fs_enter.ggCurrentLogicStateVisible == 0) {
					me._cr_fs_enter.style.visibility="hidden";
					me._cr_fs_enter.ggVisible=false;
				}
				else {
					me._cr_fs_enter.style.visibility=(Number(me._cr_fs_enter.style.opacity)>0||!me._cr_fs_enter.style.opacity)?'inherit':'hidden';
					me._cr_fs_enter.ggVisible=true;
				}
			}
		}
		me._cr_fs_enter.logicBlock_visible();
		me._cr_fs_enter.onmouseenter=function (e) {
			me._cr_fs_enter__img.style.visibility='hidden';
			me._cr_fs_enter__imgo.style.visibility='inherit';
			me.elementMouseOver['cr_fs_enter']=true;
		}
		me._cr_fs_enter.onmouseleave=function (e) {
			me._cr_fs_enter__img.style.visibility='inherit';
			me._cr_fs_enter__imgo.style.visibility='hidden';
			me.elementMouseOver['cr_fs_enter']=false;
		}
		me._cr_fs_enter.ggUpdatePosition=function (useTransition) {
		}
		me._cr_fullscreen.appendChild(me._cr_fs_enter);
		me._controls_right.appendChild(me._cr_fullscreen);
		me._container_controls.appendChild(me._controls_right);
		el=me._container_controls_left=document.createElement('div');
		el.ggId="container_controls_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 24px;';
		hs+='height : 36px;';
		hs+='left : '+player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))+'px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_controls_left.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_controls_left') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('vis_share') == true))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('width_controls_left') > Number("0")))
			)
			{
				newLogicStatePosition = 5;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container_controls_left.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container_controls_left.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container_controls_left.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me._container_controls_left.ggCurrentLogicStatePosition == 0) {
					me._container_controls_left.style.left='29px';
					me._container_controls_left.style.bottom='24px';
				}
				else if (me._container_controls_left.ggCurrentLogicStatePosition == 1) {
					me._container_controls_left.style.left='calc(25% + 16px)';
					me._container_controls_left.style.bottom='24px';
				}
				else if (me._container_controls_left.ggCurrentLogicStatePosition == 2) {
					me._container_controls_left.style.left='calc(25% + 16px)';
					me._container_controls_left.style.bottom='24px';
				}
				else if (me._container_controls_left.ggCurrentLogicStatePosition == 3) {
					me._container_controls_left.style.left='calc(25% + 16px)';
					me._container_controls_left.style.bottom='24px';
				}
				else if (me._container_controls_left.ggCurrentLogicStatePosition == 4) {
					me._container_controls_left.style.left='236px';
					me._container_controls_left.style.bottom='24px';
				}
				else if (me._container_controls_left.ggCurrentLogicStatePosition == 5) {
					me._container_controls_left.style.left=''+player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))+'px';
					me._container_controls_left.style.bottom='24px';
				}
				else {
					me._container_controls_left.style.left=''+player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''))+'px';
					me._container_controls_left.style.bottom='24px';
				}
			}
		}
		me._container_controls_left.logicBlock_position();
		me._container_controls_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_left=document.createElement('div');
		el.ggId="controls_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 18px 18px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_left_visibility=document.createElement('div');
		el.ggId="controls_left_visibility";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_left_visibility.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_left_visibility.ggUpdatePosition=function (useTransition) {
		}
		el=me._cl_map=document.createElement('div');
		els=me._cl_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTMyLDE2QTEwLjY3LDEwLjY3LDAsMCwxLDQyLjY3LDI2LjY3aDBjMCw2LjkxLTUuNTMsMTctMTAuNjcsMjEuMzNoMGMtNS4xNC00LjM1LTEwLjY3LTE0LjQyLTEwLjY3LTIxLjMzaDBBMTAuNjcsMTAuNjcsMCwwLDEsMzIsMTZaIi'+
			'BzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KICA8Y2lyY2xlIHI9IjEuMzMiIGN4PSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiBjeT0iMjYuNjciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_map__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cl_map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwYXRoIGQ9Ik0zMiwxNkExMC42NywxMC42NywwLDAsMSw0Mi42NywyNi42N2gwYzAsNi45MS01Lj'+
			'UzLDE3LTEwLjY3LDIxLjMzaDBjLTUuMTQtNC4zNS0xMC42Ny0xNC40Mi0xMC42Ny0yMS4zM2gwQTEwLjY3LDEwLjY3LDAsMCwxLDMyLDE2WiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGNpcmNsZSByPSIxLjMzIiBjeD0iMzIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgY3k9IjI2LjY3Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._cl_map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cl_map";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_map.style.transition='';
				if (me._cl_map.ggCurrentLogicStateVisible == 0) {
					me._cl_map.style.visibility=(Number(me._cl_map.style.opacity)>0||!me._cl_map.style.opacity)?'inherit':'hidden';
					me._cl_map.ggVisible=true;
				}
				else {
					me._cl_map.style.visibility="hidden";
					me._cl_map.ggVisible=false;
				}
			}
		}
		me._cl_map.logicBlock_visible();
		me._cl_map.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_map_full') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('vis_map_full') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', !player.getVariableValue('vis_info'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			player.setVariableValue('vis_share', false);
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_phone_map') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_phone_map') == false))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
		}
		me._cl_map.onmouseenter=function (e) {
			me._cl_map__img.style.visibility='hidden';
			me._cl_map__imgo.style.visibility='inherit';
			me.elementMouseOver['cl_map']=true;
		}
		me._cl_map.onmouseleave=function (e) {
			me._cl_map__img.style.visibility='inherit';
			me._cl_map__imgo.style.visibility='hidden';
			me.elementMouseOver['cl_map']=false;
		}
		me._cl_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._cl_map_active=document.createElement('div');
		els=me._cl_map_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwYXRoIGQ9Ik0zMiwxNkExMC42NywxMC42NywwLDAsMSw0Mi42NywyNi42N2gwYzAsNi45MS01Lj'+
			'UzLDE3LTEwLjY3LDIxLjMzaDBjLTUuMTQtNC4zNS0xMC42Ny0xNC40Mi0xMC42Ny0yMS4zM2gwQTEwLjY3LDEwLjY3LDAsMCwxLDMyLDE2WiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4Ii8+CiAgPGNpcmNsZSByPSIxLjMzIiBjeD0iMzIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgY3k9IjI2LjY3Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._cl_map_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cl_map_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_map_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_map_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true)) || 
				((player.getVariableValue('vis_map_full') == true)) || 
				((player.getVariableValue('vis_phone_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_map_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_map_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_map_active.style.transition='';
				if (me._cl_map_active.ggCurrentLogicStateVisible == 0) {
					me._cl_map_active.style.visibility=(Number(me._cl_map_active.style.opacity)>0||!me._cl_map_active.style.opacity)?'inherit':'hidden';
					me._cl_map_active.ggVisible=true;
				}
				else {
					me._cl_map_active.style.visibility="hidden";
					me._cl_map_active.ggVisible=false;
				}
			}
		}
		me._cl_map_active.logicBlock_visible();
		me._cl_map_active.ggUpdatePosition=function (useTransition) {
		}
		me._cl_map.appendChild(me._cl_map_active);
		me._controls_left_visibility.appendChild(me._cl_map);
		el=me._cl_thumbnails=document.createElement('div');
		els=me._cl_thumbnails__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHJlY3QgeD0iMTYiIGhlaWdodD0iMTAuNjciIHdpZHRoPSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5PSIzNy4zMyIvPgogIDxyZWN0IHg9IjM3Lj'+
			'MzIiBoZWlnaHQ9IjEwLjY3IiB3aWR0aD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeT0iMzcuMzMiLz4KICA8cmVjdCB4PSIxNiIgaGVpZ2h0PSIxMC42NyIgd2lkdGg9IjEwLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHk9IjE2Ii8+CiAgPHJlY3QgeD0iMzcuMzMiIGhlaWdodD0iMTAuNjciIHdpZHRoPSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDox'+
			'MDtzdHJva2Utd2lkdGg6NHB4IiB5PSIxNiIvPgogPC9nPgo8L3N2Zz4K';
		me._cl_thumbnails__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cl_thumbnails__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxyZWN0IHg9IjE2IiBoZWlnaHQ9IjEwLjY3IiB3aWR0aD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbm'+
			'U7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeT0iMzcuMzMiLz4KICA8cmVjdCB4PSIzNy4zMyIgaGVpZ2h0PSIxMC42NyIgd2lkdGg9IjEwLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHk9IjM3LjMzIi8+CiAgPHJlY3QgeD0iMTYiIGhlaWdodD0iMTAuNjciIHdpZHRoPSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Ut'+
			'd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5PSIxNiIvPgogIDxyZWN0IHg9IjM3LjMzIiBoZWlnaHQ9IjEwLjY3IiB3aWR0aD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_thumbnails__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cl_thumbnails";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_thumbnails.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_thumbnails.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_thumbnails.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_thumbnails.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_thumbnails.style.transition='';
				if (me._cl_thumbnails.ggCurrentLogicStateVisible == 0) {
					me._cl_thumbnails.style.visibility=(Number(me._cl_thumbnails.style.opacity)>0||!me._cl_thumbnails.style.opacity)?'inherit':'hidden';
					me._cl_thumbnails.ggVisible=true;
				}
				else {
					me._cl_thumbnails.style.visibility="hidden";
					me._cl_thumbnails.ggVisible=false;
				}
			}
		}
		me._cl_thumbnails.logicBlock_visible();
		me._cl_thumbnails.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			player.setVariableValue('vis_share', false);
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_phone_thumbs') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_phone_thumbs') == false))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.setVariableValue('vis_thumbnails', !player.getVariableValue('vis_thumbnails'));
		}
		me._cl_thumbnails.onmouseenter=function (e) {
			me._cl_thumbnails__img.style.visibility='hidden';
			me._cl_thumbnails__imgo.style.visibility='inherit';
			me.elementMouseOver['cl_thumbnails']=true;
		}
		me._cl_thumbnails.onmouseleave=function (e) {
			me._cl_thumbnails__img.style.visibility='inherit';
			me._cl_thumbnails__imgo.style.visibility='hidden';
			me.elementMouseOver['cl_thumbnails']=false;
		}
		me._cl_thumbnails.ggUpdatePosition=function (useTransition) {
		}
		el=me._cl_thumbnails_active=document.createElement('div');
		els=me._cl_thumbnails_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxyZWN0IHg9IjE2IiBoZWlnaHQ9IjEwLjY3IiB3aWR0aD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbm'+
			'U7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeT0iMzcuMzMiLz4KICA8cmVjdCB4PSIzNy4zMyIgaGVpZ2h0PSIxMC42NyIgd2lkdGg9IjEwLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHk9IjM3LjMzIi8+CiAgPHJlY3QgeD0iMTYiIGhlaWdodD0iMTAuNjciIHdpZHRoPSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5PSIxNiIvPgogIDxyZWN0IHg9IjM3LjMz'+
			'IiBoZWlnaHQ9IjEwLjY3IiB3aWR0aD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_thumbnails_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cl_thumbnails_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_thumbnails_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_thumbnails_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true)) || 
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_thumbnails_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_thumbnails_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_thumbnails_active.style.transition='';
				if (me._cl_thumbnails_active.ggCurrentLogicStateVisible == 0) {
					me._cl_thumbnails_active.style.visibility=(Number(me._cl_thumbnails_active.style.opacity)>0||!me._cl_thumbnails_active.style.opacity)?'inherit':'hidden';
					me._cl_thumbnails_active.ggVisible=true;
				}
				else {
					me._cl_thumbnails_active.style.visibility="hidden";
					me._cl_thumbnails_active.ggVisible=false;
				}
			}
		}
		me._cl_thumbnails_active.logicBlock_visible();
		me._cl_thumbnails_active.ggUpdatePosition=function (useTransition) {
		}
		me._cl_thumbnails.appendChild(me._cl_thumbnails_active);
		me._controls_left_visibility.appendChild(me._cl_thumbnails);
		el=me._cl_floorplan=document.createElement('div');
		els=me._cl_floorplan__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gcG9pbnRzPSIyNi42NyAyMS4zMyAzNy4zMyAxNiA0OCAyMS4zMyA0OCA0OCAzNy4zMyA0Mi42NyAyNi42NyA0OCAxNiA0Mi42NyAxNiAxNiAyNi42NyAyMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2'+
			'UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4Ii8+CiAgPGxpbmUgeDI9IjM3LjMzIiB5MT0iMTYiIHgxPSIzNy4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDIuNjciLz4KICA8bGluZSB4Mj0iMjYuNjciIHkxPSIyMS4zMyIgeDE9IjI2LjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0OCIvPgogPC9nPgo8L3N2Zz4K';
		me._cl_floorplan__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cl_floorplan__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5Z29uIHBvaW50cz0iMjYuNjcgMjEuMzMgMzcuMzMgMTYgNDggMjEuMzMgNDggNDggMzcuMz'+
			'MgNDIuNjcgMjYuNjcgNDggMTYgNDIuNjcgMTYgMTYgMjYuNjcgMjEuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIzNy4zMyIgeTE9IjE2IiB4MT0iMzcuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQyLjY3Ii8+CiAgPGxpbmUgeDI9IjI2LjY3IiB5MT0iMjEuMzMiIHgxPSIyNi42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJv'+
			'a2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_floorplan__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cl_floorplan";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_floorplan.style.transition='';
				if (me._cl_floorplan.ggCurrentLogicStateVisible == 0) {
					me._cl_floorplan.style.visibility=(Number(me._cl_floorplan.style.opacity)>0||!me._cl_floorplan.style.opacity)?'inherit':'hidden';
					me._cl_floorplan.ggVisible=true;
				}
				else {
					me._cl_floorplan.style.visibility="hidden";
					me._cl_floorplan.ggVisible=false;
				}
			}
		}
		me._cl_floorplan.logicBlock_visible();
		me._cl_floorplan.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_floorplan_full') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
			}
			if (
				(
					((player.getVariableValue('vis_floorplan_full') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			player.setVariableValue('vis_share', false);
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_phone_floorplan') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player.getVariableValue('vis_phone_floorplan') == false))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', !player.getVariableValue('vis_phone_floorplan'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
		}
		me._cl_floorplan.onmouseenter=function (e) {
			me._cl_floorplan__img.style.visibility='hidden';
			me._cl_floorplan__imgo.style.visibility='inherit';
			me.elementMouseOver['cl_floorplan']=true;
		}
		me._cl_floorplan.onmouseleave=function (e) {
			me._cl_floorplan__img.style.visibility='inherit';
			me._cl_floorplan__imgo.style.visibility='hidden';
			me.elementMouseOver['cl_floorplan']=false;
		}
		me._cl_floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._cl_floorplan_active=document.createElement('div');
		els=me._cl_floorplan_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5Z29uIHBvaW50cz0iMjYuNjcgMjEuMzMgMzcuMzMgMTYgNDggMjEuMzMgNDggNDggMzcuMz'+
			'MgNDIuNjcgMjYuNjcgNDggMTYgNDIuNjcgMTYgMTYgMjYuNjcgMjEuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgyPSIzNy4zMyIgeTE9IjE2IiB4MT0iMzcuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQyLjY3Ii8+CiAgPGxpbmUgeDI9IjI2LjY3IiB5MT0iMjEuMzMiIHgxPSIyNi42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJv'+
			'a2Utd2lkdGg6NHB4IiB5Mj0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_floorplan_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cl_floorplan_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_floorplan_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_floorplan_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_floorplan_full') == true)) || 
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_floorplan_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_floorplan_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_floorplan_active.style.transition='';
				if (me._cl_floorplan_active.ggCurrentLogicStateVisible == 0) {
					me._cl_floorplan_active.style.visibility=(Number(me._cl_floorplan_active.style.opacity)>0||!me._cl_floorplan_active.style.opacity)?'inherit':'hidden';
					me._cl_floorplan_active.ggVisible=true;
				}
				else {
					me._cl_floorplan_active.style.visibility="hidden";
					me._cl_floorplan_active.ggVisible=false;
				}
			}
		}
		me._cl_floorplan_active.logicBlock_visible();
		me._cl_floorplan_active.ggUpdatePosition=function (useTransition) {
		}
		me._cl_floorplan.appendChild(me._cl_floorplan_active);
		me._controls_left_visibility.appendChild(me._cl_floorplan);
		el=me._cl_share=document.createElement('div');
		els=me._cl_share__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQxLjI1IiB5MT0iMzMuNTMiIHgxPSIyMy4xMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDQuMDEiLz4KICA8bGluZSB4Mj0iMjIuNz'+
			'YiIHkxPSIyMCIgeDE9IjQxLjI1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIzMC42NyIvPgogIDxjaXJjbGUgcj0iMi42NyIgY3g9IjQzLjU1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIGN5PSIxOC42NyIvPgogIDxjaXJjbGUgcj0iMi42NyIgY3g9IjIwLjQ1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIGN5PSIzMiIvPgogIDxjaXJj'+
			'bGUgcj0iMi42NyIgY3g9IjQzLjU1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIGN5PSI0NS4zMyIvPgogPC9nPgo8L3N2Zz4K';
		me._cl_share__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._cl_share__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgyPSI0MS4yNSIgeTE9IjMzLjUzIiB4MT0iMjMuMTEiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQ0LjAxIi8+CiAgPGxpbmUgeDI9IjIyLjc2IiB5MT0iMjAiIHgxPSI0MS4yNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMzAuNjciLz4KICA8Y2lyY2xlIHI9IjIuNjciIGN4PSI0My41NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0'+
			'eToxIiBjeT0iMTguNjciLz4KICA8Y2lyY2xlIHI9IjIuNjciIGN4PSIyMC40NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiBjeT0iMzIiLz4KICA8Y2lyY2xlIHI9IjIuNjciIGN4PSI0My41NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiBjeT0iNDUuMzMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_share__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="cl_share";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_share.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_share.style.transition='';
				if (me._cl_share.ggCurrentLogicStateVisible == 0) {
					me._cl_share.style.visibility=(Number(me._cl_share.style.opacity)>0||!me._cl_share.style.opacity)?'inherit':'hidden';
					me._cl_share.ggVisible=true;
				}
				else {
					me._cl_share.style.visibility="hidden";
					me._cl_share.ggVisible=false;
				}
			}
		}
		me._cl_share.logicBlock_visible();
		me._cl_share.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + player.getPan() + "," + player.getTilt() + "," + player.getFov() + ",4";
if (navigator.canShare) {
  player.setVariableValue('share_api', navigator.canShare({ url: text }) && player.getIsMobile());
  player.setVariableValue('share_url', text);
}
			if (
				(
					((player.getVariableValue('share_api') == true))
				)
			) {
				let shareUrl = player.getVariableValue('share_url');
navigator.share({ url: shareUrl });
			}
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_thumbnails', false);
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_floorplan_full', false);
			player.setVariableValue('vis_image_hs_popup_full', false);
			player.setVariableValue('vis_video_hs_popup', false);
			player.setVariableValue('vis_pdf_hs_popup', false);
			player.setVariableValue('vis_url_hs_popup', false);
			player.setVariableValue('vis_phone_popup', false);
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + (Math.round(player.getPan() * 100) / 100) + "," + (Math.round(player.getTilt() * 100) / 100) + "," + (Math.round(player.getFov() * 100) / 100) + "," + player.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("Текущая панорама была скопирована.");
		}
		me._cl_share.onmouseenter=function (e) {
			me._cl_share__img.style.visibility='hidden';
			me._cl_share__imgo.style.visibility='inherit';
			me.elementMouseOver['cl_share']=true;
		}
		me._cl_share.onmouseleave=function (e) {
			me._cl_share__img.style.visibility='inherit';
			me._cl_share__imgo.style.visibility='hidden';
			me.elementMouseOver['cl_share']=false;
		}
		me._cl_share.ggUpdatePosition=function (useTransition) {
		}
		el=me._cl_share_active=document.createElement('div');
		els=me._cl_share_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgyPSI0MS4yNSIgeTE9IjMzLjUzIiB4MT0iMjMuMTEiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQ0LjAxIi8+CiAgPGxpbmUgeDI9IjIyLjc2IiB5MT0iMjAiIHgxPSI0MS4yNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iMzAuNjciLz4KICA8Y2lyY2xlIHI9IjIuNjciIGN4PSI0My41NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiBjeT0iMTguNjciLz4KICA8Y2lyY2xlIHI9IjIuNjciIGN4PSIyMC40NSIgc3R5bGU9'+
			'ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiBjeT0iMzIiLz4KICA8Y2lyY2xlIHI9IjIuNjciIGN4PSI0My41NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiBjeT0iNDUuMzMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._cl_share_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cl_share_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cl_share_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cl_share_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cl_share_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cl_share_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cl_share_active.style.transition='';
				if (me._cl_share_active.ggCurrentLogicStateVisible == 0) {
					me._cl_share_active.style.visibility=(Number(me._cl_share_active.style.opacity)>0||!me._cl_share_active.style.opacity)?'inherit':'hidden';
					me._cl_share_active.ggVisible=true;
				}
				else {
					me._cl_share_active.style.visibility="hidden";
					me._cl_share_active.ggVisible=false;
				}
			}
		}
		me._cl_share_active.logicBlock_visible();
		me._cl_share_active.ggUpdatePosition=function (useTransition) {
		}
		me._cl_share.appendChild(me._cl_share_active);
		me._controls_left_visibility.appendChild(me._cl_share);
		me._controls_left.appendChild(me._controls_left_visibility);
		el=me._toggle_controls_left=document.createElement('div');
		els=me._toggle_controls_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTQgMzEuNyAzMS45OSA0NS42MyAzMS45OSA0NS42MyAxOC4wNiAzMS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KIC'+
			'A8bGluZSB4Mj0iNDgiIHkxPSIxOC4zNyIgeDE9IjE2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSIxOC4zNyIvPgogPC9nPgo8L3N2Zz4K';
		me._toggle_controls_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_controls_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjQ1Ljk0IDMxLjcgMzEuOTkgNDUuNjMgMzEuOTkgNDUuNjMgMTguMD'+
			'YgMzEuNyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgeDI9IjQ4IiB5MT0iMTguMzciIHgxPSIxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMTguMzciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._toggle_controls_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_controls_left";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._toggle_controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_controls_left.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_controls_left') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._toggle_controls_left.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._toggle_controls_left.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._toggle_controls_left.style.transition='transform 1000ms ease 0ms';
				if (me._toggle_controls_left.ggCurrentLogicStateAngle == 0) {
					me._toggle_controls_left.ggParameter.a = 90;
					me._toggle_controls_left.style.transform=parameterToTransform(me._toggle_controls_left.ggParameter);
				}
				else {
					me._toggle_controls_left.ggParameter.a = -90;
					me._toggle_controls_left.style.transform=parameterToTransform(me._toggle_controls_left.ggParameter);
				}
			}
		}
		me._toggle_controls_left.logicBlock_angle();
		me._toggle_controls_left.onclick=function (e) {
			player.setVariableValue('vis_controls_left', !player.getVariableValue('vis_controls_left'));
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_controls_right', false);
			}
		}
		me._toggle_controls_left.onmouseenter=function (e) {
			me._toggle_controls_left__img.style.visibility='hidden';
			me._toggle_controls_left__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_controls_left']=true;
		}
		me._toggle_controls_left.onmouseleave=function (e) {
			me._toggle_controls_left__img.style.visibility='inherit';
			me._toggle_controls_left__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_controls_left']=false;
		}
		me._toggle_controls_left.ggUpdatePosition=function (useTransition) {
		}
		me._controls_left.appendChild(me._toggle_controls_left);
		me._container_controls_left.appendChild(me._controls_left);
		me._container_controls.appendChild(me._container_controls_left);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((122px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 122px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_controller') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getHasTouch() == false)) && 
				((player.getOS() != 6))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style.transition='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
				else {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
			}
		}
		me._controller.logicBlock_visible();
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_next=document.createElement('div');
		el.ggId="controller_next";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : -68px;';
		hs+='top : calc(50% - ((28px + 8px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_next.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_prev_next') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_next.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_next.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_next.style.transition='background-color 0s';
				if (me._controller_next.ggCurrentLogicStateVisible == 0) {
					me._controller_next.style.visibility=(Number(me._controller_next.style.opacity)>0||!me._controller_next.style.opacity)?'inherit':'hidden';
					me._controller_next.ggVisible=true;
				}
				else {
					me._controller_next.style.visibility="hidden";
					me._controller_next.ggVisible=false;
				}
			}
		}
		me._controller_next.logicBlock_visible();
		me._controller_next.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_next'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_next.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_next.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_next.style.transition='background-color 0s';
				if (me._controller_next.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_next.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_next.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_next.logicBlock_backgroundcolor();
		me._controller_next.onclick=function (e) {
			var currentNodeId = player.getCurrentNode();
var allNodesWithTag;
if (player.getVariableValue('var_tag') == '') {
   allNodesWithTag = player.getNodeIds();
} else {
   allNodesWithTag = player.getNodesWithTag(player.getVariableValue('var_tag'));
}
if (allNodesWithTag.length > 0) {
   var currIndex = allNodesWithTag.indexOf(currentNodeId);
   var nextIndex = 0;
   if (currIndex != -1 && currIndex != allNodesWithTag.length - 1) {
      nextIndex = currIndex + 1;
   }
   player.openNext('{' + allNodesWithTag[nextIndex] + '}');
}
		}
		me._controller_next.onmouseenter=function (e) {
			me.elementMouseOver['controller_next']=true;
			me._controller_next.logicBlock_backgroundcolor();
		}
		me._controller_next.onmouseleave=function (e) {
			me.elementMouseOver['controller_next']=false;
			me._controller_next.logicBlock_backgroundcolor();
		}
		me._controller_next.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_next_icon=document.createElement('div');
		els=me._controller_next_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTcuMDQgMTguMDcgMzAuOTYgMzIuMDEgMzAuOTYgMzIuMDEgMTcuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogIDxwb2x5bGluZSBwb2ludHM9IjMzLjA0IDE4LjA3IDQ2Ljk2IDMyLjAxIDQ2Ljk2IDMyLjAxIDMzLjA0IDQ1LjkzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_next_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._controller_next_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSIxNywxOC4xIDMxLDMyIDMxLDMyIDE3LDQ1LjkgICIvPgogIDxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjMzLDE4LjEgNDcsMzIgNDcs'+
			'MzIgMzMsNDUuOSAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._controller_next_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="controller_next_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_next_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_next_icon.onmouseenter=function (e) {
			me._controller_next_icon__img.style.visibility='hidden';
			me._controller_next_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['controller_next_icon']=true;
		}
		me._controller_next_icon.onmouseleave=function (e) {
			me._controller_next_icon__img.style.visibility='inherit';
			me._controller_next_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['controller_next_icon']=false;
		}
		me._controller_next_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_next.appendChild(me._controller_next_icon);
		me._controller.appendChild(me._controller_next);
		el=me._controller_previous_=document.createElement('div');
		el.ggId="controller_previous ";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 8px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_previous_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_previous_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_prev_next') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_previous_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_previous_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_previous_.style.transition='background-color 0s';
				if (me._controller_previous_.ggCurrentLogicStateVisible == 0) {
					me._controller_previous_.style.visibility=(Number(me._controller_previous_.style.opacity)>0||!me._controller_previous_.style.opacity)?'inherit':'hidden';
					me._controller_previous_.ggVisible=true;
				}
				else {
					me._controller_previous_.style.visibility="hidden";
					me._controller_previous_.ggVisible=false;
				}
			}
		}
		me._controller_previous_.logicBlock_visible();
		me._controller_previous_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_previous_'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_previous_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_previous_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_previous_.style.transition='background-color 0s';
				if (me._controller_previous_.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_previous_.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_previous_.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_previous_.logicBlock_backgroundcolor();
		me._controller_previous_.onclick=function (e) {
			var currentNodeId = player.getCurrentNode();
var allNodesWithTag;
if (player.getVariableValue('var_tag') == '') {
   allNodesWithTag = player.getNodeIds();
} else {
   allNodesWithTag = player.getNodesWithTag(player.getVariableValue('var_tag'));
}
if (allNodesWithTag.length > 0) {
   var currIndex = allNodesWithTag.indexOf(currentNodeId);
   var prevIndex = allNodesWithTag.length - 1;
   if (currIndex != -1 && currIndex != 0) {
      prevIndex = currIndex - 1;
   }
   player.openNext('{' + allNodesWithTag[prevIndex] + '}');
}
		}
		me._controller_previous_.onmouseenter=function (e) {
			me.elementMouseOver['controller_previous_']=true;
			me._controller_previous_.logicBlock_backgroundcolor();
		}
		me._controller_previous_.onmouseleave=function (e) {
			me.elementMouseOver['controller_previous_']=false;
			me._controller_previous_.logicBlock_backgroundcolor();
		}
		me._controller_previous_.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_prev_icon=document.createElement('div');
		els=me._controller_prev_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDYuOTYgNDUuOTMgMzMuMDQgMzEuOTkgMzMuMDQgMzEuOTkgNDYuOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogIDxwb2x5bGluZSBwb2ludHM9IjMwLjk2IDQ1LjkzIDE3LjA0IDMxLjk5IDE3LjA0IDMxLjk5IDMwLjk2IDE4LjA3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_prev_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._controller_prev_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSI0Nyw0NS45IDMzLDMyIDMzLDMyIDQ3LDE4LjEgICIvPgogIDxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjMxLDQ1LjkgMTcsMzIgMTcs'+
			'MzIgMzEsMTguMSAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._controller_prev_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="controller_prev_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_prev_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_prev_icon.onmouseenter=function (e) {
			me._controller_prev_icon__img.style.visibility='hidden';
			me._controller_prev_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['controller_prev_icon']=true;
		}
		me._controller_prev_icon.onmouseleave=function (e) {
			me._controller_prev_icon__img.style.visibility='inherit';
			me._controller_prev_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['controller_prev_icon']=false;
		}
		me._controller_prev_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_previous_.appendChild(me._controller_prev_icon);
		me._controller.appendChild(me._controller_previous_);
		el=me._controller_zoom_bg=document.createElement('div');
		el.ggId="controller_zoom_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((134px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 134px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_in_bg=document.createElement('div');
		el.ggId="controller_zoom_in_bg";
		el.ggDx=38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 38px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_in_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_in_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_zoom_in_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_zoom_in_bg.style.transition='background-color 0s';
				if (me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_zoom_in_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_zoom_in_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		me._controller_zoom_in_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_zoom_in_bg']=true;
			me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_in_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=true;
		}
		me._controller_zoom_in_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=false;
		}
		me._controller_zoom_in_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_zoom_in_bg']=false;
			me.elementMouseOver['controller_zoom_in_bg']=false;
			me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_in_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_zoom_in_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_zoom_in_bg']) {
				player.changeFovLog(-1,true);
			}
		}
		me._controller_zoom_in_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_in_icon=document.createElement('div');
		els=me._controller_zoom_in_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQ4IiB5MT0iMzIiIHgxPSIxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iMzIiLz4KICA8bGluZSB4Mj0iMzIiIHkxPSIxNiIgeDE9Ij'+
			'MyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0OCIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_zoom_in_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._controller_zoom_in_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB4Mj0iNDgiIHkxPSIzMiIgeDE9IjE2IiBjbGFzcz0ic3QxIiB5Mj0iMzIiLz4KICA8bGluZSB4Mj0iMzIiIHkxPSIxNiIgeDE9IjMyIiBjbGFzcz0ic3QxIiB5Mj0iNDgiLz4KIDwvZz4K'+
			'PC9zdmc+Cg==';
		me._controller_zoom_in_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="controller_zoom_in_icon";
		el.ggDx=10;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_in_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_in_icon.onmouseenter=function (e) {
			me._controller_zoom_in_icon__img.style.visibility='hidden';
			me._controller_zoom_in_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['controller_zoom_in_icon']=true;
		}
		me._controller_zoom_in_icon.onmouseleave=function (e) {
			me._controller_zoom_in_icon__img.style.visibility='inherit';
			me._controller_zoom_in_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['controller_zoom_in_icon']=false;
		}
		me._controller_zoom_in_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_zoom_in_bg.appendChild(me._controller_zoom_in_icon);
		me._controller_zoom_bg.appendChild(me._controller_zoom_in_bg);
		el=me._controller_zoom_out_bg=document.createElement('div');
		el.ggId="controller_zoom_out_bg";
		el.ggDx=-38;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) - 38px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_out_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_out_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_zoom_out_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_zoom_out_bg.style.transition='background-color 0s';
				if (me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_zoom_out_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_zoom_out_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		me._controller_zoom_out_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_zoom_out_bg']=true;
			me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_out_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=true;
		}
		me._controller_zoom_out_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=false;
		}
		me._controller_zoom_out_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_zoom_out_bg']=false;
			me.elementMouseOver['controller_zoom_out_bg']=false;
			me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		}
		me._controller_zoom_out_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_zoom_out_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_zoom_out_bg']) {
				player.changeFovLog(1,true);
			}
		}
		me._controller_zoom_out_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_zoom_out_icon=document.createElement('div');
		els=me._controller_zoom_out_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQ4IiB5MT0iMzIiIHgxPSIxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_zoom_out_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._controller_zoom_out_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB4Mj0iNDgiIHkxPSIzMiIgeDE9IjE2IiBjbGFzcz0ic3QxIiB5Mj0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._controller_zoom_out_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="controller_zoom_out_icon";
		el.ggDx=-10;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 10px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_zoom_out_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_zoom_out_icon.onmouseenter=function (e) {
			me._controller_zoom_out_icon__img.style.visibility='hidden';
			me._controller_zoom_out_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['controller_zoom_out_icon']=true;
		}
		me._controller_zoom_out_icon.onmouseleave=function (e) {
			me._controller_zoom_out_icon__img.style.visibility='inherit';
			me._controller_zoom_out_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['controller_zoom_out_icon']=false;
		}
		me._controller_zoom_out_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_zoom_out_bg.appendChild(me._controller_zoom_out_icon);
		me._controller_zoom_bg.appendChild(me._controller_zoom_out_bg);
		me._controller.appendChild(me._controller_zoom_bg);
		el=me._controller_move_bg=document.createElement('div');
		el.ggId="controller_move_bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 35px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 68px;';
		hs+='left : calc(50% - ((68px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 68px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_container=document.createElement('div');
		el.ggId="controller_move_container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 30px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_left_bg=document.createElement('div');
		el.ggId="controller_move_left_bg";
		el.ggDx=-16;
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_left_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_left_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_left_bg.style.transition='background-color 0s';
				if (me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_left_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_left_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_left_bg.logicBlock_backgroundcolor();
		me._controller_move_left_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_left_bg']=true;
			me._controller_move_left_hover_icon.logicBlock_visible();
			me._controller_move_left_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_left_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_left_bg']=true;
		}
		me._controller_move_left_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_left_bg']=false;
		}
		me._controller_move_left_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_left_bg']=false;
			me.elementMouseOver['controller_move_left_bg']=false;
			me._controller_move_left_hover_icon.logicBlock_visible();
			me._controller_move_left_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_left_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_left_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_left_bg']) {
				player.changePanLog(1,true);
			}
		}
		me._controller_move_left_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_left_icon=document.createElement('div');
		els=me._controller_move_left_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzguOTYgNDUuOTMgMjUuMDQgMzEuOTkgMjUuMDQgMzEuOTkgMzguOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_left_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_icon";
		el.ggDx=2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_left_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_bg.appendChild(me._controller_move_left_icon);
		el=me._controller_move_left_hover_icon=document.createElement('div');
		els=me._controller_move_left_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzguOTYgNDUuOTMgMjUuMDQgMzEuOTkgMjUuMDQgMzEuOTkgMzguOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_left_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_left_hover_icon";
		el.ggDx=2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_left_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_left_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_left_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_left_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_left_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_left_hover_icon.style.transition='';
				if (me._controller_move_left_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_left_hover_icon.style.visibility=(Number(me._controller_move_left_hover_icon.style.opacity)>0||!me._controller_move_left_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_left_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_left_hover_icon.style.visibility="hidden";
					me._controller_move_left_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_left_hover_icon.logicBlock_visible();
		me._controller_move_left_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_left_bg.appendChild(me._controller_move_left_hover_icon);
		me._controller_move_container.appendChild(me._controller_move_left_bg);
		el=me._controller_move_down_bg=document.createElement('div');
		el.ggId="controller_move_down_bg";
		el.ggDx=16;
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_down_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_down_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_down_bg.style.transition='background-color 0s';
				if (me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_down_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_down_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_down_bg.logicBlock_backgroundcolor();
		me._controller_move_down_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_down_bg']=true;
			me._controller_move_down_hover_icon.logicBlock_visible();
			me._controller_move_down_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_down_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_down_bg']=true;
		}
		me._controller_move_down_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_down_bg']=false;
		}
		me._controller_move_down_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_down_bg']=false;
			me.elementMouseOver['controller_move_down_bg']=false;
			me._controller_move_down_hover_icon.logicBlock_visible();
			me._controller_move_down_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_down_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_down_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_down_bg']) {
				player.changeTiltLog(-1,true);
			}
		}
		me._controller_move_down_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_down_icon=document.createElement('div');
		els=me._controller_move_down_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTMgMjUuMDQgMzEuOTkgMzguOTYgMzEuOTkgMzguOTYgMTguMDcgMjUuMDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_down_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_down_icon";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_down_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_down_bg.appendChild(me._controller_move_down_icon);
		el=me._controller_move_down_hover_icon=document.createElement('div');
		els=me._controller_move_down_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTMgMjUuMDQgMzEuOTkgMzguOTYgMzEuOTkgMzguOTYgMTguMDcgMjUuMDQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_down_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_down_hover_icon";
		el.ggDx=-2;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_down_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_down_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_down_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_down_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_down_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_down_hover_icon.style.transition='';
				if (me._controller_move_down_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_down_hover_icon.style.visibility=(Number(me._controller_move_down_hover_icon.style.opacity)>0||!me._controller_move_down_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_down_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_down_hover_icon.style.visibility="hidden";
					me._controller_move_down_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_down_hover_icon.logicBlock_visible();
		me._controller_move_down_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_down_bg.appendChild(me._controller_move_down_hover_icon);
		me._controller_move_container.appendChild(me._controller_move_down_bg);
		el=me._controller_move_right_bg=document.createElement('div');
		el.ggId="controller_move_right_bg";
		el.ggDx=16;
		el.ggDy=-16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) + 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_right_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_right_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_right_bg.style.transition='background-color 0s';
				if (me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_right_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_right_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_right_bg.logicBlock_backgroundcolor();
		me._controller_move_right_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_right_bg']=true;
			me._controller_move_right_hover_icon.logicBlock_visible();
			me._controller_move_right_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_right_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_right_bg']=true;
		}
		me._controller_move_right_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_right_bg']=false;
		}
		me._controller_move_right_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_right_bg']=false;
			me.elementMouseOver['controller_move_right_bg']=false;
			me._controller_move_right_hover_icon.logicBlock_visible();
			me._controller_move_right_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_right_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_right_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_right_bg']) {
				player.changePanLog(-1,true);
			}
		}
		me._controller_move_right_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_right_icon=document.createElement('div');
		els=me._controller_move_right_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjUuMDQgMTguMDcgMzguOTYgMzIuMDEgMzguOTYgMzIuMDEgMjUuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_right_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_icon";
		el.ggDx=-2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_right_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_bg.appendChild(me._controller_move_right_icon);
		el=me._controller_move_right_hover_icon=document.createElement('div');
		els=me._controller_move_right_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjUuMDQgMTguMDcgMzguOTYgMzIuMDEgMzguOTYgMzIuMDEgMjUuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_right_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_right_hover_icon";
		el.ggDx=-2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_right_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_right_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_right_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_right_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_right_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_right_hover_icon.style.transition='';
				if (me._controller_move_right_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_right_hover_icon.style.visibility=(Number(me._controller_move_right_hover_icon.style.opacity)>0||!me._controller_move_right_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_right_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_right_hover_icon.style.visibility="hidden";
					me._controller_move_right_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_right_hover_icon.logicBlock_visible();
		me._controller_move_right_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_right_bg.appendChild(me._controller_move_right_hover_icon);
		me._controller_move_container.appendChild(me._controller_move_right_bg);
		el=me._controller_move_up_bg=document.createElement('div');
		el.ggId="controller_move_up_bg";
		el.ggDx=-16;
		el.ggDy=-16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 4px) / 2) - 16px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_move_up_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['controller_move_up_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._controller_move_up_bg.style.transition='background-color 0s';
				if (me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._controller_move_up_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._controller_move_up_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._controller_move_up_bg.logicBlock_backgroundcolor();
		me._controller_move_up_bg.onmouseenter=function (e) {
			me.elementMouseOver['controller_move_up_bg']=true;
			me._controller_move_up_hover_icon.logicBlock_visible();
			me._controller_move_up_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_up_bg.onmousedown=function (e) {
			me.elementMouseDown['controller_move_up_bg']=true;
		}
		me._controller_move_up_bg.onmouseup=function (e) {
			me.elementMouseDown['controller_move_up_bg']=false;
		}
		me._controller_move_up_bg.onmouseleave=function (e) {
			me.elementMouseDown['controller_move_up_bg']=false;
			me.elementMouseOver['controller_move_up_bg']=false;
			me._controller_move_up_hover_icon.logicBlock_visible();
			me._controller_move_up_bg.logicBlock_backgroundcolor();
		}
		me._controller_move_up_bg.ggCurrentLogicStateBackgroundColor = -1;
		me._controller_move_up_bg.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['controller_move_up_bg']) {
				player.changeTiltLog(1,true);
			}
		}
		me._controller_move_up_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_move_up_icon=document.createElement('div');
		els=me._controller_move_up_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogPC9nPgo8L3N2Zz4K';
		me._controller_move_up_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_up_icon";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_up_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_up_bg.appendChild(me._controller_move_up_icon);
		el=me._controller_move_up_hover_icon=document.createElement('div');
		els=me._controller_move_up_hover_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3'+
			'Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
		me._controller_move_up_hover_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="controller_move_up_hover_icon";
		el.ggDx=2;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:-45,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 2px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._controller_move_up_hover_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_move_up_hover_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['controller_move_up_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_move_up_hover_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_move_up_hover_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_move_up_hover_icon.style.transition='';
				if (me._controller_move_up_hover_icon.ggCurrentLogicStateVisible == 0) {
					me._controller_move_up_hover_icon.style.visibility=(Number(me._controller_move_up_hover_icon.style.opacity)>0||!me._controller_move_up_hover_icon.style.opacity)?'inherit':'hidden';
					me._controller_move_up_hover_icon.ggVisible=true;
				}
				else {
					me._controller_move_up_hover_icon.style.visibility="hidden";
					me._controller_move_up_hover_icon.ggVisible=false;
				}
			}
		}
		me._controller_move_up_hover_icon.logicBlock_visible();
		me._controller_move_up_hover_icon.ggUpdatePosition=function (useTransition) {
		}
		me._controller_move_up_bg.appendChild(me._controller_move_up_hover_icon);
		me._controller_move_container.appendChild(me._controller_move_up_bg);
		me._controller_move_bg.appendChild(me._controller_move_container);
		me._controller.appendChild(me._controller_move_bg);
		me._container_controls.appendChild(me._controller);
		el=me._phone_next=document.createElement('div');
		el.ggId="phone_next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 20px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone_next.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('opt_prev_next') == true)) && 
				((player.getVariableValue('vis_share') == false)) && 
				((player.getVariableValue('vis_phone_popup') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._phone_next.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._phone_next.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._phone_next.style.transition='background-color 0s';
				if (me._phone_next.ggCurrentLogicStateVisible == 0) {
					me._phone_next.style.visibility=(Number(me._phone_next.style.opacity)>0||!me._phone_next.style.opacity)?'inherit':'hidden';
					me._phone_next.ggVisible=true;
				}
				else {
					me._phone_next.style.visibility="hidden";
					me._phone_next.ggVisible=false;
				}
			}
		}
		me._phone_next.logicBlock_visible();
		me._phone_next.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['phone_next'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._phone_next.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._phone_next.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._phone_next.style.transition='background-color 0s';
				if (me._phone_next.ggCurrentLogicStateBackgroundColor == 0) {
					me._phone_next.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._phone_next.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._phone_next.logicBlock_backgroundcolor();
		me._phone_next.onclick=function (e) {
			var currentNodeId = player.getCurrentNode();
var allNodesWithTag;
if (player.getVariableValue('var_tag') == '') {
   allNodesWithTag = player.getNodeIds();
} else {
   allNodesWithTag = player.getNodesWithTag(player.getVariableValue('var_tag'));
}
if (allNodesWithTag.length > 0) {
   var currIndex = allNodesWithTag.indexOf(currentNodeId);
   var nextIndex = 0;
   if (currIndex != -1 && currIndex != allNodesWithTag.length - 1) {
      nextIndex = currIndex + 1;
   }
   player.openNext('{' + allNodesWithTag[nextIndex] + '}');
}
		}
		me._phone_next.onmouseenter=function (e) {
			me.elementMouseOver['phone_next']=true;
			me._phone_next.logicBlock_backgroundcolor();
		}
		me._phone_next.onmouseleave=function (e) {
			me.elementMouseOver['phone_next']=false;
			me._phone_next.logicBlock_backgroundcolor();
		}
		me._phone_next.ggUpdatePosition=function (useTransition) {
		}
		el=me._phone_next_icon=document.createElement('div');
		els=me._phone_next_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTcuMDQgMTguMDcgMzAuOTYgMzIuMDEgMzAuOTYgMzIuMDEgMTcuMDQgNDUuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogIDxwb2x5bGluZSBwb2ludHM9IjMzLjA0IDE4LjA3IDQ2Ljk2IDMyLjAxIDQ2Ljk2IDMyLjAxIDMzLjA0IDQ1LjkzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._phone_next_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._phone_next_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSIxNywxOC4xIDMxLDMyIDMxLDMyIDE3LDQ1LjkgICIvPgogIDxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjMzLDE4LjEgNDcsMzIgNDcs'+
			'MzIgMzMsNDUuOSAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._phone_next_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="phone_next_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone_next_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone_next_icon.onmouseenter=function (e) {
			me._phone_next_icon__img.style.visibility='hidden';
			me._phone_next_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['phone_next_icon']=true;
		}
		me._phone_next_icon.onmouseleave=function (e) {
			me._phone_next_icon__img.style.visibility='inherit';
			me._phone_next_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['phone_next_icon']=false;
		}
		me._phone_next_icon.ggUpdatePosition=function (useTransition) {
		}
		me._phone_next.appendChild(me._phone_next_icon);
		me._container_controls.appendChild(me._phone_next);
		el=me._phone_previous_=document.createElement('div');
		el.ggId="phone_previous ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 20px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone_previous_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone_previous_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('opt_prev_next') == true)) && 
				((player.getVariableValue('vis_share') == false)) && 
				((player.getVariableValue('vis_phone_popup') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._phone_previous_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._phone_previous_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._phone_previous_.style.transition='background-color 0s';
				if (me._phone_previous_.ggCurrentLogicStateVisible == 0) {
					me._phone_previous_.style.visibility=(Number(me._phone_previous_.style.opacity)>0||!me._phone_previous_.style.opacity)?'inherit':'hidden';
					me._phone_previous_.ggVisible=true;
				}
				else {
					me._phone_previous_.style.visibility="hidden";
					me._phone_previous_.ggVisible=false;
				}
			}
		}
		me._phone_previous_.logicBlock_visible();
		me._phone_previous_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['phone_previous_'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._phone_previous_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._phone_previous_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._phone_previous_.style.transition='background-color 0s';
				if (me._phone_previous_.ggCurrentLogicStateBackgroundColor == 0) {
					me._phone_previous_.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._phone_previous_.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._phone_previous_.logicBlock_backgroundcolor();
		me._phone_previous_.onclick=function (e) {
			var currentNodeId = player.getCurrentNode();
var allNodesWithTag;
if (player.getVariableValue('var_tag') == '') {
   allNodesWithTag = player.getNodeIds();
} else {
   allNodesWithTag = player.getNodesWithTag(player.getVariableValue('var_tag'));
}
if (allNodesWithTag.length > 0) {
   var currIndex = allNodesWithTag.indexOf(currentNodeId);
   var prevIndex = allNodesWithTag.length - 1;
   if (currIndex != -1 && currIndex != 0) {
      prevIndex = currIndex - 1;
   }
   player.openNext('{' + allNodesWithTag[prevIndex] + '}');
}
		}
		me._phone_previous_.onmouseenter=function (e) {
			me.elementMouseOver['phone_previous_']=true;
			me._phone_previous_.logicBlock_backgroundcolor();
		}
		me._phone_previous_.onmouseleave=function (e) {
			me.elementMouseOver['phone_previous_']=false;
			me._phone_previous_.logicBlock_backgroundcolor();
		}
		me._phone_previous_.ggUpdatePosition=function (useTransition) {
		}
		el=me._phone_prev_icon=document.createElement('div');
		els=me._phone_prev_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDYuOTYgNDUuOTMgMzMuMDQgMzEuOTkgMzMuMDQgMzEuOTkgNDYuOTYgMTguMDciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPg'+
			'ogIDxwb2x5bGluZSBwb2ludHM9IjMwLjk2IDQ1LjkzIDE3LjA0IDMxLjk5IDE3LjA0IDMxLjk5IDMwLjk2IDE4LjA3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._phone_prev_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._phone_prev_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IGNsYXNzPSJzdDAiIGhlaWdodD0iNjQiIHdpZHRoPSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MSIgcG9pbnRzPSI0Nyw0NS45IDMzLDMyIDMzLDMyIDQ3LDE4LjEgICIvPgogIDxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjMxLDQ1LjkgMTcsMzIgMTcs'+
			'MzIgMzEsMTguMSAgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._phone_prev_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="phone_prev_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone_prev_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone_prev_icon.onmouseenter=function (e) {
			me._phone_prev_icon__img.style.visibility='hidden';
			me._phone_prev_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['phone_prev_icon']=true;
		}
		me._phone_prev_icon.onmouseleave=function (e) {
			me._phone_prev_icon__img.style.visibility='inherit';
			me._phone_prev_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['phone_prev_icon']=false;
		}
		me._phone_prev_icon.ggUpdatePosition=function (useTransition) {
		}
		me._phone_previous_.appendChild(me._phone_prev_icon);
		me._container_controls.appendChild(me._phone_previous_);
		me.divSkin.appendChild(me._container_controls);
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 150px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._header.ggCurrentLogicStateSize != newLogicStateSize) {
				me._header.ggCurrentLogicStateSize = newLogicStateSize;
				me._header.style.transition='width 0s, height 0s';
				if (me._header.ggCurrentLogicStateSize == 0) {
					me._header.style.width='100%';
					me._header.style.height='75px';
					skin.updateSize(me._header);
				}
				else {
					me._header.style.width='100%';
					me._header.style.height='150px';
					skin.updateSize(me._header);
				}
			}
		}
		me._header.logicBlock_size();
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_block=document.createElement('div');
		el.ggId="text block";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 225px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 250px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._text_block.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_block.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_block.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_block.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_block.style.transition='left 0s, top 0s';
				if (me._text_block.ggCurrentLogicStatePosition == 0) {
					me._text_block.style.left='150px';
					me._text_block.style.top='5px';
				}
				else {
					me._text_block.style.left='225px';
					me._text_block.style.top='20px';
				}
			}
		}
		me._text_block.logicBlock_position();
		me._text_block.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_description=document.createElement('div');
		els=me._info_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text responsive-text";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_description.ggUpdateText();
		});
		el.appendChild(els);
		me._info_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_description.ggUpdatePosition=function (useTransition) {
		}
		me._text_block.appendChild(me._info_description);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text responsive-title";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("<div class=\"ggmarkdown\"><h3>%1<\/h3>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._text_block.appendChild(me._info_title);
		me._header.appendChild(me._text_block);
		el=me._logo=document.createElement('div');
		els=me._logo__img=document.createElement('img');
		els.className='ggskin ggskin_logo';
		hs=basePath + 'images/logo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Logo";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._logo.ggCurrentLogicStateSize != newLogicStateSize) {
				me._logo.ggCurrentLogicStateSize = newLogicStateSize;
				me._logo.style.transition='width 0s, height 0s';
				if (me._logo.ggCurrentLogicStateSize == 0) {
					me._logo.style.width='110px';
					me._logo.style.height='57px';
					me._logo.style.top = 'calc(50% - (57px / 2))';
					skin.updateSize(me._logo);
				}
				else {
					me._logo.style.width='192px';
					me._logo.style.height='100px';
					me._logo.style.top = 'calc(50% - (100px / 2))';
					skin.updateSize(me._logo);
				}
			}
		}
		me._logo.logicBlock_size();
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._logo);
		me.divSkin.appendChild(me._header);
		el=me._background_blur=document.createElement('div');
		el.ggId="background_blur";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._background_blur.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._background_blur.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_full') == true)) || 
				((player.getVariableValue('vis_floorplan_full') == true)) || 
				((player.getVariableValue('vis_thumbnails') == true)) || 
				((player.getVariableValue('vis_image_hs_popup_full') == true)) || 
				((player.getVariableValue('vis_video_hs_popup') == true)) || 
				((player.getVariableValue('vis_pdf_hs_popup') == true)) || 
				((player.getVariableValue('vis_url_hs_popup') == true)) || 
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._background_blur.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._background_blur.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._background_blur.style.transition='';
				if (me._background_blur.ggCurrentLogicStateVisible == 0) {
					me._background_blur.style.visibility=(Number(me._background_blur.style.opacity)>0||!me._background_blur.style.opacity)?'inherit':'hidden';
					me._background_blur.ggVisible=true;
				}
				else {
					me._background_blur.style.visibility="hidden";
					me._background_blur.ggVisible=false;
				}
			}
		}
		me._background_blur.logicBlock_visible();
		me._background_blur.onclick=function (e) {
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_image_hs_popup_full', false);
			player.setVariableValue('vis_pdf_hs_popup', false);
			player.setVariableValue('vis_url_hs_popup', false);
			player.setVariableValue('vis_video_youtube_hs_popup', false);
			player.setVariableValue('vis_video_vimeo_hs_popup', false);
			player.setVariableValue('vis_video_file_hs_popup', false);
			player.setVariableValue('vis_video_url_hs_popup', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_thumbnails', false);
		}
		me._background_blur.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._background_blur);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #343434;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : calc(50% - 86px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style.transition='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					me._map.ggVisible=true;
				}
				else {
					me._map.style.visibility="hidden";
					me._map.ggVisible=false;
				}
			}
		}
		me._map.logicBlock_visible();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 10px;';
		hs+='height : calc(100% - 44px);';
		hs+='left : calc(50% - ((calc(100% - 20px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 20px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_content.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._floorplan_content);
		el=me._map_close=document.createElement('div');
		els=me._map_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQzLjMxIiB5MT0iMjAuNjkiIHgxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiLz4KICA8bGluZSB4Mj0iMjAuNj'+
			'kiIHkxPSIyMC42OSIgeDE9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB4MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHgxPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close.onclick=function (e) {
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_floorMenu', false);
		}
		me._map_close.onmouseenter=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
			me.elementMouseOver['map_close']=true;
		}
		me._map_close.onmouseleave=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
			me.elementMouseOver['map_close']=false;
		}
		me._map_close.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_close);
		el=me._map_full=document.createElement('div');
		els=me._map_full__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgyPSI0OCIgeT'+
			'E9IjI4IiB4MT0iMzUuODkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjE2Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgyPSIxNiIgeTE9IjM2IiB4MT0iMjguMTEiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjQ4Ii8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._map_full__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_full__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjM1LjU0IDE2IDQ4IDE2IDQ4IDE2IDQ4IDI4LjQ2IiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iNDgiIHkxPSIyOCIgeDE9IjM1Ljg5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSIxNiIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjQ2IDQ4IDE2IDQ4IDE2IDQ4IDE2IDM1LjU0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7'+
			'IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iMTYiIHkxPSIzNiIgeDE9IjI4LjExIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0OCIvPgogPC9nPgo8L3N2Zz4K';
		me._map_full__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_full.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_map') == true))
				)
			) {
				player.setVariableValue('vis_map_full', true);
			}
			if (
				(
					((player.getVariableValue('vis_floorplan') == true))
				)
			) {
				player.setVariableValue('vis_floorplan_full', true);
			}
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
		}
		me._map_full.onmouseenter=function (e) {
			me._map_full__img.style.visibility='hidden';
			me._map_full__imgo.style.visibility='inherit';
			me.elementMouseOver['map_full']=true;
		}
		me._map_full.onmouseleave=function (e) {
			me._map_full__img.style.visibility='inherit';
			me._map_full__imgo.style.visibility='hidden';
			me.elementMouseOver['map_full']=false;
		}
		me._map_full.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_full);
		el=me._floor_menu=document.createElement('div');
		el.ggId="floor menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1000;';
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 39px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '99');
		el.style.transformOrigin='50% 50%';
		me._floor_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floor_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floor_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floor_menu.style.transition='';
				if (me._floor_menu.ggCurrentLogicStateVisible == 0) {
					me._floor_menu.style.visibility=(Number(me._floor_menu.style.opacity)>0||!me._floor_menu.style.opacity)?'inherit':'hidden';
					me._floor_menu.ggVisible=true;
				}
				else {
					me._floor_menu.style.visibility="hidden";
					me._floor_menu.ggVisible=false;
				}
			}
		}
		me._floor_menu.logicBlock_visible();
		me._floor_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._floors=document.createElement('div');
		els=me._floors__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="floors";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floors.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u0442\u0430\u0436\u0438", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floors.ggUpdateText();
		el.appendChild(els);
		me._floors.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors.onclick=function (e) {
			player.setVariableValue('vis_floorMenu', !player.getVariableValue('vis_floorMenu'));
		}
		me._floors.ggUpdatePosition=function (useTransition) {
		}
		me._floor_menu.appendChild(me._floors);
		el=me._floors_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 25;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._floors_cloner.ggUpdating == true) return;
			me._floors_cloner.ggUpdating = true;
			var el=me._floors_cloner;
			var curNumCols = 0;
			curNumCols = me._floors_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && false) {
				me._floors_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._floors_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._floors_cloner.ggNumFilterPassed = el.ggFloorplans.length;
			for (var i = 0; i < el.ggFloorplans.length; i++) {
				var cItem = player.getMapDetails(el.ggFloorplans[i]);
				var nodeId = {};
				nodeId['tag'] = el.ggFloorplans[i];
				nodeId['title'] = cItem.title;
				if (!keepCloning || i < me._floors_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._floors_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._floors_cloner.ggWidth) + 'px';
				parameter.width=me._floors_cloner.ggWidth + 'px';
				parameter.height=me._floors_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_floors_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._floors_cloner.ggNodeCount = me._floors_cloner.ggNumFilterPassed;
			me._floors_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._floors_cloner.parentNode && me._floors_cloner.parentNode.classList.contains('ggskin_subelement') && me._floors_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._floors_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFloorplans = [];
		el.ggId="floors Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 1px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '99');
		el.style.transformOrigin='50% 50%';
		me._floors_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorMenu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floors_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floors_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floors_cloner.style.transition='';
				if (me._floors_cloner.ggCurrentLogicStateVisible == 0) {
					me._floors_cloner.style.visibility=(Number(me._floors_cloner.style.opacity)>0||!me._floors_cloner.style.opacity)?'inherit':'hidden';
					me._floors_cloner.ggVisible=true;
				}
				else {
					me._floors_cloner.style.visibility="hidden";
					me._floors_cloner.ggVisible=false;
				}
			}
		}
		me._floors_cloner.logicBlock_visible();
		me._floors_cloner.ggCurrentLogicStateVisible = -1;
		me._floors_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._floors_cloner.childNodes.length; i++) {
				var child=me._floors_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._floors_cloner.ggUpdatePosition=function (useTransition) {
			me._floors_cloner.ggUpdate();
		}
		me._floor_menu.appendChild(me._floors_cloner);
		me._map.appendChild(me._floor_menu);
		me.divSkin.appendChild(me._map);
		el=me._map_fullscreen=document.createElement('div');
		el.ggId="map_fullscreen";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_full') == true)) || 
				((player.getVariableValue('vis_floorplan_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_fullscreen.style.transition='';
				if (me._map_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._map_fullscreen.style.visibility=(Number(me._map_fullscreen.style.opacity)>0||!me._map_fullscreen.style.opacity)?'inherit':'hidden';
					me._map_fullscreen.ggVisible=true;
				}
				else {
					me._map_fullscreen.style.visibility="hidden";
					me._map_fullscreen.ggVisible=false;
				}
			}
		}
		me._map_fullscreen.logicBlock_visible();
		me._map_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan_fs_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_fs_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='bottom : 16px;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 2px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_fs_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_fs_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_fs_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_fs_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_fs_content.style.transition='';
				if (me._floorplan_fs_content.ggCurrentLogicStateVisible == 0) {
					me._floorplan_fs_content.style.visibility=(Number(me._floorplan_fs_content.style.opacity)>0||!me._floorplan_fs_content.style.opacity)?'inherit':'hidden';
					if (me._floorplan_fs_content.ggMapNotLoaded && me._floorplan_fs_content.ggInitMap) {
						me._floorplan_fs_content.ggInitMap(false);
						me._floorplan_fs_content.ggInitMapMarkers(true);
					}
					me._floorplan_fs_content.ggVisible=true;
				}
				else {
					me._floorplan_fs_content.style.visibility="hidden";
					if (me._floorplan_fs_content.ggClearMap) me._floorplan_fs_content.ggClearMap();
					me._floorplan_fs_content.ggVisible=false;
				}
			}
		}
		me._floorplan_fs_content.logicBlock_visible();
		me._floorplan_fs_content.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._floorplan_fs_content);
		el=me._map_fs_close=document.createElement('div');
		els=me._map_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQzLjMxIiB5MT0iMjAuNjkiIHgxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiLz4KICA8bGluZSB4Mj0iMjAuNj'+
			'kiIHkxPSIyMC42OSIgeDE9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB4MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHgxPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_close.onclick=function (e) {
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_floorplan_full', false);
		}
		me._map_fs_close.onmouseenter=function (e) {
			me._map_fs_close__img.style.visibility='hidden';
			me._map_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['map_fs_close']=true;
		}
		me._map_fs_close.onmouseleave=function (e) {
			me._map_fs_close__img.style.visibility='inherit';
			me._map_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['map_fs_close']=false;
		}
		me._map_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._map_fs_close);
		el=me._map_fs_small=document.createElement('div');
		els=me._map_fs_small__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDggMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW'+
			'5lIHgyPSIzNS41NCIgeTE9IjE2LjQ1IiB4MT0iNDcuNjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjI4LjQ2Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIvPgogIDxsaW5lIHgyPSIyOC40NiIgeTE9IjQ3LjU1IiB4MT0iMTYuMzUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1p'+
			'dGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTI9IjM1LjU0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_fs_small__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_fs_small__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBwb2ludHM9IjQ4IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0ID'+
			'E2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iMzUuNTQiIHkxPSIxNi40NSIgeDE9IjQ3LjY1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSIyOC40NiIvPgogIDxwb2x5bGluZSBwb2ludHM9IjE2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDM1LjU0IDI4LjQ2IDQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9r'+
			'ZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iMjguNDYiIHkxPSI0Ny41NSIgeDE9IjE2LjM1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSIzNS41NCIvPgogPC9nPgo8L3N2Zz4K';
		me._map_fs_small__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_fs_small";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_small.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_map_full') == true))
				)
			) {
				player.setVariableValue('vis_map', true);
			}
			if (
				(
					((player.getVariableValue('vis_floorplan_full') == true))
				)
			) {
				player.setVariableValue('vis_floorplan', true);
			}
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_floorplan_full', false);
		}
		me._map_fs_small.onmouseenter=function (e) {
			me._map_fs_small__img.style.visibility='hidden';
			me._map_fs_small__imgo.style.visibility='inherit';
			me.elementMouseOver['map_fs_small']=true;
		}
		me._map_fs_small.onmouseleave=function (e) {
			me._map_fs_small__img.style.visibility='inherit';
			me._map_fs_small__imgo.style.visibility='hidden';
			me.elementMouseOver['map_fs_small']=false;
		}
		me._map_fs_small.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._map_fs_small);
		el=me._fullscreen_floor_menu=document.createElement('div');
		el.ggId="fullscreen_floor menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1000;';
		hs+='height : 22px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '99');
		el.style.transformOrigin='50% 50%';
		me._fullscreen_floor_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_floor_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_floors=document.createElement('div');
		els=me._fullscreen_floors__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="fullscreen_floors";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._fullscreen_floors.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u0442\u0430\u0436\u0438", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._fullscreen_floors.ggUpdateText();
		el.appendChild(els);
		me._fullscreen_floors.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_floors.onclick=function (e) {
			player.setVariableValue('vis_floorMenu', !player.getVariableValue('vis_floorMenu'));
		}
		me._fullscreen_floors.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_floor_menu.appendChild(me._fullscreen_floors);
		el=me._fullscreen_floors_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 25;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._fullscreen_floors_cloner.ggUpdating == true) return;
			me._fullscreen_floors_cloner.ggUpdating = true;
			var el=me._fullscreen_floors_cloner;
			var curNumCols = 0;
			curNumCols = me._fullscreen_floors_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && false) {
				me._fullscreen_floors_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._fullscreen_floors_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._fullscreen_floors_cloner.ggNumFilterPassed = el.ggFloorplans.length;
			for (var i = 0; i < el.ggFloorplans.length; i++) {
				var cItem = player.getMapDetails(el.ggFloorplans[i]);
				var nodeId = {};
				nodeId['tag'] = el.ggFloorplans[i];
				nodeId['title'] = cItem.title;
				if (!keepCloning || i < me._fullscreen_floors_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._fullscreen_floors_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._fullscreen_floors_cloner.ggWidth) + 'px';
				parameter.width=me._fullscreen_floors_cloner.ggWidth + 'px';
				parameter.height=me._fullscreen_floors_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_fullscreen_floors_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._fullscreen_floors_cloner.ggNodeCount = me._fullscreen_floors_cloner.ggNumFilterPassed;
			me._fullscreen_floors_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._fullscreen_floors_cloner.parentNode && me._fullscreen_floors_cloner.parentNode.classList.contains('ggskin_subelement') && me._fullscreen_floors_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._fullscreen_floors_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFloorplans = [];
		el.ggId="fullscreen_floors Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 1px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '99');
		el.style.transformOrigin='50% 50%';
		me._fullscreen_floors_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_floors_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorMenu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_floors_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_floors_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_floors_cloner.style.transition='';
				if (me._fullscreen_floors_cloner.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_floors_cloner.style.visibility=(Number(me._fullscreen_floors_cloner.style.opacity)>0||!me._fullscreen_floors_cloner.style.opacity)?'inherit':'hidden';
					me._fullscreen_floors_cloner.ggVisible=true;
				}
				else {
					me._fullscreen_floors_cloner.style.visibility="hidden";
					me._fullscreen_floors_cloner.ggVisible=false;
				}
			}
		}
		me._fullscreen_floors_cloner.logicBlock_visible();
		me._fullscreen_floors_cloner.ggCurrentLogicStateVisible = -1;
		me._fullscreen_floors_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._fullscreen_floors_cloner.childNodes.length; i++) {
				var child=me._fullscreen_floors_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._fullscreen_floors_cloner.ggUpdatePosition=function (useTransition) {
			me._fullscreen_floors_cloner.ggUpdate();
		}
		me._fullscreen_floor_menu.appendChild(me._fullscreen_floors_cloner);
		me._map_fullscreen.appendChild(me._fullscreen_floor_menu);
		me.divSkin.appendChild(me._map_fullscreen);
		el=me._thumbnails_fullscreen=document.createElement('div');
		el.ggId="thumbnails_fullscreen";
		el.ggDx=0;
		el.ggDy=-19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 80px);';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 80px) + 0px) / 2) - 19px);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fullscreen.style.transition='';
				if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fullscreen.style.visibility=(Number(me._thumbnails_fullscreen.style.opacity)>0||!me._thumbnails_fullscreen.style.opacity)?'inherit':'hidden';
					me._thumbnails_fullscreen.ggVisible=true;
				}
				else {
					me._thumbnails_fullscreen.style.visibility="hidden";
					me._thumbnails_fullscreen.ggVisible=false;
				}
			}
		}
		me._thumbnails_fullscreen.logicBlock_visible();
		me._thumbnails_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._search_container=document.createElement('div');
		els=me._search_container__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="search container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : calc(100% -  154px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 115px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 45px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._search_container.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div id=\"tourContainer\"><\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._search_container.ggUpdateText();
		el.appendChild(els);
		me._search_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._search_container.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._search_container);
		el=me._search_string=document.createElement('div');
		els=me._search_string__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="search string";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 30px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 45px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._search_string.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div id=\"searchWrapper\">\n  <input\n    type=\"text\"\n    id=\"searchInput\"\n    placeholder=\"\u041f\u043e\u0438\u0441\u043a \u043f\u0430\u043d\u043e\u0440\u0430\u043c\u2026\"\n  \/>\n<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._search_string.ggUpdateText();
		el.appendChild(els);
		me._search_string.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._search_string.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._search_string);
		el=me._thumbnails_fs_close=document.createElement('div');
		els=me._thumbnails_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQzLjMxIiB5MT0iMjAuNjkiIHgxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiLz4KICA8bGluZSB4Mj0iMjAuNj'+
			'kiIHkxPSIyMC42OSIgeDE9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB4MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHgxPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
		}
		me._thumbnails_fs_close.onmouseenter=function (e) {
			me._thumbnails_fs_close__img.style.visibility='hidden';
			me._thumbnails_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_fs_close']=true;
		}
		me._thumbnails_fs_close.onmouseleave=function (e) {
			me._thumbnails_fs_close__img.style.visibility='inherit';
			me._thumbnails_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_fs_close']=false;
		}
		me._thumbnails_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_close);
		me.divSkin.appendChild(me._thumbnails_fullscreen);
		el=me._start_menu=document.createElement('div');
		el.ggId="start_menu";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_menu.style.transition='';
				if (me._start_menu.ggCurrentLogicStateVisible == 0) {
					me._start_menu.style.visibility=(Number(me._start_menu.style.opacity)>0||!me._start_menu.style.opacity)?'inherit':'hidden';
					me._start_menu.ggVisible=true;
				}
				else {
					me._start_menu.style.visibility="hidden";
					me._start_menu.ggVisible=false;
				}
			}
		}
		me._start_menu.logicBlock_visible();
		me._start_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._code=document.createElement('div');
		els=me._code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="code";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : #000000;';
		hs+='height : calc(100% - 150px);';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._code.ggUpdateText=function() {
			var params = [];
			var hs = player._("<style>\n    \/* \u0421\u0435\u0442\u043a\u0430 3x3 *\/\n    .grid {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        \/* 3 \u043a\u043e\u043b\u043e\u043d\u043a\u0438 *\/\n        grid-template-rows: repeat(2, 1fr);\n        \/* 3 \u0441\u0442\u0440\u043e\u043a\u0438 *\/\n        gap: 12px;\n        height: 100%;\n        width: 100vw;\n        box-sizing: border-box;\n        background-image: url(\'.\/images\/image_1.png\'); \/* .\/images\/image_1.png *\/\n        background-position: center;\n        background-size: cover;\n    }\n\n    \/* \u041a\u0430\u0436\u0434\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430 *\/\n    .cell {\n        display: flex;\n        padding: 20px;\n    }\n\n    \/* \u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043a\u043d\u043e\u043f\u043e\u043a \u0432 \u0441\u0442\u043e\u043b\u0431\u0438\u043a *\/\n    .btn-column {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        align-items: center;\n    }\n\n    \/* \u041a\u043d\u043e\u043f\u043a\u0438 *\/\n    .btn {\n        padding: 0.6em 1em;\n        font-size: clamp(16px, 2vw, 28px);\n        border: none;\n        background: #ffffff;\n        cursor: pointer;\n        transition: all 0.2s;\n        white-space: nowrap;\n        color: #000;\n        text-decoration: none;\n    }\n\n    .btn:hover {\n        transform: scale(1.05);\n        transition: all 0.1s;\n        background-color: #d9d9d9;\n    }\n<\/style>\n\n<div class=\"grid\">\n    <!-- \u0420\u044f\u0434 1 -->\n    <div class=\"cell\"><\/div>\n    <div class=\"cell\" style=\"align-items: end;\">\n        <div class=\"btn-column\">\n            <a href=\"#\" class=\"btn\">\u041c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0438\u0435 2 \u044d\u0442.<\/a>\n            <a href=\"#\" class=\"btn\">\u041c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0438\u0435 1 \u044d\u0442.<\/a>\n            <a href=\"#\" class=\"btn\">\u041c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0438\u0435 \u041d\u0410\u0414\u041e \u0423\u0417\u041d\u0410\u0422\u042c<\/a>\n        <\/div>\n    <\/div>\n    <div class=\"cell\"><\/div>\n\n    <!-- \u0420\u044f\u0434 3 -->\n    <div class=\"cell\" style=\"justify-content: end; align-items: start;\">\n        <div class=\"btn-column\">\n            <a href=\"\" class=\"btn\">\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0438 \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u043a\u0430<\/a>\n        <\/div>\n    <\/div>\n    <div class=\"cell\" style=\"justify-content: center; align-items: start;\">\n        <div class=\"btn-column\">\n            <a href=\"#\" class=\"btn\">\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 2 \u044d\u0442.<\/a>\n            <a href=\"#\" class=\"btn\">\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 1 \u044d\u0442.<\/a>\n            <a href=\"#\" class=\"btn\">\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 0 \u044d\u0442.<\/a>\n        <\/div>\n    <\/div>\n    <div class=\"cell\" style=\"justify-content: start; align-items: start;\">\n        <div class=\"btn-column\">\n            <a href=\"#\" class=\"btn\">\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 3 \u044d\u0442.<\/a>\n            <a href=\"#\" class=\"btn\">\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 2 \u044d\u0442.<\/a>\n            <a href=\"#\" class=\"btn\">\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 1 \u044d\u0442.<\/a>\n            <a href=\"#\" class=\"btn\">\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 0 \u044d\u0442.<\/a>\n        <\/div>\n    <\/div>\n<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._code.ggUpdateText();
		el.appendChild(els);
		me._code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._code.ggUpdatePosition=function (useTransition) {
		}
		me._start_menu.appendChild(me._code);
		el=me._header_start=document.createElement('div');
		el.ggId="header_start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container unset-white-space";
		el.ggType='container';
		hs ='';
		hs+='height : 150px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._header_start.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._header_start.ggCurrentLogicStateSize != newLogicStateSize) {
				me._header_start.ggCurrentLogicStateSize = newLogicStateSize;
				me._header_start.style.transition='width 0s, height 0s';
				if (me._header_start.ggCurrentLogicStateSize == 0) {
					me._header_start.style.width='100%';
					me._header_start.style.height='75px';
					skin.updateSize(me._header_start);
				}
				else {
					me._header_start.style.width='100%';
					me._header_start.style.height='150px';
					skin.updateSize(me._header_start);
				}
			}
		}
		me._header_start.logicBlock_size();
		me._header_start.ggUpdatePosition=function (useTransition) {
		}
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text unset-white-space";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='height : 130px;';
		hs+='left : 220px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 352px);';
		hs+='pointer-events:auto;';
		hs+='white-space: unset;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._title.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"header\">\n    <h1>\u041c\u0418\u041d\u0418\u0421\u0422\u0415\u0420\u0421\u0422\u0412\u041e \u041e\u0411\u0420\u0410\u0417\u041e\u0412\u0410\u041d\u0418\u042f \u0418 \u041d\u0410\u0423\u041a\u0418 \u0420\u0415\u0421\u041f\u0423\u0411\u041b\u0418\u041a\u0418 \u0422\u0410\u0422\u0410\u0420\u0421\u0422\u0410\u041d<\/h1>\n    <h2>\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435<\/h2>\n    <h3>\xab\u0410\u041b\u042c\u041c\u0415\u0422\u042c\u0415\u0412\u0421\u041a\u0418\u0419 \u041f\u041e\u041b\u0418\u0422\u0415\u0425\u041d\u0418\u0427\u0415\u0421\u041a\u0418\u0419 \u0422\u0415\u0425\u041d\u0418\u041a\u0423\u041c\xbb<\/h3>\n<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._title.ggCurrentLogicStateText != newLogicStateText) {
				me._title.ggCurrentLogicStateText = newLogicStateText;
				me._title.style.transition='';
				if (me._title.ggCurrentLogicStateText == 0) {
					if (me._title.ggUpdateText) {
					me._title.ggUpdateText=function() {
						var params = [];
						var hs = player._("<div class=\"header\">\n    <h1>\u0410\u041f\u0422<\/h1>\n<\/div>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._title.ggUpdateText();
					} else {
						if (me._title.ggUpdatePosition) me._title.ggUpdatePosition();
					}
				}
				else {
					if (me._title.ggUpdateText) {
					me._title.ggUpdateText=function() {
						var params = [];
						var hs = player._("<div class=\"header\">\n    <h1>\u041c\u0418\u041d\u0418\u0421\u0422\u0415\u0420\u0421\u0422\u0412\u041e \u041e\u0411\u0420\u0410\u0417\u041e\u0412\u0410\u041d\u0418\u042f \u0418 \u041d\u0410\u0423\u041a\u0418 \u0420\u0415\u0421\u041f\u0423\u0411\u041b\u0418\u041a\u0418 \u0422\u0410\u0422\u0410\u0420\u0421\u0422\u0410\u041d<\/h1>\n    <h2>\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0443\u0447\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435<\/h2>\n    <h3>\xab\u0410\u041b\u042c\u041c\u0415\u0422\u042c\u0415\u0412\u0421\u041a\u0418\u0419 \u041f\u041e\u041b\u0418\u0422\u0415\u0425\u041d\u0418\u0427\u0415\u0421\u041a\u0418\u0419 \u0422\u0415\u0425\u041d\u0418\u041a\u0423\u041c\xbb<\/h3>\n<\/div>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._title.ggUpdateText();
					} else {
						if (me._title.ggUpdatePosition) me._title.ggUpdatePosition();
					}
				}
			}
		}
		me._title.logicBlock_text();
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._header_start.appendChild(me._title);
		el=me._logo_1=document.createElement('div');
		els=me._logo_1__img=document.createElement('img');
		els.className='ggskin ggskin_logo_1';
		hs=basePath + 'images/logo_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Logo_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 192px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._logo_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._logo_1.ggCurrentLogicStateSize = newLogicStateSize;
				me._logo_1.style.transition='width 0s, height 0s';
				if (me._logo_1.ggCurrentLogicStateSize == 0) {
					me._logo_1.style.width='96px';
					me._logo_1.style.height='50px';
					me._logo_1.style.top = 'calc(50% - (50px / 2))';
					skin.updateSize(me._logo_1);
				}
				else {
					me._logo_1.style.width='192px';
					me._logo_1.style.height='100px';
					me._logo_1.style.top = 'calc(50% - (100px / 2))';
					skin.updateSize(me._logo_1);
				}
			}
		}
		me._logo_1.logicBlock_size();
		me._logo_1.ggUpdatePosition=function (useTransition) {
		}
		me._header_start.appendChild(me._logo_1);
		el=me._map_fs_close_2=document.createElement('div');
		els=me._map_fs_close_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXgiIGhlaWdodD0iMjQiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxsaW5lIHgyPSI2IiB5MT0iNiIgeDE9IjE4IiB5Mj0iMTgiLz4KIDxsaW5lIHgyPSIxOCIgeTE9IjYiIHgxPSI2IiB5Mj0iMTgiLz4KPC9zdmc+Cg==';
		me._map_fs_close_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_fs_close_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB4MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHgxPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_fs_close_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_fs_close_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_close_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_close_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_fs_close_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_fs_close_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_fs_close_2.style.transition='width 0s, height 0s';
				if (me._map_fs_close_2.ggCurrentLogicStateSize == 0) {
					me._map_fs_close_2.style.width='35px';
					me._map_fs_close_2.style.height='35px';
					skin.updateSize(me._map_fs_close_2);
				}
				else {
					me._map_fs_close_2.style.width='50px';
					me._map_fs_close_2.style.height='50px';
					skin.updateSize(me._map_fs_close_2);
				}
			}
		}
		me._map_fs_close_2.logicBlock_size();
		me._map_fs_close_2.onclick=function (e) {
			player.setVariableValue('vis_info', false);
		}
		me._map_fs_close_2.onmouseenter=function (e) {
			me._map_fs_close_2__img.style.visibility='hidden';
			me._map_fs_close_2__imgo.style.visibility='inherit';
			me.elementMouseOver['map_fs_close_2']=true;
		}
		me._map_fs_close_2.onmouseleave=function (e) {
			me._map_fs_close_2__img.style.visibility='inherit';
			me._map_fs_close_2__imgo.style.visibility='hidden';
			me.elementMouseOver['map_fs_close_2']=false;
		}
		me._map_fs_close_2.ggUpdatePosition=function (useTransition) {
		}
		me._header_start.appendChild(me._map_fs_close_2);
		me._start_menu.appendChild(me._header_start);
		me.divSkin.appendChild(me._start_menu);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 5px solid #000000;';
		hs+='border-radius : 32px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40'+
			'LDAsMjIuNiIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB4Mj0iNDcuOCIgeTE9IjQ3LjgiIHgxPSIxNS44IiBjbGFzcz0ic3QwIiB5Mj0iMTUuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40'+
			'LDAsMjIuNiIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB4Mj0iNDcuOCIgeTE9IjQ3LjgiIHgxPSIxNS44IiBjbGFzcz0ic3QwIiB5Mj0iMTUuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=75;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 75px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40'+
			'LDAsMjIuNiIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40'+
			'LDAsMjIuNiIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-75;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 75px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup_phone=document.createElement('div');
		el.ggId="popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 90px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_phone.style.transition='';
				if (me._popup_phone.ggCurrentLogicStateVisible == 0) {
					me._popup_phone.style.visibility=(Number(me._popup_phone.style.opacity)>0||!me._popup_phone.style.opacity)?'inherit':'hidden';
					me._popup_phone.ggVisible=true;
				}
				else {
					me._popup_phone.style.visibility="hidden";
					me._popup_phone.ggVisible=false;
				}
			}
		}
		me._popup_phone.logicBlock_visible();
		me._popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		els=me._close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQzLjMxIiB5MT0iMjAuNjkiIHgxPSIyMC42OSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5Mj0iNDMuMzEiLz4KICA8bGluZSB4Mj0iMjAuNj'+
			'kiIHkxPSIyMC42OSIgeDE9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkyPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBjeD0iMzIiIHN0eWxlPSJmaWxsOiM0ZDRkNGQiIGN5PSIzMiIvPgogPC9nPgogPGcgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIiBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3QgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHgyPSI0My4zMSIgeTE9IjIwLjY5IiB4MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3'+
			'Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQzLjMxIi8+CiAgPGxpbmUgeDI9IjIwLjY5IiB5MT0iMjAuNjkiIHgxPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_popup', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_floorplan', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me._close_popup_phone__img.style.visibility='hidden';
			me._close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['close_popup_phone']=true;
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me._close_popup_phone__img.style.visibility='inherit';
			me._close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['close_popup_phone']=false;
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._close_popup_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
			if (me._floorplan_el_phone.ggMapNotLoaded == false) {
				me._floorplan_el_phone.ggMap.invalidateSize(false);
			}
		}
		me._popup_phone.appendChild(me._floorplan_el_phone);
		el=me._fullscreen_floor_menu_phone=document.createElement('div');
		el.ggId="fullscreen_floor menu_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1000;';
		hs+='height : 22px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '99');
		el.style.transformOrigin='50% 50%';
		me._fullscreen_floor_menu_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_floor_menu_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_floor_menu_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_floor_menu_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_floor_menu_phone.style.transition='';
				if (me._fullscreen_floor_menu_phone.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_floor_menu_phone.style.visibility=(Number(me._fullscreen_floor_menu_phone.style.opacity)>0||!me._fullscreen_floor_menu_phone.style.opacity)?'inherit':'hidden';
					me._fullscreen_floor_menu_phone.ggVisible=true;
				}
				else {
					me._fullscreen_floor_menu_phone.style.visibility="hidden";
					me._fullscreen_floor_menu_phone.ggVisible=false;
				}
			}
		}
		me._fullscreen_floor_menu_phone.logicBlock_visible();
		me._fullscreen_floor_menu_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_floors_phone=document.createElement('div');
		els=me._fullscreen_floors_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="fullscreen_floors_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._fullscreen_floors_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u0442\u0430\u0436\u0438", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._fullscreen_floors_phone.ggUpdateText();
		el.appendChild(els);
		me._fullscreen_floors_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_floors_phone.onclick=function (e) {
			player.setVariableValue('vis_floorMenu', !player.getVariableValue('vis_floorMenu'));
		}
		me._fullscreen_floors_phone.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_floor_menu_phone.appendChild(me._fullscreen_floors_phone);
		el=me._fullscreen_floors_phone_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 200;
		el.ggHeight = 25;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._fullscreen_floors_phone_cloner.ggUpdating == true) return;
			me._fullscreen_floors_phone_cloner.ggUpdating = true;
			var el=me._fullscreen_floors_phone_cloner;
			var curNumCols = 0;
			curNumCols = me._fullscreen_floors_phone_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && false) {
				me._fullscreen_floors_phone_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._fullscreen_floors_phone_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._fullscreen_floors_phone_cloner.ggNumFilterPassed = el.ggFloorplans.length;
			for (var i = 0; i < el.ggFloorplans.length; i++) {
				var cItem = player.getMapDetails(el.ggFloorplans[i]);
				var nodeId = {};
				nodeId['tag'] = el.ggFloorplans[i];
				nodeId['title'] = cItem.title;
				if (!keepCloning || i < me._fullscreen_floors_phone_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._fullscreen_floors_phone_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._fullscreen_floors_phone_cloner.ggWidth) + 'px';
				parameter.width=me._fullscreen_floors_phone_cloner.ggWidth + 'px';
				parameter.height=me._fullscreen_floors_phone_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_fullscreen_floors_phone_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._fullscreen_floors_phone_cloner.ggNodeCount = me._fullscreen_floors_phone_cloner.ggNumFilterPassed;
			me._fullscreen_floors_phone_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._fullscreen_floors_phone_cloner.parentNode && me._fullscreen_floors_phone_cloner.parentNode.classList.contains('ggskin_subelement') && me._fullscreen_floors_phone_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._fullscreen_floors_phone_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFloorplans = [];
		el.ggId="fullscreen_floors_phone Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 1px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '99');
		el.style.transformOrigin='50% 50%';
		me._fullscreen_floors_phone_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_floors_phone_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorMenu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_floors_phone_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_floors_phone_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_floors_phone_cloner.style.transition='';
				if (me._fullscreen_floors_phone_cloner.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_floors_phone_cloner.style.visibility=(Number(me._fullscreen_floors_phone_cloner.style.opacity)>0||!me._fullscreen_floors_phone_cloner.style.opacity)?'inherit':'hidden';
					me._fullscreen_floors_phone_cloner.ggVisible=true;
				}
				else {
					me._fullscreen_floors_phone_cloner.style.visibility="hidden";
					me._fullscreen_floors_phone_cloner.ggVisible=false;
				}
			}
		}
		me._fullscreen_floors_phone_cloner.logicBlock_visible();
		me._fullscreen_floors_phone_cloner.ggCurrentLogicStateVisible = -1;
		me._fullscreen_floors_phone_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._fullscreen_floors_phone_cloner.childNodes.length; i++) {
				var child=me._fullscreen_floors_phone_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._fullscreen_floors_phone_cloner.ggUpdatePosition=function (useTransition) {
			me._fullscreen_floors_phone_cloner.ggUpdate();
		}
		me._fullscreen_floor_menu_phone.appendChild(me._fullscreen_floors_phone_cloner);
		me._popup_phone.appendChild(me._fullscreen_floor_menu_phone);
		me._safe_area_phone.appendChild(me._popup_phone);
		me.divSkin.appendChild(me._safe_area_phone);
		el=me._code_element_1=document.createElement('div');
		el.ggId="Code Element   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._code_element_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._code_element_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._code_element_1);
		el=me._style=document.createElement('div');
		els=me._style__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Style";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._style.ggUpdateText=function() {
			var params = [];
			var hs = player._("<style>\n    \/* Css \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0430 *\/\n    \/* \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a: \u0440\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430 \u043e\u0442 18px \u0434\u043e 24px *\/\n    .responsive-title {\n        display: block;\n        \/* \u0447\u0442\u043e\u0431\u044b max-width \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u043b\u0441\u044f *\/\n        max-width: 100%;\n        font-size: clamp(18px, 4vw, 24px);\n        box-sizing: border-box;\n        word-wrap: break-word;\n        white-space: pre-wrap;\n    }\n\n    \/* \u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442: \u0434\u043e 200px, \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0441\u043b\u043e\u0432 *\/\n    .responsive-text {\n        max-width: 400px;\n        font-size: clamp(12px, 2.5vw, 16px);\n        line-height: 1.4;\n        box-sizing: border-box;\n        word-wrap: break-word;\n        white-space: pre-wrap;\n    }\n<\/style>\n\n<style>\n    \/* Css \u0434\u043b\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u043e\u0433\u043e \u043e\u043a\u043d\u0430 *\/\n    * {\n        white-space: unset !important;\n    }\n\n    .header {\n        text-align: center;\n        max-width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto;\n        white-space: unset;\n    }\n\n    .header h1,\n    .header h2,\n    .header h3 {\n        margin: 5px 0;\n        font-weight: 600;\n        line-height: 1.3;\n        word-wrap: break-word;\n        word-break: keep-all;\n    }\n\n    .header h1 {\n        font-size: clamp(24px, 2.5vw, 28px);\n        color: #333;\n    }\n\n    .header h2 {\n        font-size: clamp(16px, 2vw, 24px);\n        color: #555;\n        font-weight: 500;\n    }\n\n    .header h3 {\n        font-size: clamp(18px, 2.5vw, 26px);\n        color: #0066cc;\n        font-weight: 700;\n    }\n<\/style>\n\n<style>\n    \/* Css \u0434\u043b\u044f \u043e\u043a\u043d\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 *\/\n    #tourContainer {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: flex;\n        flex-wrap: wrap;\n        align-content: flex-start;\n        justify-content: flex-start;\n        overflow: auto;\n        box-sizing: border-box;\n    }\n\n    .tour-item {\n        position: relative;\n        max-width: 200px;\n        flex: 1 1 172px;\n        margin: 4px;\n        cursor: pointer;\n    }\n\n    @media (max-width: 800px) {\n        .tour-item {\n            flex: 1 1 95px;\n        }\n    }\n\n    .tour-item img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        border-radius: 8px;\n        pointer-events: none;\n        user-drag: none;\n    }\n\n    .tour-item .overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 33%;\n        background: rgba(40, 40, 40, 0.6);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .tour-item .overlay .title {\n        color: #fff;\n        font-size: clamp(14px, 2vw, 20px);\n        padding: 2px;\n        text-align: center;\n        white-space: pre-line;\n    }\n\n    .tour-item .highlight {\n        position: absolute;\n        width: calc(100% - 8px);\n        height: calc(100% - 8px);\n        border: 4px solid #e6e6e6;\n        border-radius: 8px;\n        visibility: hidden;\n        pointer-events: none;\n        transition: visibility 0.1s;\n    }\n\n    .tour-item:hover .highlight {\n        visibility: inherit;\n    }\n\n    #searchWrapper {\n        position: absolute;\n        top: 8px;\n        z-index: 1001;\n        width: 100%;\n    }\n\n    #searchInput {\n        font-size: clamp(14px, 2vw, 20px);\n        width: 100%;\n        min-width: 100px;\n        padding: 8px;\n        box-sizing: border-box;\n        transition: width 0.2s ease;\n    }\n<\/style>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._style.ggUpdateText();
		el.appendChild(els);
		me._style.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._style.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._style);
		me._container_controls.logicBlock_visible();
		me._controls_right.logicBlock_visible();
		me._cr_fullscreen.logicBlock_visible();
		me._cr_fs_exit.logicBlock_visible();
		me.elementMouseOver['cr_fs_exit']=false;
		me._cr_fs_enter.logicBlock_visible();
		me.elementMouseOver['cr_fs_enter']=false;
		me._container_controls_left.logicBlock_position();
		me._cl_map.logicBlock_visible();
		me.elementMouseOver['cl_map']=false;
		me._cl_map_active.logicBlock_visible();
		me._cl_thumbnails.logicBlock_visible();
		me.elementMouseOver['cl_thumbnails']=false;
		me._cl_thumbnails_active.logicBlock_visible();
		me._cl_floorplan.logicBlock_visible();
		me.elementMouseOver['cl_floorplan']=false;
		me._cl_floorplan_active.logicBlock_visible();
		me._cl_share.logicBlock_visible();
		me.elementMouseOver['cl_share']=false;
		me._cl_share_active.logicBlock_visible();
		me._toggle_controls_left.logicBlock_angle();
		me.elementMouseOver['toggle_controls_left']=false;
		me._controller.logicBlock_visible();
		me._controller_next.logicBlock_visible();
		me._controller_next.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_next']=false;
		me.elementMouseOver['controller_next_icon']=false;
		me._controller_previous_.logicBlock_visible();
		me._controller_previous_.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_previous_']=false;
		me.elementMouseOver['controller_prev_icon']=false;
		me._controller_zoom_in_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_zoom_in_bg']=false;
		me.elementMouseOver['controller_zoom_in_icon']=false;
		me._controller_zoom_out_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_zoom_out_bg']=false;
		me.elementMouseOver['controller_zoom_out_icon']=false;
		me._controller_move_left_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_left_bg']=false;
		me._controller_move_left_hover_icon.logicBlock_visible();
		me._controller_move_down_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_down_bg']=false;
		me._controller_move_down_hover_icon.logicBlock_visible();
		me._controller_move_right_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_right_bg']=false;
		me._controller_move_right_hover_icon.logicBlock_visible();
		me._controller_move_up_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['controller_move_up_bg']=false;
		me._controller_move_up_hover_icon.logicBlock_visible();
		me._phone_next.logicBlock_visible();
		me._phone_next.logicBlock_backgroundcolor();
		me.elementMouseOver['phone_next']=false;
		me.elementMouseOver['phone_next_icon']=false;
		me._phone_previous_.logicBlock_visible();
		me._phone_previous_.logicBlock_backgroundcolor();
		me.elementMouseOver['phone_previous_']=false;
		me.elementMouseOver['phone_prev_icon']=false;
		me._header.logicBlock_size();
		me._text_block.logicBlock_position();
		me._logo.logicBlock_size();
		me._background_blur.logicBlock_visible();
		me._map.logicBlock_visible();
		me._floorplan_content.ggMarkerInstances=[];
		me._floorplan_content.ggLastNodeId=null;
		me._floorplan_content.ggMarkerArray=[];
		me._floorplan_content.ggGoogleMarkerArray=[];
		me._floorplan_content.ggLastZoom = -1;
		me._floorplan_content.ggLastLat = 0.0;
		me._floorplan_content.ggLastLng = 0.0;
		me._floorplan_content.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._floorplan_content.ggRadar.update=function() {
			var radar=me._floorplan_content.ggRadar;
			var map=me._floorplan_content.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._floorplan_content.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan_content.ggMapId);
				pan -= me._floorplan_content.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_content.ggFilteredIds.length > 0 && me._floorplan_content.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.3125;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#ffa2a4',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#ffa2a4',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._floorplan_content.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._floorplan_content.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._floorplan_content.ggSetLayer=function(layerIndex) {
			if (typeof me._floorplan_content.ggMapLayers === 'object' && me._floorplan_content.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me._floorplan_content.ggMapLayers).length) {
				me._floorplan_content.ggMap.removeLayer(me._floorplan_content.ggCurMap);
				me._floorplan_content.ggCurMap = me._floorplan_content.ggMapLayers[Object.keys(me._floorplan_content.ggMapLayers)[layerIndex]];
				me._floorplan_content.ggMap.addLayer(me._floorplan_content.ggCurMap);
			}
		}
		me._floorplan_content.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._floorplan_content.ggMapId);
			var mapDetails = player.getMapDetails(me._floorplan_content.ggMapId);
			if (!me._floorplan_content.ggMapId) return;
			if (!me._floorplan_content.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._floorplan_content.style.backgroundColor = mapDetails['bgcolor'];
				me._floorplan_content.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._floorplan_content.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._floorplan_content.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan_content.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me._floorplan_content.ggLastLat, me._floorplan_content.ggLastLng);
			}
			if (mapType == 'web') {
				if (me._floorplan_content.ggLastZoom == -1) me._floorplan_content.ggLastZoom = 14;
				var initZoom = keepZoom ? me._floorplan_content.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._floorplan_content.ggMap = L.map(me._floorplan_content, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me._floorplan_content.ggMap.setMaxBounds(maxBounds);
					me._floorplan_content.ggMap.setMinZoom(me._floorplan_content.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan_content.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan_content.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._floorplan_content.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me._floorplan_content.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._floorplan_content.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._floorplan_content.ggMapLayers, overlayMaps).addTo(me._floorplan_content.ggMap);
						me._floorplan_content.ggCurMap.addTo(me._floorplan_content.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me._floorplan_content.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._floorplan_content.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me._floorplan_content.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._floorplan_content.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._floorplan_content.ggMapLayers, overlayMaps).addTo(me._floorplan_content.ggMap);
						me._floorplan_content.ggCurMap.addTo(me._floorplan_content.ggMap);
						me._floorplan_content.ggMap.on('baselayerchange', function(event) {
							me._floorplan_content.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._floorplan_content.ggMap);
					}
				}
				me._floorplan_content.ggMap.on('zoom', function() {
					me._floorplan_content.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me._floorplan_content.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._floorplan_content.mapHeightInDeg / 2;
					mapCenter.lng = me._floorplan_content.mapWidthInDeg / 2;
				}
				if (me._floorplan_content.ggLastZoom == -1) me._floorplan_content.ggLastZoom = 7;
				var initZoom = keepZoom ? me._floorplan_content.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._floorplan_content.ggMap = L.map(me._floorplan_content, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._floorplan_content.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._floorplan_content.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._floorplan_content.ggMap);
				me._floorplan_content.ggMap.on('move zoom', function() {
					me._floorplan_content.ggCheckBounds(mapDetails);
					me._floorplan_content.ggRadar.update();
				});
				me._floorplan_content.ggCheckBounds(mapDetails);
			}
			me._floorplan_content.ggMapNotLoaded = false;
		}
		me._floorplan_content.ggClearMap=function() {
		me._floorplan_content.ggClearMapMarkers();
		if (me._floorplan_content.ggMap) me._floorplan_content.ggMap.remove();
		me._floorplan_content.ggMap = null;
		me._floorplan_content.ggMapNotLoaded = true;
		}
		me._floorplan_content.ggClearMapMarkers=function() {
			me._floorplan_content.ggLastActivMarker = null;
			var id,marker;
			var markers=me._floorplan_content.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._floorplan_content.ggMap);
				}
			}
			me._floorplan_content.ggMarkerArray=[];
			me._floorplan_content.ggMarkerInstances=[];
			me._floorplan_content.ggLastActivMarker = null;
		}
		me._floorplan_content.ggCenterNode=function(nodeId) {
			if (!me._floorplan_content.ggMap) return;
			var gps;
			if (player.getMapType(me._floorplan_content.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._floorplan_content.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._floorplan_content.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._floorplan_content.ggFitBounds=function(force) {
			if (me._floorplan_content.ggMapNotLoaded) return;
			if (!me._floorplan_content.ggMap) return;
			if (me._floorplan_content.ggMarkerBounds.isValid()) {
				if (me._floorplan_content.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._floorplan_content.ggGoogleMarkerArray).length > 1) {
					me._floorplan_content.ggMap.zoomOut(1, {animate: false});
					me._floorplan_content.ggMap.fitBounds(me._floorplan_content.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me._floorplan_content.ggMap.setView(me._floorplan_content.ggMarkerBounds.getCenter(), me._floorplan_content.ggMap.getZoom());
					if (player.getMapType(me._floorplan_content.ggMapId) == 'web') {
						me._floorplan_content.ggMap.setZoom(18);
					} else {
						me._floorplan_content.ggMap.setZoom(7);
					}
				}
			}
		}
		me._floorplan_content.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._floorplan_content.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -12 + 'px';
					div.style.top = -41 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._floorplan_content.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_content.ggFilteredIds = [];
			if (me._floorplan_content.ggFilter != '') {
				var filter = me._floorplan_content.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_content.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_content.ggFilteredIds.length > 0) ids = me._floorplan_content.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._floorplan_content.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._floorplan_content.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._floorplan_content.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._floorplan_content.ggMap);
					me._floorplan_content.ggMarkerArray[id]=marker;
					me._floorplan_content.ggMarkerInstances.push(div);
					me._floorplan_content.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._floorplan_content.ggMarkerBounds.isValid() && updateMapBounds) {
				me._floorplan_content.ggFitBounds(false);
			}
			skin.updateSize(me._floorplan_content);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._floorplan_content.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_content.ggMapId = mapId;
			if (!me._floorplan_content.ggMapNotLoaded) {
				me._floorplan_content.ggLastZoom = me._floorplan_content.ggMap.getZoom();
				me._floorplan_content.ggLastLat = me._floorplan_content.ggMap.getCenter().lat;
				me._floorplan_content.ggLastLng = me._floorplan_content.ggMap.getCenter().lng;
				me._floorplan_content.ggClearMap();
				me._floorplan_content.ggInitMap(true);
				me._floorplan_content.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me._floorplan_content.ggMapId);
				me._floorplan_content.ggCalculateFloorplanDimInDeg(mapDetails);
				me._floorplan_content.ggCheckBounds(mapDetails);
			}
		}
		me._floorplan_content.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._floorplan_content.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._floorplan_content.mapHeightInDeg = me._floorplan_content.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._floorplan_content.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._floorplan_content.mapWidthInDeg = me._floorplan_content.mapHeightInDeg * mapAR;
			}
		}
		me._floorplan_content.ggInCheckBounds=false;
		me._floorplan_content.ggCheckBounds=function(mapDetails) {
			if (me._floorplan_content.ggInCheckBounds) return;
			me._floorplan_content.ggInCheckBounds = true;
			var mapCenter = me._floorplan_content.ggMap.getCenter();
			var currentZoom = me._floorplan_content.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._floorplan_content.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._floorplan_content.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._floorplan_content.mapWidthInDeg < me._floorplan_content.clientWidth * pixelInDeg) {
				var xMargin = (me._floorplan_content.clientWidth * pixelInDeg - me._floorplan_content.mapWidthInDeg) / 2;
				if (x < me._floorplan_content.mapWidthInDeg / 2 - xMargin) x = me._floorplan_content.mapWidthInDeg / 2 - xMargin;
				if (x > me._floorplan_content.mapWidthInDeg / 2 + xMargin) x = me._floorplan_content.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._floorplan_content.mapWidthInDeg - xOffset) x = me._floorplan_content.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._floorplan_content.mapHeightInDeg < me._floorplan_content.clientHeight * pixelInDeg) {
				var yMargin = (me._floorplan_content.clientHeight * pixelInDeg - me._floorplan_content.mapHeightInDeg) / 2;
				if (y < -me._floorplan_content.mapHeightInDeg / 2 - yMargin) y = -me._floorplan_content.mapHeightInDeg / 2 - yMargin;
				if (y > -me._floorplan_content.mapHeightInDeg / 2 + yMargin) y = -me._floorplan_content.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._floorplan_content.mapHeightInDeg + yOffset) y = -me._floorplan_content.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._floorplan_content.ggMap.setView(newCenter, me._floorplan_content.ggMap.getZoom(), {animate: false});
			}
			me._floorplan_content.ggInCheckBounds = false;
		}
		me.elementMouseOver['map_close']=false;
		me.elementMouseOver['map_full']=false;
		me._floor_menu.logicBlock_visible();
		me._floors_cloner.logicBlock_visible();
		me._map_fullscreen.logicBlock_visible();
		me._floorplan_fs_content.ggMarkerInstances=[];
		me._floorplan_fs_content.ggLastNodeId=null;
		me._floorplan_fs_content.ggMarkerArray=[];
		me._floorplan_fs_content.ggGoogleMarkerArray=[];
		me._floorplan_fs_content.ggLastZoom = -1;
		me._floorplan_fs_content.ggLastLat = 0.0;
		me._floorplan_fs_content.ggLastLng = 0.0;
		me._floorplan_fs_content.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._floorplan_fs_content.ggRadar.update=function() {
			var radar=me._floorplan_fs_content.ggRadar;
			var map=me._floorplan_fs_content.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._floorplan_fs_content.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan_fs_content.ggMapId);
				pan -= me._floorplan_fs_content.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_fs_content.ggFilteredIds.length > 0 && me._floorplan_fs_content.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.976563;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#4a4a4a',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#4a4a4a',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._floorplan_fs_content.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._floorplan_fs_content.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._floorplan_fs_content.ggSetLayer=function(layerIndex) {
			if (typeof me._floorplan_fs_content.ggMapLayers === 'object' && me._floorplan_fs_content.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me._floorplan_fs_content.ggMapLayers).length) {
				me._floorplan_fs_content.ggMap.removeLayer(me._floorplan_fs_content.ggCurMap);
				me._floorplan_fs_content.ggCurMap = me._floorplan_fs_content.ggMapLayers[Object.keys(me._floorplan_fs_content.ggMapLayers)[layerIndex]];
				me._floorplan_fs_content.ggMap.addLayer(me._floorplan_fs_content.ggCurMap);
			}
		}
		me._floorplan_fs_content.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._floorplan_fs_content.ggMapId);
			var mapDetails = player.getMapDetails(me._floorplan_fs_content.ggMapId);
			if (!me._floorplan_fs_content.ggMapId) return;
			if (!me._floorplan_fs_content.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._floorplan_fs_content.style.backgroundColor = mapDetails['bgcolor'];
				me._floorplan_fs_content.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._floorplan_fs_content.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._floorplan_fs_content.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan_fs_content.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me._floorplan_fs_content.ggLastLat, me._floorplan_fs_content.ggLastLng);
			}
			if (mapType == 'web') {
				if (me._floorplan_fs_content.ggLastZoom == -1) me._floorplan_fs_content.ggLastZoom = 14;
				var initZoom = keepZoom ? me._floorplan_fs_content.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._floorplan_fs_content.ggMap = L.map(me._floorplan_fs_content, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me._floorplan_fs_content.ggMap.setMaxBounds(maxBounds);
					me._floorplan_fs_content.ggMap.setMinZoom(me._floorplan_fs_content.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan_fs_content.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan_fs_content.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._floorplan_fs_content.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me._floorplan_fs_content.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._floorplan_fs_content.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._floorplan_fs_content.ggMapLayers, overlayMaps).addTo(me._floorplan_fs_content.ggMap);
						me._floorplan_fs_content.ggCurMap.addTo(me._floorplan_fs_content.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me._floorplan_fs_content.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._floorplan_fs_content.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me._floorplan_fs_content.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._floorplan_fs_content.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._floorplan_fs_content.ggMapLayers, overlayMaps).addTo(me._floorplan_fs_content.ggMap);
						me._floorplan_fs_content.ggCurMap.addTo(me._floorplan_fs_content.ggMap);
						me._floorplan_fs_content.ggMap.on('baselayerchange', function(event) {
							me._floorplan_fs_content.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._floorplan_fs_content.ggMap);
					}
				}
				me._floorplan_fs_content.ggMap.on('zoom', function() {
					me._floorplan_fs_content.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me._floorplan_fs_content.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._floorplan_fs_content.mapHeightInDeg / 2;
					mapCenter.lng = me._floorplan_fs_content.mapWidthInDeg / 2;
				}
				if (me._floorplan_fs_content.ggLastZoom == -1) me._floorplan_fs_content.ggLastZoom = 7;
				var initZoom = keepZoom ? me._floorplan_fs_content.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._floorplan_fs_content.ggMap = L.map(me._floorplan_fs_content, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._floorplan_fs_content.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._floorplan_fs_content.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._floorplan_fs_content.ggMap);
				me._floorplan_fs_content.ggMap.on('move zoom', function() {
					me._floorplan_fs_content.ggCheckBounds(mapDetails);
					me._floorplan_fs_content.ggRadar.update();
				});
				me._floorplan_fs_content.ggCheckBounds(mapDetails);
			}
			me._floorplan_fs_content.ggMapNotLoaded = false;
		}
		me._floorplan_fs_content.ggClearMap=function() {
		me._floorplan_fs_content.ggClearMapMarkers();
		if (me._floorplan_fs_content.ggMap) me._floorplan_fs_content.ggMap.remove();
		me._floorplan_fs_content.ggMap = null;
		me._floorplan_fs_content.ggMapNotLoaded = true;
		}
		me._floorplan_fs_content.ggClearMapMarkers=function() {
			me._floorplan_fs_content.ggLastActivMarker = null;
			var id,marker;
			var markers=me._floorplan_fs_content.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._floorplan_fs_content.ggMap);
				}
			}
			me._floorplan_fs_content.ggMarkerArray=[];
			me._floorplan_fs_content.ggMarkerInstances=[];
			me._floorplan_fs_content.ggLastActivMarker = null;
		}
		me._floorplan_fs_content.ggCenterNode=function(nodeId) {
			if (!me._floorplan_fs_content.ggMap) return;
			var gps;
			if (player.getMapType(me._floorplan_fs_content.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._floorplan_fs_content.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._floorplan_fs_content.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._floorplan_fs_content.ggFitBounds=function(force) {
			if (me._floorplan_fs_content.ggMapNotLoaded) return;
			if (!me._floorplan_fs_content.ggMap) return;
			if (me._floorplan_fs_content.ggMarkerBounds.isValid()) {
				if (me._floorplan_fs_content.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._floorplan_fs_content.ggGoogleMarkerArray).length > 1) {
					me._floorplan_fs_content.ggMap.zoomOut(1, {animate: false});
					me._floorplan_fs_content.ggMap.fitBounds(me._floorplan_fs_content.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me._floorplan_fs_content.ggMap.setView(me._floorplan_fs_content.ggMarkerBounds.getCenter(), me._floorplan_fs_content.ggMap.getZoom());
					if (player.getMapType(me._floorplan_fs_content.ggMapId) == 'web') {
						me._floorplan_fs_content.ggMap.setZoom(18);
					} else {
						me._floorplan_fs_content.ggMap.setZoom(7);
					}
				}
			}
		}
		me._floorplan_fs_content.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._floorplan_fs_content.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -12 + 'px';
					div.style.top = -41 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._floorplan_fs_content.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_fs_content.ggFilteredIds = [];
			if (me._floorplan_fs_content.ggFilter != '') {
				var filter = me._floorplan_fs_content.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_fs_content.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_fs_content.ggFilteredIds.length > 0) ids = me._floorplan_fs_content.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._floorplan_fs_content.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._floorplan_fs_content.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._floorplan_fs_content.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._floorplan_fs_content.ggMap);
					me._floorplan_fs_content.ggMarkerArray[id]=marker;
					me._floorplan_fs_content.ggMarkerInstances.push(div);
					me._floorplan_fs_content.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._floorplan_fs_content.ggMarkerBounds.isValid() && updateMapBounds) {
				me._floorplan_fs_content.ggFitBounds(false);
			}
			skin.updateSize(me._floorplan_fs_content);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._floorplan_fs_content.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_fs_content.ggMapId = mapId;
			if (!me._floorplan_fs_content.ggMapNotLoaded) {
				me._floorplan_fs_content.ggLastZoom = me._floorplan_fs_content.ggMap.getZoom();
				me._floorplan_fs_content.ggLastLat = me._floorplan_fs_content.ggMap.getCenter().lat;
				me._floorplan_fs_content.ggLastLng = me._floorplan_fs_content.ggMap.getCenter().lng;
				me._floorplan_fs_content.ggClearMap();
				me._floorplan_fs_content.ggInitMap(true);
				me._floorplan_fs_content.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me._floorplan_fs_content.ggMapId);
				me._floorplan_fs_content.ggCalculateFloorplanDimInDeg(mapDetails);
				me._floorplan_fs_content.ggCheckBounds(mapDetails);
			}
		}
		me._floorplan_fs_content.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._floorplan_fs_content.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._floorplan_fs_content.mapHeightInDeg = me._floorplan_fs_content.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._floorplan_fs_content.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._floorplan_fs_content.mapWidthInDeg = me._floorplan_fs_content.mapHeightInDeg * mapAR;
			}
		}
		me._floorplan_fs_content.ggInCheckBounds=false;
		me._floorplan_fs_content.ggCheckBounds=function(mapDetails) {
			if (me._floorplan_fs_content.ggInCheckBounds) return;
			me._floorplan_fs_content.ggInCheckBounds = true;
			var mapCenter = me._floorplan_fs_content.ggMap.getCenter();
			var currentZoom = me._floorplan_fs_content.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._floorplan_fs_content.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._floorplan_fs_content.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._floorplan_fs_content.mapWidthInDeg < me._floorplan_fs_content.clientWidth * pixelInDeg) {
				var xMargin = (me._floorplan_fs_content.clientWidth * pixelInDeg - me._floorplan_fs_content.mapWidthInDeg) / 2;
				if (x < me._floorplan_fs_content.mapWidthInDeg / 2 - xMargin) x = me._floorplan_fs_content.mapWidthInDeg / 2 - xMargin;
				if (x > me._floorplan_fs_content.mapWidthInDeg / 2 + xMargin) x = me._floorplan_fs_content.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._floorplan_fs_content.mapWidthInDeg - xOffset) x = me._floorplan_fs_content.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._floorplan_fs_content.mapHeightInDeg < me._floorplan_fs_content.clientHeight * pixelInDeg) {
				var yMargin = (me._floorplan_fs_content.clientHeight * pixelInDeg - me._floorplan_fs_content.mapHeightInDeg) / 2;
				if (y < -me._floorplan_fs_content.mapHeightInDeg / 2 - yMargin) y = -me._floorplan_fs_content.mapHeightInDeg / 2 - yMargin;
				if (y > -me._floorplan_fs_content.mapHeightInDeg / 2 + yMargin) y = -me._floorplan_fs_content.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._floorplan_fs_content.mapHeightInDeg + yOffset) y = -me._floorplan_fs_content.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._floorplan_fs_content.ggMap.setView(newCenter, me._floorplan_fs_content.ggMap.getZoom(), {animate: false});
			}
			me._floorplan_fs_content.ggInCheckBounds = false;
		}
		me._floorplan_fs_content.logicBlock_visible();
		me.elementMouseOver['map_fs_close']=false;
		me.elementMouseOver['map_fs_small']=false;
		me._fullscreen_floors_cloner.logicBlock_visible();
		me._thumbnails_fullscreen.logicBlock_visible();
		me.elementMouseOver['thumbnails_fs_close']=false;
		me._start_menu.logicBlock_visible();
		me._header_start.logicBlock_size();
		me._title.logicBlock_text();
		me._logo_1.logicBlock_size();
		me._map_fs_close_2.logicBlock_size();
		me.elementMouseOver['map_fs_close_2']=false;
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		me._popup_phone.logicBlock_visible();
		me.elementMouseOver['close_popup_phone']=false;
		me._floorplan_el_phone.ggMarkerInstances=[];
		me._floorplan_el_phone.ggLastNodeId=null;
		me._floorplan_el_phone.ggMarkerArray=[];
		me._floorplan_el_phone.ggGoogleMarkerArray=[];
		me._floorplan_el_phone.ggLastZoom = -1;
		me._floorplan_el_phone.ggLastLat = 0.0;
		me._floorplan_el_phone.ggLastLng = 0.0;
		me._floorplan_el_phone.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._floorplan_el_phone.ggRadar.update=function() {
			var radar=me._floorplan_el_phone.ggRadar;
			var map=me._floorplan_el_phone.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan_el_phone.ggMapId);
				pan -= me._floorplan_el_phone.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan_el_phone.ggFilteredIds.length > 0 && me._floorplan_el_phone.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.3125;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#4a4a4a',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#4a4a4a',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._floorplan_el_phone.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._floorplan_el_phone.ggSetLayer=function(layerIndex) {
			if (typeof me._floorplan_el_phone.ggMapLayers === 'object' && me._floorplan_el_phone.ggMapLayers !== null && layerIndex >= 0 && layerIndex < Object.keys(me._floorplan_el_phone.ggMapLayers).length) {
				me._floorplan_el_phone.ggMap.removeLayer(me._floorplan_el_phone.ggCurMap);
				me._floorplan_el_phone.ggCurMap = me._floorplan_el_phone.ggMapLayers[Object.keys(me._floorplan_el_phone.ggMapLayers)[layerIndex]];
				me._floorplan_el_phone.ggMap.addLayer(me._floorplan_el_phone.ggCurMap);
			}
		}
		me._floorplan_el_phone.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._floorplan_el_phone.ggMapId);
			var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
			if (!me._floorplan_el_phone.ggMapId) return;
			if (!me._floorplan_el_phone.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._floorplan_el_phone.style.backgroundColor = mapDetails['bgcolor'];
				me._floorplan_el_phone.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._floorplan_el_phone.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan_el_phone.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(me._floorplan_el_phone.ggLastLat, me._floorplan_el_phone.ggLastLng);
			}
			if (mapType == 'web') {
				if (me._floorplan_el_phone.ggLastZoom == -1) me._floorplan_el_phone.ggLastZoom = 14;
				var initZoom = keepZoom ? me._floorplan_el_phone.ggLastZoom : 14;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					maxBoundsViscosity: 1.0,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._floorplan_el_phone.ggMap = L.map(me._floorplan_el_phone, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					var maxBounds = [
						[parseFloat(mapDetails['maplimits'][0]), parseFloat(mapDetails['maplimits'][1])],
						[parseFloat(mapDetails['maplimits'][2]), parseFloat(mapDetails['maplimits'][3])]
					];
					me._floorplan_el_phone.ggMap.setMaxBounds(maxBounds);
					me._floorplan_el_phone.ggMap.setMinZoom(me._floorplan_el_phone.ggMap.getBoundsZoom(maxBounds) - 1);
				}
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan_el_phone.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan_el_phone.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._floorplan_el_phone.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
						var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
						var custMap;
						if (!layerStyle.startsWith('mapbox:')) {
							if (layerStyle == 'satellite') {
								custMap = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + layerStyle + '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'], {}); 
							} else {
								custMap = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });
							}
						} else {
							layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7);
							custMap = L.tileLayer('https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});
						}
							me._floorplan_el_phone.ggMapLayers[mapDetails['mapboxlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._floorplan_el_phone.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._floorplan_el_phone.ggMapLayers, overlayMaps).addTo(me._floorplan_el_phone.ggMap);
						me._floorplan_el_phone.ggCurMap.addTo(me._floorplan_el_phone.ggMap);
					} else {
						var styleUrl = mapDetails['styleurl'];
						var layer;
						if (styleUrl == '') {
							if (mapDetails['mapstyle'] == 'satellite') {
								layer = L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{});
							} else {
								layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"], { tileSize: 512, zoomOffset: -1 });;
							}
						} else {
							styleUrl = styleUrl.slice(styleUrl.indexOf('styles/') + 7);
							layer = L.tileLayer('https://api.mapbox.com/styles/v1/' + styleUrl + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"],{});;
						}
						layer.addTo(me._floorplan_el_phone.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._floorplan_el_phone.ggMapLayers = {};
						var firstCustMap;
						for (var layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var custMap = L.tileLayer(mapDetails['customlayerurltemplates'][layerIndex], { maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex])});
							me._floorplan_el_phone.ggMapLayers[mapDetails['customlayernames'][layerIndex]] = custMap;
							if (layerIndex == 0) {
								me._floorplan_el_phone.ggCurMap = custMap;
							}
						}
						var overlayMaps = {};
						L.control.layers(me._floorplan_el_phone.ggMapLayers, overlayMaps).addTo(me._floorplan_el_phone.ggMap);
						me._floorplan_el_phone.ggCurMap.addTo(me._floorplan_el_phone.ggMap);
						me._floorplan_el_phone.ggMap.on('baselayerchange', function(event) {
							me._floorplan_el_phone.ggMap.setMaxZoom(mapDetails['customlayermaxzooms'][mapDetails['customlayernames'].indexOf(event.name)]);
						});
					} else {
						L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._floorplan_el_phone.ggMap);
					}
				}
				me._floorplan_el_phone.ggMap.on('zoom', function() {
					me._floorplan_el_phone.ggRadar.update();
				});
			} else if (mapType == 'file') {
				me._floorplan_el_phone.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._floorplan_el_phone.mapHeightInDeg / 2;
					mapCenter.lng = me._floorplan_el_phone.mapWidthInDeg / 2;
				}
				if (me._floorplan_el_phone.ggLastZoom == -1) me._floorplan_el_phone.ggLastZoom = 7;
				var initZoom = keepZoom ? me._floorplan_el_phone.ggLastZoom : 7;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._floorplan_el_phone.ggMap = L.map(me._floorplan_el_phone, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._floorplan_el_phone.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._floorplan_el_phone.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._floorplan_el_phone.ggMap);
				me._floorplan_el_phone.ggMap.on('move zoom', function() {
					me._floorplan_el_phone.ggCheckBounds(mapDetails);
					me._floorplan_el_phone.ggRadar.update();
				});
				me._floorplan_el_phone.ggCheckBounds(mapDetails);
			}
			me._floorplan_el_phone.ggMapNotLoaded = false;
		}
		me._floorplan_el_phone.ggClearMap=function() {
		me._floorplan_el_phone.ggClearMapMarkers();
		if (me._floorplan_el_phone.ggMap) me._floorplan_el_phone.ggMap.remove();
		me._floorplan_el_phone.ggMap = null;
		me._floorplan_el_phone.ggMapNotLoaded = true;
		}
		me._floorplan_el_phone.ggClearMapMarkers=function() {
			me._floorplan_el_phone.ggLastActivMarker = null;
			var id,marker;
			var markers=me._floorplan_el_phone.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._floorplan_el_phone.ggMap);
				}
			}
			me._floorplan_el_phone.ggMarkerArray=[];
			me._floorplan_el_phone.ggMarkerInstances=[];
			me._floorplan_el_phone.ggLastActivMarker = null;
		}
		me._floorplan_el_phone.ggCenterNode=function(nodeId) {
			if (!me._floorplan_el_phone.ggMap) return;
			var gps;
			if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._floorplan_el_phone.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._floorplan_el_phone.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._floorplan_el_phone.ggFitBounds=function(force) {
			if (me._floorplan_el_phone.ggMapNotLoaded) return;
			if (!me._floorplan_el_phone.ggMap) return;
			if (me._floorplan_el_phone.ggMarkerBounds.isValid()) {
				if (me._floorplan_el_phone.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._floorplan_el_phone.ggGoogleMarkerArray).length > 1) {
					me._floorplan_el_phone.ggMap.zoomOut(1, {animate: false});
					me._floorplan_el_phone.ggMap.fitBounds(me._floorplan_el_phone.ggMarkerBounds, {padding: [30, 30], animate: false});
				} else {
					me._floorplan_el_phone.ggMap.setView(me._floorplan_el_phone.ggMarkerBounds.getCenter(), me._floorplan_el_phone.ggMap.getZoom());
					if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'web') {
						me._floorplan_el_phone.ggMap.setZoom(18);
					} else {
						me._floorplan_el_phone.ggMap.setZoom(7);
					}
				}
			}
		}
		me._floorplan_el_phone.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._floorplan_el_phone.ggMap) return;
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					div.style.left = -12 + 'px';
					div.style.top = -41 + 'px';
					this._div = document.createElement('div');
					this._div.appendChild(div);
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._floorplan_el_phone.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan_el_phone.ggFilteredIds = [];
			if (me._floorplan_el_phone.ggFilter != '') {
				var filter = me._floorplan_el_phone.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan_el_phone.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan_el_phone.ggFilteredIds.length > 0) ids = me._floorplan_el_phone.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._floorplan_el_phone.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._floorplan_el_phone.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._floorplan_el_phone.ggMap);
					me._floorplan_el_phone.ggMarkerArray[id]=marker;
					me._floorplan_el_phone.ggMarkerInstances.push(div);
					me._floorplan_el_phone.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._floorplan_el_phone.ggMarkerBounds.isValid() && updateMapBounds) {
				me._floorplan_el_phone.ggFitBounds(false);
			}
			skin.updateSize(me._floorplan_el_phone);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._floorplan_el_phone.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan_el_phone.ggMapId = mapId;
			if (!me._floorplan_el_phone.ggMapNotLoaded) {
				me._floorplan_el_phone.ggLastZoom = me._floorplan_el_phone.ggMap.getZoom();
				me._floorplan_el_phone.ggLastLat = me._floorplan_el_phone.ggMap.getCenter().lat;
				me._floorplan_el_phone.ggLastLng = me._floorplan_el_phone.ggMap.getCenter().lng;
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap(true);
				me._floorplan_el_phone.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me._floorplan_el_phone.ggMapId);
				me._floorplan_el_phone.ggCalculateFloorplanDimInDeg(mapDetails);
				me._floorplan_el_phone.ggCheckBounds(mapDetails);
			}
		}
		me._floorplan_el_phone.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._floorplan_el_phone.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._floorplan_el_phone.mapHeightInDeg = me._floorplan_el_phone.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._floorplan_el_phone.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._floorplan_el_phone.mapWidthInDeg = me._floorplan_el_phone.mapHeightInDeg * mapAR;
			}
		}
		me._floorplan_el_phone.ggInCheckBounds=false;
		me._floorplan_el_phone.ggCheckBounds=function(mapDetails) {
			if (me._floorplan_el_phone.ggInCheckBounds) return;
			me._floorplan_el_phone.ggInCheckBounds = true;
			var mapCenter = me._floorplan_el_phone.ggMap.getCenter();
			var currentZoom = me._floorplan_el_phone.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._floorplan_el_phone.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._floorplan_el_phone.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._floorplan_el_phone.mapWidthInDeg < me._floorplan_el_phone.clientWidth * pixelInDeg) {
				var xMargin = (me._floorplan_el_phone.clientWidth * pixelInDeg - me._floorplan_el_phone.mapWidthInDeg) / 2;
				if (x < me._floorplan_el_phone.mapWidthInDeg / 2 - xMargin) x = me._floorplan_el_phone.mapWidthInDeg / 2 - xMargin;
				if (x > me._floorplan_el_phone.mapWidthInDeg / 2 + xMargin) x = me._floorplan_el_phone.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._floorplan_el_phone.mapWidthInDeg - xOffset) x = me._floorplan_el_phone.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._floorplan_el_phone.mapHeightInDeg < me._floorplan_el_phone.clientHeight * pixelInDeg) {
				var yMargin = (me._floorplan_el_phone.clientHeight * pixelInDeg - me._floorplan_el_phone.mapHeightInDeg) / 2;
				if (y < -me._floorplan_el_phone.mapHeightInDeg / 2 - yMargin) y = -me._floorplan_el_phone.mapHeightInDeg / 2 - yMargin;
				if (y > -me._floorplan_el_phone.mapHeightInDeg / 2 + yMargin) y = -me._floorplan_el_phone.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._floorplan_el_phone.mapHeightInDeg + yOffset) y = -me._floorplan_el_phone.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._floorplan_el_phone.ggMap.setView(newCenter, me._floorplan_el_phone.ggMap.getZoom(), {animate: false});
			}
			me._floorplan_el_phone.ggInCheckBounds = false;
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._fullscreen_floor_menu_phone.logicBlock_visible();
		me._fullscreen_floors_phone_cloner.logicBlock_visible();
		el = me._code_element_1;
		player.on('configloaded', function() {
  var ids       = player.getNodeIds();
  var container = document.getElementById('tourContainer');
  var items     = [];

  ids.forEach(function(id) {
    var title    = player.getNodeTitle(id) || id;
    var thumbUrl = player.getBasePath() + 'images/thumbnail_node_image_phone_' + id + '.jpg';

    // создаём обёртку карточки
    var item = document.createElement('div');
    item.className = 'tour-item';
    item.dataset.title = title.toLowerCase();
    item.style.position = 'relative';

    // превью
    var img = document.createElement('img');
    img.src = thumbUrl;
    img.alt = title;
    img.onerror = function() { this.style.display = 'none'; };
    item.appendChild(img);

    // overlay с заголовком
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    var txt = document.createElement('div');
    txt.className = 'title';
    txt.textContent = title;
    overlay.appendChild(txt);
    item.appendChild(overlay);

    // рамка-highlight
    var highlight = document.createElement('div');
    highlight.className = 'highlight';
    item.appendChild(highlight);

    // клик — переход
    item.addEventListener('click', function() {
      location.hash = id;
    });

    container.appendChild(item);
    items.push(item);
  });

  // поиск
  var input = document.getElementById('searchInput');
  input.addEventListener('input', function() {
    var q = this.value.trim().toLowerCase();
    items.forEach(function(item) {
      item.style.display = item.dataset.title.indexOf(q) !== -1
                         ? 'inline-flex'
                         : 'none';
    });
  });

  // показать всё сразу
  input.dispatchEvent(new Event('input'));
});
		player.addListener('activehotspotchanged', function(event) {
			me._container_controls_left.logicBlock_position();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_floorplan.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_vis_popup.logicBlock();
			me._variable_is_office.logicBlock();
			me._container_controls.logicBlock_visible();
			me._controls_right.logicBlock_visible();
			me._cr_fullscreen.logicBlock_visible();
			me._container_controls_left.logicBlock_position();
			me._cl_map.logicBlock_visible();
			me._cl_map_active.logicBlock_visible();
			me._cl_thumbnails_active.logicBlock_visible();
			me._cl_floorplan.logicBlock_visible();
			me._cl_floorplan_active.logicBlock_visible();
			me._cl_share.logicBlock_visible();
			me._cl_share_active.logicBlock_visible();
			me._toggle_controls_left.logicBlock_angle();
			me._controller.logicBlock_visible();
			me._controller_next.logicBlock_visible();
			me._controller_previous_.logicBlock_visible();
			me._phone_next.logicBlock_visible();
			me._phone_previous_.logicBlock_visible();
			me._header.logicBlock_size();
			me._text_block.logicBlock_position();
			me._logo.logicBlock_size();
			me._background_blur.logicBlock_visible();
			me._map.logicBlock_visible();
			for (var i=0; i < me._floorplan_content.ggMarkerInstances.length; i++) {
				me._floorplan_content.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me._floorplan_content.ggLastActivMarker) {
				if (me._floorplan_content.ggLastActivMarker._div.ggDeactivate) me._floorplan_content.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._floorplan_content.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._floorplan_content.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._floorplan_content.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_content.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_content.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_content.ggLastNodeId = id;
			me._floorplan_content.ggRadar.update();
			me._floor_menu.logicBlock_visible();
			me._floors_cloner.logicBlock_visible();
			me._floors_cloner.ggUpdateConditionNodeChange();
			me._map_fullscreen.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
			for (var i=0; i < me._floorplan_fs_content.ggMarkerInstances.length; i++) {
				me._floorplan_fs_content.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me._floorplan_fs_content.ggLastActivMarker) {
				if (me._floorplan_fs_content.ggLastActivMarker._div.ggDeactivate) me._floorplan_fs_content.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._floorplan_fs_content.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._floorplan_fs_content.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._floorplan_fs_content.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_fs_content.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_fs_content.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_fs_content.ggLastNodeId = id;
			me._floorplan_fs_content.ggRadar.update();
			me._fullscreen_floors_cloner.logicBlock_visible();
			me._fullscreen_floors_cloner.ggUpdateConditionNodeChange();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._start_menu.logicBlock_visible();
			me._header_start.logicBlock_size();
			me._title.logicBlock_text();
			me._logo_1.logicBlock_size();
			me._map_fs_close_2.logicBlock_size();
			me._sounds_splashscreen.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			for (var i=0; i < me._floorplan_el_phone.ggMarkerInstances.length; i++) {
				me._floorplan_el_phone.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me._floorplan_el_phone.ggLastActivMarker) {
				if (me._floorplan_el_phone.ggLastActivMarker._div.ggDeactivate) me._floorplan_el_phone.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._floorplan_el_phone.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._floorplan_el_phone.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._floorplan_el_phone.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan_el_phone.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan_el_phone.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan_el_phone.ggLastNodeId = id;
			me._floorplan_el_phone.ggRadar.update();
			me._fullscreen_floor_menu_phone.logicBlock_visible();
			me._fullscreen_floors_phone_cloner.logicBlock_visible();
			me._fullscreen_floors_phone_cloner.ggUpdateConditionNodeChange();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_floorplan.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._variable_vis_popup.logicBlock();
			me._container_controls.logicBlock_visible();
			if (player.transitionsDisabled) {
				me._container_controls.style.transition='none';
			} else {
				me._container_controls.style.transition='all 300ms ease-out 1000ms';
			}
			me._container_controls.style.opacity='1';
			me._container_controls.style.visibility=me._container_controls.ggVisible?'inherit':'hidden';
			me._controls_right.logicBlock_visible();
			me._cr_fullscreen.logicBlock_visible();
			me._container_controls_left.logicBlock_position();
			me._cl_map.logicBlock_visible();
			me._cl_map_active.logicBlock_visible();
			me._cl_thumbnails.logicBlock_visible();
			me._cl_thumbnails_active.logicBlock_visible();
			me._cl_floorplan.logicBlock_visible();
			me._cl_floorplan_active.logicBlock_visible();
			me._cl_share.logicBlock_visible();
			me._cl_share_active.logicBlock_visible();
			me._toggle_controls_left.logicBlock_angle();
			me._controller.logicBlock_visible();
			me._controller_next.logicBlock_visible();
			me._controller_previous_.logicBlock_visible();
			me._phone_next.logicBlock_visible();
			me._phone_previous_.logicBlock_visible();
			me._header.logicBlock_size();
			me._text_block.logicBlock_position();
			me._logo.logicBlock_size();
			me._background_blur.logicBlock_visible();
			me._map.logicBlock_visible();
			me._floorplan_content.ggClearMap();
			me._floorplan_content.ggInitMap(false);
			me._floorplan_content.ggInitMapMarkers(true);
			me._floor_menu.logicBlock_visible();
			me._floors_cloner.logicBlock_visible();
			me._floors_cloner.ggFloorplans = player.getFloorplanIDs();
			me._floors_cloner.ggUpdate();
			me._map_fullscreen.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
			if (me._floorplan_fs_content.ggVisible) {
				me._floorplan_fs_content.ggClearMap();
				me._floorplan_fs_content.ggInitMap(false);
				me._floorplan_fs_content.ggInitMapMarkers(true);
			}
			me._fullscreen_floors_cloner.logicBlock_visible();
			me._fullscreen_floors_cloner.ggFloorplans = player.getFloorplanIDs();
			me._fullscreen_floors_cloner.ggUpdate();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._start_menu.logicBlock_visible();
			me._header_start.logicBlock_size();
			me._title.logicBlock_text();
			me._logo_1.logicBlock_size();
			me._map_fs_close_2.logicBlock_size();
			me._sounds_splashscreen.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			if (me._floorplan_el_phone.ggVisible) {
				me._floorplan_el_phone.ggClearMap();
				me._floorplan_el_phone.ggInitMap(false);
				me._floorplan_el_phone.ggInitMapMarkers(true);
			}
			me._fullscreen_floor_menu_phone.logicBlock_visible();
			me._fullscreen_floors_phone_cloner.logicBlock_visible();
			me._fullscreen_floors_phone_cloner.ggFloorplans = player.getFloorplanIDs();
			me._fullscreen_floors_phone_cloner.ggUpdate();
		});
		player.addListener('fullscreenenter', function(event) {
			me._cr_fs_exit.logicBlock_visible();
			me._cr_fs_enter.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._cr_fs_exit.logicBlock_visible();
			me._cr_fs_enter.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			me._controller.logicBlock_visible();
		});
		player.addListener('playerstatechanged', function(event) {
			player.setVariableValue('width_controls_left', Number("-45.00"));
			me._cl_share.style.transition='none';
			me._cl_share.ggParameter.rx=player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cl_share.ggParameter.ry=0;
			me._cl_share.style.transform=parameterToTransform(me._cl_share.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share') == true))
				)
			) {
				player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') - Number("32.00"));
			}
			me._cl_floorplan.style.transition='none';
			me._cl_floorplan.ggParameter.rx=player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cl_floorplan.ggParameter.ry=0;
			me._cl_floorplan.style.transform=parameterToTransform(me._cl_floorplan.ggParameter);
			if (
				(
					((player.getVariableValue('opt_floorplans') == true))
				)
			) {
				player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') - Number("32.00"));
			}
			me._cl_thumbnails.style.transition='none';
			me._cl_thumbnails.ggParameter.rx=player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cl_thumbnails.ggParameter.ry=0;
			me._cl_thumbnails.style.transform=parameterToTransform(me._cl_thumbnails.ggParameter);
			if (
				(
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') - Number("32.00"));
			}
			me._cl_map.style.transition='none';
			me._cl_map.ggParameter.rx=player.getVariableValue('width_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._cl_map.ggParameter.ry=0;
			me._cl_map.style.transform=parameterToTransform(me._cl_map.ggParameter);
			if (
				(
					((player.getVariableValue('opt_maps') == true))
				)
			) {
				player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') - Number("32.00"));
			}
			player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') + Number("5.00"));
			player.setVariableValue('width_controls_left', player.getVariableValue('width_controls_left') * Number("-1.00"));
		});
		player.addListener('positionchanged', function(event) {
			me._floorplan_content.ggRadar.update();
			me._floorplan_fs_content.ggRadar.update();
			me._floorplan_el_phone.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._controls_right.logicBlock_visible();
			me._cr_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_is_office', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_is_office();
				}
			}
		});
		player.addListener('varchanged_opt_controller', function(event) {
			me._controller.logicBlock_visible();
		});
		player.addListener('varchanged_opt_floorplans', function(event) {
			me._cl_floorplan.logicBlock_visible();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._controls_right.logicBlock_visible();
			me._cr_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._cl_map.logicBlock_visible();
		});
		player.addListener('varchanged_opt_prev_next', function(event) {
			me._controller_next.logicBlock_visible();
			me._controller_previous_.logicBlock_visible();
			me._phone_next.logicBlock_visible();
			me._phone_previous_.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share', function(event) {
			me._cl_share.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_floorplan.logicBlock();
			me._controller.logicBlock_visible();
			me._phone_next.logicBlock_visible();
			me._phone_previous_.logicBlock_visible();
			me._header.logicBlock_size();
			me._text_block.logicBlock_position();
			me._logo.logicBlock_size();
			me._map.logicBlock_visible();
			me._header_start.logicBlock_size();
			me._title.logicBlock_text();
			me._logo_1.logicBlock_size();
			me._map_fs_close_2.logicBlock_size();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_vis_controls_left', function(event) {
			me._container_controls_left.logicBlock_position();
			if (
				(
					((player.getVariableValue('vis_controls_left') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._controls_left_visibility.style.transition='none';
				} else {
					me._controls_left_visibility.style.transition='all 200ms ease-out 0ms';
				}
				me._controls_left_visibility.style.opacity='1';
				me._controls_left_visibility.style.visibility=me._controls_left_visibility.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_controls_left') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._controls_left_visibility.style.transition='none';
				} else {
					me._controls_left_visibility.style.transition='all 200ms ease-out 1000ms';
				}
				me._controls_left_visibility.style.opacity='0';
				me._controls_left_visibility.style.visibility='hidden';
			}
			me._toggle_controls_left.logicBlock_angle();
		});
		player.addListener('varchanged_vis_floorMenu', function(event) {
			me._floors_cloner.logicBlock_visible();
			me._fullscreen_floors_cloner.logicBlock_visible();
			me._fullscreen_floors_phone_cloner.logicBlock_visible();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._container_controls_left.logicBlock_position();
			me._cl_floorplan_active.logicBlock_visible();
			me._map.logicBlock_visible();
			me._floor_menu.logicBlock_visible();
		});
		player.addListener('varchanged_vis_floorplan_full', function(event) {
			me._cl_floorplan_active.logicBlock_visible();
			me._background_blur.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_hs_popup_full', function(event) {
			me._background_blur.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._container_controls_left.logicBlock_position();
			me._background_blur.logicBlock_visible();
			me._start_menu.logicBlock_visible();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._container_controls_left.logicBlock_position();
			me._cl_map_active.logicBlock_visible();
		});
		player.addListener('varchanged_vis_map_full', function(event) {
			me._cl_map_active.logicBlock_visible();
			me._background_blur.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pdf_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_popup.logicBlock();
			me._cl_floorplan_active.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._fullscreen_floor_menu_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_popup.logicBlock();
			me._cl_map_active.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_nodes', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_phone_popup', function(event) {
			me._phone_next.logicBlock_visible();
			me._phone_previous_.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_popup.logicBlock();
			me._cl_thumbnails_active.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_popup', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_popup();
				}
			}
		});
		player.addListener('varchanged_vis_share', function(event) {
			me._container_controls_left.logicBlock_position();
			me._cl_share_active.logicBlock_visible();
			me._phone_next.logicBlock_visible();
			me._phone_previous_.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._container_controls.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails', function(event) {
			me._cl_thumbnails_active.logicBlock_visible();
			me._background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_file_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_file_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_url_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_url_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_vimeo_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_vimeo_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_youtube_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
		});
		player.addListener('varchanged_vis_video_youtube_popup', function(event) {
			me._variable_vis_popup.logicBlock();
		});
		player.addListener('varchanged_width_controls_left', function(event) {
			me._container_controls_left.logicBlock_position();
		});
		player.addListener('viewerinit', function(event) {
			me._floors_cloner.ggUpdate();
			me._fullscreen_floors_cloner.ggUpdate();
			me._fullscreen_floors_phone_cloner.ggUpdate();
		});
	};
	function SkinCloner_fullscreen_floors_phone_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._floor_title=document.createElement('div');
		els=me._floor_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="floor_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._floor_title.ggUpdateText();
		});
		el.appendChild(els);
		me._floor_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_title.onclick=function (e) {
			skin._floorplan_el_phone.ggChangeMap(me.ggTag);
			player.setVariableValue('vis_floorMenu', false);
		}
		me._floor_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._floor_title);
	};
	function SkinCloner_fullscreen_floors_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._floor_title0=document.createElement('div');
		els=me._floor_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="floor_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_title0.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_title0.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._floor_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._floor_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_title0.onclick=function (e) {
			skin._floorplan_fs_content.ggChangeMap(me.ggTag);
			player.setVariableValue('vis_floorMenu', false);
		}
		me._floor_title0.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._floor_title0);
	};
	function SkinCloner_floors_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._floor_title1=document.createElement('div');
		els=me._floor_title1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="floor_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_title1.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_title1.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._floor_title1.ggUpdateText();
		});
		el.appendChild(els);
		me._floor_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_title1.onclick=function (e) {
			skin._floorplan_content.ggChangeMap(me.ggTag);
			player.setVariableValue('vis_floorMenu', false);
		}
		me._floor_title1.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._floor_title1);
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 637px;';
		hs+='position : absolute;';
		hs+='top : 487px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_popup') == false)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_tooltip=document.createElement('div');
		els=me._ht_node_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat shadow";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("office") != -1)) && 
				((player.getVariableValue('is_office') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_node_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_node_tooltip.style.visibility=(Number(me._ht_node_tooltip.style.opacity)>0||!me._ht_node_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_node_tooltip.ggVisible=true;
				}
				else {
					me._ht_node_tooltip.style.visibility="hidden";
					me._ht_node_tooltip.ggVisible=false;
				}
			}
		}
		me._ht_node_tooltip.logicBlock_visible();
		me._ht_node_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_node_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_tooltip.style.visibility=me._ht_node_tooltip.ggVisible?'inherit':'hidden';
					me._ht_node_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_tooltip.style.opacity == 0.0) { me._ht_node_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_node_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_node_tooltip.logicBlock_alpha();
		me._ht_node_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_tooltip);
		el=me._ht_icon=document.createElement('div');
		els=me._ht_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzYiIHdpZHRoPSIzNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxyZWN0IHg9IjMzIiBoZWlnaHQ9IjMwIiBzdHJva2Utd2lkdGg9IjQuMjg1NzEiIGZpbGw9IiMwNjVEQjUiIHk9IjMzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDMzIDMzKSIgd2lkdGg9IjMwIiByeD0iMTAuNzE0MyIgc3Ryb2tlPSJibGFjayIvPgogPHBhdGggZD0iTTE4LjAwMjkgOS43NTY0OUMxOS4xMDg4IDkuNzU2NDkgMjAuMTQ4OCA5Ljk2NDQ5IDIxLjEyMjggMTAuMzgwNUMyMi4wOTE3IDEwLjc5NjUgMjIuOTQ2NS'+
			'AxMS4zNzIzIDIzLjY4NzIgMTIuMTA3OUMyNC40MjI4IDEyLjg0ODUgMjUuMDAxMSAxMy43MDMzIDI1LjQyMjIgMTQuNjcyM0MyNS44MzgyIDE1LjY0MTIgMjYuMDQzNiAxNi42ODEyIDI2LjAzODYgMTcuNzkyMkMyNi4wMzM1IDE4LjkwMzIgMjUuODIzIDE5Ljk0MzIgMjUuNDA3IDIwLjkxMjFDMjQuOTg1OSAyMS44ODExIDI0LjQwNzYgMjIuNzMzNCAyMy42NzIgMjMuNDY5QzIyLjkzNjQgMjQuMjA5NiAyMi4wODQxIDI0Ljc4NzkgMjEuMTE1MiAyNS4yMDM5QzIwLjE0NjIgMjUuNjE5OSAxOS4xMDg4IDI1LjgyNzkgMTguMDAyOSAyNS44Mjc5QzE2Ljg5MTkgMjUuODI3OSAxNS44NTE5IDI1LjYx'+
			'OTkgMTQuODgyOSAyNS4yMDM5QzEzLjkwODkgMjQuNzg3OSAxMy4wNTY2IDI0LjIwOTYgMTIuMzI2MSAyMy40NjlDMTEuNTkwNSAyMi43MzM0IDExLjAxNDcgMjEuODgxMSAxMC41OTg3IDIwLjkxMjFDMTAuMTgyNyAxOS45NDMyIDkuOTcyMjEgMTguOTAzMiA5Ljk2NzE0IDE3Ljc5MjJDOS45NjIwNyAxNi42ODEyIDEwLjE2NzUgMTUuNjQxMiAxMC41ODM1IDE0LjY3MjNDMTAuOTk5NSAxMy43MDMzIDExLjU3NTMgMTIuODQ4NSAxMi4zMTA5IDEyLjEwNzlDMTMuMDQ2NSAxMS4zNzIzIDEzLjkwMTMgMTAuNzk2NSAxNC44NzUzIDEwLjM4MDVDMTUuODQ5MyA5Ljk2NDQ5IDE2Ljg5MTkgOS43NTY0OS'+
			'AxOC4wMDI5IDkuNzU2NDlaTTE4LjAwMjkgMTIuMjkwNUMxNy4yMzY4IDEyLjI5MDUgMTYuNTIxNSAxMi40MzI1IDE1Ljg1NyAxMi43MTY2QzE1LjE4NzMgMTMuMDAwNyAxNC42MDE0IDEzLjM5MzkgMTQuMDk5MSAxMy44OTYxQzEzLjU5NjkgMTQuNDAzNCAxMy4yMDM3IDE0Ljk4NjggMTIuOTE5NyAxNS42NDYzQzEyLjYzNTYgMTYuMzEwOSAxMi40OTYxIDE3LjAyMzYgMTIuNTAxMSAxNy43ODQ2QzEyLjUwMTEgMTguNTUwNiAxMi42NDU3IDE5LjI2NTkgMTIuOTM0OSAxOS45MzA1QzEzLjIxOSAyMC42MDAxIDEzLjYxMjEgMjEuMTg2MSAxNC4xMTQ0IDIxLjY4ODNDMTQuNjE2NiAyMi4xOTA1IDE1'+
			'LjIgMjIuNTgzNyAxNS44NjQ2IDIyLjg2NzhDMTYuNTI5MSAyMy4xNTE5IDE3LjI0MTkgMjMuMjkzOSAxOC4wMDI5IDIzLjI5MzlDMTguNzU4NyAyMy4yOTM5IDE5LjQ2OSAyMy4xNTE5IDIwLjEzMzUgMjIuODY3OEMyMC43OTMgMjIuNTgzNyAyMS4zNzY0IDIyLjE4OCAyMS44ODM3IDIxLjY4MDdDMjIuMzg2IDIxLjE3ODUgMjIuNzgxNyAyMC41OTI1IDIzLjA3MDggMTkuOTIyOUMyMy4zNiAxOS4yNTgzIDIzLjUwNDYgMTguNTQ1NiAyMy41MDQ2IDE3Ljc4NDZDMjMuNTA5NyAxNy4wMjg3IDIzLjM3MDEgMTYuMzE4NSAyMy4wODYxIDE1LjY1MzlDMjIuNzk2OSAxNC45OTQ0IDIyLjQwMTIgMTQuND'+
			'ExIDIxLjg5OSAxMy45MDM3QzIxLjM5MTcgMTMuNDAxNSAyMC44MDU3IDEzLjAwNTggMjAuMTQxMSAxMi43MTY2QzE5LjQ3NjYgMTIuNDMyNSAxOC43NjM4IDEyLjI5MDUgMTguMDAyOSAxMi4yOTA1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==';
		me._ht_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_icon.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_icon'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_icon.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_icon.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_icon.style.transition='width 0s, height 0s';
				if (me._ht_icon.ggCurrentLogicStateSize == 0) {
					me._ht_icon.style.width='55px';
					me._ht_icon.style.height='55px';
					me._ht_icon.style.left = 'calc(50% - (55px / 2))';
					me._ht_icon.style.top = 'calc(50% - (55px / 2))';
					skin.updateSize(me._ht_icon);
				}
				else {
					me._ht_icon.style.width='45px';
					me._ht_icon.style.height='45px';
					me._ht_icon.style.left = 'calc(50% - (45px / 2))';
					me._ht_icon.style.top = 'calc(50% - (45px / 2))';
					skin.updateSize(me._ht_icon);
				}
			}
		}
		me._ht_icon.logicBlock_size();
		me._ht_icon.onmouseenter=function (e) {
			me.elementMouseOver['ht_icon']=true;
			me._ht_icon.logicBlock_size();
		}
		me._ht_icon.onmouseleave=function (e) {
			me.elementMouseOver['ht_icon']=false;
			me._ht_icon.logicBlock_size();
		}
		me._ht_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_icon);
		el=me._ht_icon_exit=document.createElement('div');
		els=me._ht_icon_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzYiIHdpZHRoPSIzNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM2IDM2Ij4KIDxyZWN0IHg9IjMzIiBoZWlnaHQ9IjMwIiBzdHJva2Utd2lkdGg9IjQuNDIzOTYiIGZpbGw9IiMwNjVEQjUiIHk9IjMzIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDMzIDMzKSIgd2lkdGg9IjMwIiByeD0iMTEuMDU5OSIgc3Ryb2tlPSJibGFjayIvPgogPHBhdGggZD0iTTE5LjQxNTQgMTEuNzE3OUgxMy43ODk3QzEzLjQ5NTIgMTEuNzE3OSAxMy4yNTY1IDExLjk1NjYgMTMuMjU2NSAxMi4yNTExVjIzLjU1NTlDMTMuMjU2NS'+
			'AyMy44NTA0IDEzLjQ5NTIgMjQuMDg5MSAxMy43ODk3IDI0LjA4OTFIMTkuNDE1NCIgc3Ryb2tlLXdpZHRoPSIyLjU2NDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogPHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTI1LjAzNzcgMTcuODc3TDE3LjM1OSAxNy44MjM2IiBzdHJva2Utd2lkdGg9IjIuNTY0MSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiA8cGF0aCBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuMjY0OCAxNC42Nzc1TDI1LjQxMDkgMTcuOTAzNkwyMi4yNjQ4IDIxLjEyOTciIHN0cm9rZS13aWR0aD0i'+
			'Mi41NjQxIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==';
		me._ht_icon_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_icon_exit";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_icon_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_icon_exit.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['ht_icon_exit'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._ht_icon_exit.ggCurrentLogicStateSize != newLogicStateSize) {
				me._ht_icon_exit.ggCurrentLogicStateSize = newLogicStateSize;
				me._ht_icon_exit.style.transition='width 0s, height 0s';
				if (me._ht_icon_exit.ggCurrentLogicStateSize == 0) {
					me._ht_icon_exit.style.width='55px';
					me._ht_icon_exit.style.height='55px';
					me._ht_icon_exit.style.left = 'calc(50% - (55px / 2))';
					me._ht_icon_exit.style.top = 'calc(50% - (55px / 2))';
					skin.updateSize(me._ht_icon_exit);
				}
				else {
					me._ht_icon_exit.style.width='45px';
					me._ht_icon_exit.style.height='45px';
					me._ht_icon_exit.style.left = 'calc(50% - (45px / 2))';
					me._ht_icon_exit.style.top = 'calc(50% - (45px / 2))';
					skin.updateSize(me._ht_icon_exit);
				}
			}
		}
		me._ht_icon_exit.logicBlock_size();
		me._ht_icon_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('is_office') == true)) && 
				((me.ggUserdata.tags.indexOf("corridor") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_icon_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_icon_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_icon_exit.style.transition='width 0s, height 0s';
				if (me._ht_icon_exit.ggCurrentLogicStateVisible == 0) {
					me._ht_icon_exit.style.visibility=(Number(me._ht_icon_exit.style.opacity)>0||!me._ht_icon_exit.style.opacity)?'inherit':'hidden';
					me._ht_icon_exit.ggVisible=true;
				}
				else {
					me._ht_icon_exit.style.visibility="hidden";
					me._ht_icon_exit.ggVisible=false;
				}
			}
		}
		me._ht_icon_exit.logicBlock_visible();
		me._ht_icon_exit.onmouseenter=function (e) {
			me.elementMouseOver['ht_icon_exit']=true;
			me._ht_icon_exit.logicBlock_size();
		}
		me._ht_icon_exit.onmouseleave=function (e) {
			me.elementMouseOver['ht_icon_exit']=false;
			me._ht_icon_exit.logicBlock_size();
		}
		me._ht_icon_exit.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_icon_exit);
		el=me._node_pin=document.createElement('div');
		els=me._node_pin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #065db5;';
		hs+='border : 5px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((90px + 10px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 10px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 20px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._node_pin.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("<div class=\"ggmarkdown\"><p>%1<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_pin.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_pin.ggUpdateText();
		});
		el.appendChild(els);
		me._node_pin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._node_pin.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me._node_pin.ggIsActive() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_pin.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_pin.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_pin.style.transition='left 0s, top 0s';
				if (me._node_pin.ggCurrentLogicStatePosition == 0) {
					me._node_pin.style.left = 'calc(50% - (90px / 2) - (10px / 2))';
					me._node_pin.style.top = 'calc(50% - (35px / 2) - (10px / 2))';
				}
				else {
					me._node_pin.style.left='calc(50% - ((90px + 10px) / 2) + 0px)';
					me._node_pin.style.top='calc(50% - ((35px + 10px) / 2) + 0px)';
				}
			}
		}
		me._node_pin.logicBlock_position();
		me._node_pin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("uniqueOffice") != -1)) && 
				((player.getVariableValue('is_office') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_pin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_pin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_pin.style.transition='left 0s, top 0s';
				if (me._node_pin.ggCurrentLogicStateVisible == 0) {
					me._node_pin.style.visibility=(Number(me._node_pin.style.opacity)>0||!me._node_pin.style.opacity)?'inherit':'hidden';
					me._node_pin.ggVisible=true;
				}
				else {
					me._node_pin.style.visibility="hidden";
					me._node_pin.ggVisible=false;
				}
			}
		}
		me._node_pin.logicBlock_visible();
		me._node_pin.onclick=function (e) {
			if (
				(
					((me._node_pin.ggIsActive() == false))
				)
			) {
				player.openNext(player._(me.hotspot.url),"");
			}
		}
		me._node_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._block=document.createElement('div');
		el.ggId="Block";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'ៀ?');
		el.style.transformOrigin='50% 50%';
		me._block.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._block.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['block'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._block.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._block.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._block.style.transition='transform 0s';
				if (me._block.ggCurrentLogicStateScaling == 0) {
					me._block.ggParameter.sx = 1.2;
					me._block.ggParameter.sy = 1.2;
					me._block.style.transform=parameterToTransform(me._block.ggParameter);
					skin.updateSize(me._block);
				}
				else {
					me._block.ggParameter.sx = 1;
					me._block.ggParameter.sy = 1;
					me._block.style.transform=parameterToTransform(me._block.ggParameter);
					skin.updateSize(me._block);
				}
			}
		}
		me._block.logicBlock_scaling();
		me._block.onmouseenter=function (e) {
			me.elementMouseOver['block']=true;
			me._block.logicBlock_scaling();
		}
		me._block.onmouseleave=function (e) {
			me.elementMouseOver['block']=false;
			me._block.logicBlock_scaling();
		}
		me._block.ggUpdatePosition=function (useTransition) {
		}
		me._node_pin.appendChild(me._block);
		me._ht_node.appendChild(me._node_pin);
		me._ht_node.logicBlock_visible();
		me.elementMouseOver['ht_node']=false;
		me._ht_node_tooltip.logicBlock_visible();
		me._ht_node_tooltip.logicBlock_alpha();
		me._ht_icon.logicBlock_size();
		me.elementMouseOver['ht_icon']=false;
		me._ht_icon_exit.logicBlock_size();
		me._ht_icon_exit.logicBlock_visible();
		me.elementMouseOver['ht_icon_exit']=false;
		me._node_pin.logicBlock_position();
		me._node_pin.logicBlock_visible();
		me._block.logicBlock_scaling();
		me.elementMouseOver['block']=false;
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_tooltip.logicBlock_visible();
				me._ht_icon_exit.logicBlock_visible();
				me._node_pin.logicBlock_position();
				me._node_pin.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_tooltip.logicBlock_visible();
				me._ht_icon_exit.logicBlock_visible();
				me._node_pin.logicBlock_visible();
			};
			me.ggEvent_varchanged_is_office=function() {
				me._ht_node_tooltip.logicBlock_visible();
				me._ht_icon_exit.logicBlock_visible();
				me._node_pin.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_popup=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-206;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 353px;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 206px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('vis_floorplan_full', false);
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', true);
			}
			player.setVariableValue('vis_phone_popup', false);
			player.setVariableValue('vis_phone_floorplan', false);
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 6px) / 2) + 15px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #065db5;';
		hs+='border : 3px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._map_pin_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_pin_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_pin_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me._map_pin_tt.ggIsActive() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style.transition='left 0s, top 0s';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					me._map_pin_tt.style.left = 'calc(50% - (0px / 2) - (6px / 2))';
					me._map_pin_tt.style.top = 'calc(50% - (0px / 2) - (6px / 2))';
				}
				else {
					me._map_pin_tt.style.left='calc(50% - ((0px + 6px) / 2) + 0px)';
					me._map_pin_tt.style.top='calc(50% - ((0px + 6px) / 2) + 15px)';
				}
			}
		}
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("uniqueOffice") != -1)) && 
				((me._map_pin_tt.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_tt.style.transition='left 0s, top 0s';
				if (me._map_pin_tt.ggCurrentLogicStateVisible == 0) {
					me._map_pin_tt.style.visibility=(Number(me._map_pin_tt.style.opacity)>0||!me._map_pin_tt.style.opacity)?'inherit':'hidden';
					me._map_pin_tt.ggVisible=true;
				}
				else {
					me._map_pin_tt.style.visibility="hidden";
					me._map_pin_tt.ggVisible=false;
				}
			}
		}
		me._map_pin_tt.logicBlock_visible();
		me._map_pin_tt.onclick=function (e) {
			if (
				(
					((me._map_pin_tt.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
		}
		el=me._block_1=document.createElement('div');
		el.ggId="Block _ 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'ៀ?');
		el.style.transformOrigin='50% 50%';
		me._block_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._block_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['block_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._block_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._block_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._block_1.style.transition='transform 0s';
				if (me._block_1.ggCurrentLogicStateScaling == 0) {
					me._block_1.ggParameter.sx = 1.2;
					me._block_1.ggParameter.sy = 1.2;
					me._block_1.style.transform=parameterToTransform(me._block_1.ggParameter);
					skin.updateSize(me._block_1);
				}
				else {
					me._block_1.ggParameter.sx = 1;
					me._block_1.ggParameter.sy = 1;
					me._block_1.style.transform=parameterToTransform(me._block_1.ggParameter);
					skin.updateSize(me._block_1);
				}
			}
		}
		me._block_1.logicBlock_scaling();
		me._block_1.onmouseenter=function (e) {
			me.elementMouseOver['block_1']=true;
			me._block_1.logicBlock_scaling();
		}
		me._block_1.onmouseleave=function (e) {
			me.elementMouseOver['block_1']=false;
			me._block_1.logicBlock_scaling();
		}
		me._block_1.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin_tt.appendChild(me._block_1);
		me._map_pin.appendChild(me._map_pin_tt);
		el=me._map_pin_active_1=document.createElement('div');
		el.ggId="map_pin_active _ 1";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffb9ba;';
		hs+='border : 5px solid #ff0000;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 10px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 10px) / 2) + 15px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_active_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_pin_active_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_active_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_active_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_active_1.style.transition='';
				if (me._map_pin_active_1.ggCurrentLogicStateVisible == 0) {
					me._map_pin_active_1.style.visibility=(Number(me._map_pin_active_1.style.opacity)>0||!me._map_pin_active_1.style.opacity)?'inherit':'hidden';
					me._map_pin_active_1.ggVisible=true;
				}
				else {
					me._map_pin_active_1.style.visibility="hidden";
					me._map_pin_active_1.ggVisible=false;
				}
			}
		}
		me._map_pin_active_1.logicBlock_visible();
		me._map_pin_active_1.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active_1);
		el=me._action_text=document.createElement('div');
		els=me._action_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Action_text";
		el.ggDx=0;
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 4px) / 2) + 16px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._action_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._action_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._action_text.ggUpdateText();
		});
		el.appendChild(els);
		me._action_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._action_text.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((me._action_text.ggIsActive() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._action_text.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._action_text.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._action_text.style.transition='left 0s, top 0s';
				if (me._action_text.ggCurrentLogicStatePosition == 0) {
					me._action_text.style.left = 'calc(50% - (0px / 2) - (4px / 2))';
					me._action_text.style.top = 'calc(50% - (0px / 2) - (4px / 2))';
				}
				else {
					me._action_text.style.left='calc(50% - ((0px + 4px) / 2) + 0px)';
					me._action_text.style.top='calc(50% - ((0px + 4px) / 2) + 16px)';
				}
			}
		}
		me._action_text.logicBlock_position();
		me._action_text.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("uniqueOffice") != -1)) && 
				((me._action_text.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._action_text.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._action_text.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._action_text.style.transition='left 0s, top 0s';
				if (me._action_text.ggCurrentLogicStateVisible == 0) {
					me._action_text.style.visibility=(Number(me._action_text.style.opacity)>0||!me._action_text.style.opacity)?'inherit':'hidden';
					me._action_text.ggVisible=true;
				}
				else {
					me._action_text.style.visibility="hidden";
					me._action_text.ggVisible=false;
				}
			}
		}
		me._action_text.logicBlock_visible();
		me._action_text.onclick=function (e) {
			if (
				(
					((me._action_text.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._action_text.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._action_text);
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_visible();
		me._block_1.logicBlock_scaling();
		me.elementMouseOver['block_1']=false;
		me._map_pin_active_1.logicBlock_visible();
		me._action_text.logicBlock_position();
		me._action_text.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._map_pin_tt.logicBlock_position();
				me._map_pin_tt.logicBlock_visible();
				me._map_pin_tt.logicBlock_visible();
				me._map_pin_active_1.logicBlock_visible();
				me._action_text.logicBlock_position();
				me._action_text.logicBlock_visible();
				me._action_text.logicBlock_visible();
			};
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._controller_zoom_in_bg.ggUpdateConditionTimer();
		me._controller_zoom_out_bg.ggUpdateConditionTimer();
		me._controller_move_left_bg.ggUpdateConditionTimer();
		me._controller_move_down_bg.ggUpdateConditionTimer();
		me._controller_move_right_bg.ggUpdateConditionTimer();
		me._controller_move_up_bg.ggUpdateConditionTimer();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #999; } .ggdefaulthotspot { font-family: "Open Sans"; font-size: 15px; -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .open_sans { font-family: "Open Sans"; } .ggskin_text>div::-webkit-scrollbar { width: 4px; } .ggskin_text>div { scrollbar-width: thin; }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};