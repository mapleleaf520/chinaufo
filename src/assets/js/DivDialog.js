//################################DivDialog###################################################
/*
 * div弹出框使用omDialog插件
 * 可以弹出多个弹出框，但在弹出多个弹出框时，多个弹出框的内容中的元素id不能有重复的
 * 关闭弹出框后，会将弹出框元素从页面删除
 */
			//获取对话框id
			function getDialogId(){
				for(var i=0;i<100;i++){
					var id="dialog"+i;
					if($("#"+id).length==0){
						return id;
					}
				}
			}
			//创建模态对话框
			function createModalDialog(){
				var id=getDialogId();
		    	var dialog='<div id="'+id+'" title=""></div>';
		    	$("#asix_box").append(dialog);
			   
				$( "#"+id).omDialog({
					autoOpen: false,
					height: 600,
					width:800,
					modal: true,
					title:'${message(code:'default.modalDialog.title.label',default:'ModalDialog')}'
				});

				return id;
			}
			//创建非模态对话框
			function createModalLessDialog(){
				var id=getDialogId();
				var dialog='<div id="'+id+'" title=""></div>';
				$("#asix_box").append(dialog);
				$( "#"+id).omDialog({
					autoOpen: false,
					height: 600,
					width:800,
					modal: false,
					title:'${message(code:'default.modalLessDialog.title.label',default:'ModalDialogLess')}'
				});
				return id;
			}
			
			//弹出对话框isModal=1表示弹出模式对话框，否则弹出非模式对话框,title:弹出框的名称,width和height为0时使用默认值
			function showDialog(isModal,content,title,width,height){
				width=parseInt(width);
				heigth=parseInt(height);
				if(width==0){
					width=800;
				}
				if(height==0){
					height=600;
				}

				var id='';
				if(isModal==1){
					id=createModalDialog();
				}else{
					id=createModalLessDialog();
				}

				$("#"+id).html(content);
				//关闭对话框后删除生成的div对话框
				$("#"+id).omDialog({'title':title,'width':width,'height':height,onClose : function() {$("#"+this[0].id).remove();}});
				$("#"+id).omDialog('open');
				

			}

			//关闭对话框
			function closeDialog(id){
					$("#"+id).omDialog('close');
					
			}
//################################DivDialogEND###################################################