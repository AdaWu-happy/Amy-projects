var aa= window.innerWidth;
document.getElementsByTagName('html')[0].setAttribute("style","font-size:"+aa/1920*100+"px");
window.onresize=function(){
    var aa= window.innerWidth;
    document.getElementsByTagName('html')[0].setAttribute("style","font-size:"+aa/1920*100+"px");};

function createTree(){
	$(".treeview").niceScroll({cursorcolor:"rgba(0,0,0,0.5)"});

		// 树
		var setting = {
			data: {
				simpleData: {
					enable: true
				}
			},
			callback:{
				onExpand:function(){
					$(".treeview").niceScroll().resize();
				},
				onCollapse:function(){
					$(".treeview").niceScroll().resize();
				},
			}
		};

		var zNodes =[
			{ id:1, pId:0, name:"Autodesk.Revit.ApplicationServices Namespace", open:true,icon:"img/main/icon.png"},
			{ id:11, pId:1, name:"DisparityResponse Enumerationrvices Namespace",icon:"img/main/icon1.png"},
			{ id:111, pId:11, name:"floor2",icon:"img/main/icon2.png"},
			{ id:112, pId:11, name:"floor2",icon:"img/main/icon2.png"},
			{ id:113, pId:11, name:"floor2",icon:"img/main/icon2.png"},
			{ id:114, pId:11, name:"floor2",icon:"img/main/icon2.png"},
			{ id:1111, pId:114, name:"floor3",icon:"img/main/icon3.png"},
			{ id:1112, pId:1111, name:"floor3",icon:"img/main/icon3.png"},
			{ id:12, pId:1, name:"DisparityResponse Enumerationrvices Namespace",icon:"img/main/icon1.png"},
			{ id:111, pId:12, name:"floor2",icon:"img/main/icon2.png"},
			{ id:121, pId:12, name:"floor2",icon:"img/main/icon2.png"},
			{ id:122, pId:12, name:"floor2",icon:"img/main/icon2.png"},
			{ id:123, pId:12, name:"floor2",icon:"img/main/icon2.png"},
			{ id:124, pId:12, name:"floor2",icon:"img/main/icon2.png"},
			{ id:13, pId:1, name:"DisparityResponse Enumerationrvices Namespace", isParent:true,icon:"img/main/icon1.png"},
			{ id:2, pId:0, name:"Autodesk.Revit.ApplicationServices Namespace",icon:"img/main/icon.png"},
			{ id:21, pId:2, name:"DisparityResponse Enumerationrvices Namespace", open:true,icon:"img/main/icon1.png"},
			{ id:211, pId:21, name:"floor2",icon:"img/main/icon2.png"},
			{ id:212, pId:21, name:"floor2",icon:"img/main/icon2.png"},
			{ id:213, pId:21, name:"floor2",icon:"img/main/icon2.png"},
			{ id:214, pId:21, name:"floor2",icon:"img/main/icon2.png"},
			{ id:22, pId:2, name:"1",icon:"img/main/icon1.png"},
			{ id:221, pId:22, name:"floor2",icon:"img/main/icon2.png"},
			{ id:222, pId:22, name:"floor2",icon:"img/main/icon2.png"},
			{ id:223, pId:22, name:"floor2",icon:"img/main/icon2.png"},
			{ id:224, pId:22, name:"floor2",icon:"img/main/icon2.png"},
			{ id:23, pId:2, name:"1",icon:"img/main/icon1.png"},
			{ id:231, pId:23, name:"floor2",icon:"img/main/icon2.png"},
			{ id:232, pId:23, name:"floor2",icon:"img/main/icon2.png"},
			{ id:233, pId:23, name:"floor2",icon:"img/main/icon2.png"},
			{ id:234, pId:23, name:"floor2",icon:"img/main/icon2.png"},
			{ id:3, pId:0, name:"Autodesk.Revit.ApplicationServices Namespace", isParent:true,icon:"img/main/icon.png"},
			{ id:31, pId:3, name:"floor2",icon:"img/main/icon2.png"},
			{ id:32, pId:3, name:"floor2",icon:"img/main/icon2.png"},
			{ id:33, pId:3, name:"floor2",icon:"img/main/icon2.png"},
			{ id:34, pId:3, name:"floor2",icon:"img/main/icon2.png"},
			{ id:35, pId:3, name:"floor2",icon:"img/main/icon2.png"},
		];

		$(document).ready(function(){
			$.fn.zTree.init($("#tree"), setting, zNodes);
		});
}
