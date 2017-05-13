$(document).ready(function(){
	initTab();
	initClickExpTitle();
	initToolTips();
	initProjDesc();
	initContactHover();
	initExpandSkills();
});
function initExpandSkills(){
	$(".ui-icon-plus").off("click").on("click",showDetails);
}
function showDetails(){
	$(this).removeClass("ui-icon-plus");
	$(this).addClass("ui-icon-minus");
	$(this).prop("title","Click - to collapse this project");
	$(this).parent().siblings(".details").stop(true,true).show("blind",{direction:"vertical"},800);
	$(this).off("click").on("click",hideDetails);
}
function hideDetails(){
	$(this).removeClass("ui-icon-minus");
	$(this).addClass("ui-icon-plus");
	$(this).prop("title","Click + to expand this project")
	$(this).parent().siblings(".details").stop(true,true).hide("blind",{direction:"vertical"},800);
	$(this).off("click").on("click",showDetails);
}
function initProjDesc(){
	$(".projectDesc").dialog({
		 autoOpen:false,
	     modal:'true',
	     width:800,
		 show:{
			 effect:"blind",
			 duration:800
		 },
		 hide:{
			 effect:"explode",
			 duration:800
		 }
	});
	initProjDescClick();
}
function initProjDescClick(){
	$(".projectName").click(function(){
		if($(this).hasClass("demo")){
			$("#demo").dialog("open");
		}
		else if($(this).hasClass("crm")){
			$("#crm").dialog("open");
		}
		else if($(this).hasClass("cats")){
			$("#cats").dialog("open");
		}
		else if($(this).hasClass("signature")){
			$("#signature").dialog("open");
		}
		else if($(this).hasClass("schedule")){
			$("#schedule").dialog("open");
		}
		else if($(this).hasClass("maintain")){
			$("#maintain").dialog("open");
		}
	});
}
function initTab(){
	$("#profileBox").tabs({
		collapsible:false
	});
}
function initClickExpTitle(){
	$("#experience .title").off("click").on("click",function(){
		var desc = $(this).siblings(".desc");
		if(desc.is(":hidden")){
			$(".desc").not(desc).stop(true,true).hide();//
			desc.stop(true,true).show("blind",800);
			$("#experience .title").removeClass("selected");
			$(this).addClass("selected");
		}
		else{
			desc.stop(true,true).hide("blind",800);
			$("#experience .title").removeClass("selected");
		}
	});
}
function initToolTips(){
	$(document).tooltip({
		items: ".college",
		show:{
			effect:"slideDown",
			delay:250
		},
		hide:{
			effect:"slideUp",
			delay:250
		},
		content:function(){
			var element = $(this);
			if(element.hasClass("college")){
				var location = $(this).parent().find(".college").text();
				if(location=='Stevens Institute of Technology'){
					return "<img class='map' src='https://maps.googleapis.com/maps/api/staticmap?center=CastlePoint,Hoboken,NJ&zoom=15&size=300x300&markers=color:blue%7Clabel:S%7C40.747005,%20-74.025543&key=AIzaSyB-daIMNoQ3Serso0KxhR3xOBAbrDLwbvU'></img>"
				}
				else {
					return "<img class='map' src='https://maps.googleapis.com/maps/api/staticmap?center=31.057258, 121.208759&zoom=15&size=300x300&markers=color:blue%7Clabel:S%7C31.057258, 121.208759&key=AIzaSyB-daIMNoQ3Serso0KxhR3xOBAbrDLwbvU'></img>"
				}
			}
		}
		
	});
}
function initContactHover(){
	$(".contact").hover(function(){
			$(this).find("span").css("background-image","url(./resources/images/ui-icons_0a82eb_256x240.png)");
			$(this).find("a").css("color","#0a82eb");
	},function(){
			$(this).find("span").css("background-image","url(./resources/images/ui-icons_222222_256x240.png)");
			$(this).find("a").css("color","#222222");
	});
}