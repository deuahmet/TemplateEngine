namespace("Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Basic").Video=function(){this.Mp4SourceUrl="",this.OggSourceUrl="",this.AutoPlay=!1,this.ShowControls=!1,this.LoopInfinitely=!1},angular.module("Cerberus.Tool.TemplateEngine").controller("Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Basic.Video",["$scope",function(){}]).directive("csVideo",["$sce",function(){return{restrict:"A",link:function(a,b){var c=b.get(0),d=new Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Basic.Video;a.$parent.$watch("TemplateControl.Content",function(){var e=JSON.tryParse(a.$parent.TemplateControl.Content,d);c.autoplay=e.AutoPlay,c.loop=e.LoopInfinitely,c.controls=e.ShowControls,c.preload=e.AutoPlay?"auto":"none",b.empty(),e.Mp4SourceUrl&&b.append(String.format("<source type='video/mp4' src='{0}' />",e.Mp4SourceUrl)),e.OggSourceUrl&&b.append(String.format("<source type='video/ogg' src='{0}' />",e.OggSourceUrl)),e.AutoPlay?c.play():(c.pause(),c.currentTime>0&&(c.currentTime=0))})}}}]);