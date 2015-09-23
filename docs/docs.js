
$(function(){
    $("iframe.autoheight").load(function() {
        $(this).height($(this).contents().height());
    });
    $("body").append('<div class="modal" id="viewSource" tabindex="-1" style="display: none;" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="myModalLabel">查看源代码：</h3></div><div class="modal-body"><p id="viewSourceBox">源代码读取中，请稍后……</p></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true"><i class="icon-remove-circle"></i> 关闭</button><button class="btn btn-primary" id="goDemoPage"><i class="icon-info-sign icon-white"></i> 转到示例页面</button></div></div>');
    $(".viewsource").click(function(){
        var url=$(this).parent().prev().find("iframe").attr("src");
        $('#viewSource').modal({
            show:false,
            keyboard:true
        });
        $.ajax({url:url,dataType:"text",success:function(data){
            $("#viewSourceBox").html("<textarea style='width:758px;height: 300px;'>"+data+"</textarea>");
        },error:function(){
            $("#viewSourceBox").html("源代码读取出错！请检查配置环境。")
        }});
        $("#goDemoPage").click(function(){
            window.open(url);
        });

    });
    $(".otherDemo").click(function(){
        $(this).parent().siblings("iframe").remove();
        $(this).parents(".viewbtnbox").prev().html('<iframe id="autoHeight" src="case/'+$(this).attr("url")+'" width="100%"  frameborder="0"></iframe>')
            $("#autoHeight").load(function() {
            $(this).height($(this).contents().height());
        });
    });
    $(".nav a").tooltip();
});
