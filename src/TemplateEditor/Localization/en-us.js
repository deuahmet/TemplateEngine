define(
	[
		"angular"
	],
	function (angular)
	{
		return angular
			.module("Cerberus.Tool.TemplateEditor.Localization", [])
			.factory("Cerberus.Tool.TemplateEditor.Localization", function ()
			{
				return {
					Generic:
					{
						Back: "Back",

						Restore: "Restore to Default",
						Save: "Save",
						SaveExit: "Save and Exit",
						Cancel: "Cancel",

						Yes: "Yes",
						No: "No",

						Exit: "Exit",

						EditSettings: "Edit Settings",

						Add: "Add",
						Edit: "Edit",
						Update: "Update",
						Remove: "Remove",

						Cancel: "Cancel",
						Apply: "Apply"
					},

					TemplateControlResolutions:
					{
						ReachedMaximumResolutions: "MAXRESOLUTIONS REACHED",
						NotEnoughSpace: "NOT ENOUGH SPACE"
					},

					TemplateControlActions:
					{
						RemoveSelectedTemplateControls: "Remove selected template control(s)",
						DistributeVisualPropertiesToAllResolutions: "Distribute visual properties across all resolutions",
						DistributeVisualPropertiesToLowerResolutions: "Distribute visual properties to lower resolutions",
						DistributeVisualPropertiesToHigherResolutions: "Distribute visual properties to higher resolutions",
						DistributeVisualPropertiesToResolutions: "Distribute visual properties to resolution...",
						ShowHiddenControls: "Show Hidden Elements"
					},
					TemplateControlProperties:
					{
						Class: "Class",
						Visible: "Visible",
						Hidden: "Hidden",
						Generic: "Generic",
						ZIndex: "Z-depth",
						TemplateControlName: "Name",
						Layout: "Layout",
						Left: "Left",
						Top: "Top",
						Right: "Right",
						Bottom: "Bottom",
						Width: "Width",
						Height: "Height",
						MinWidth: "Minimum Width",
						MinHeight: "Minimum Height",
						Center: "Center",

						RotateZ: "Rotate",
						RotateZPlaceHolder: "Specify in deg, turn or rad",

						FontAndColors: "Font and Colors",
						Typeface: "Typeface",
						Size: "Size",
						Color: "Color",
						TextAlign: "Text Align",
						TextTransform: "Text Transform",
						NoWrap: "Don't wrap",
						Scrollable: "Enable scroll",

						Background: "Background",
						Image: "Image",
						ImageRepeat: "Image Repeat",
						ImagePosition: "Image Position",

						Border: "Border",
						BorderRadius: "Radius",
						Padding: "Padding",
						Top: "Top",
						Right: "Right",
						Bottom: "Bottom",
						Left: "Left",
						TopLeft: "TopLeft",
						TopRight: "TopRight",
						BottomRight: "BottomRight",
						BottomLeft: "BottomLeft",

						Shadows: "Shadows",
						BoxShadow: "Box",
						TextShadow: "Text",
						HorizontalOffset: "Horizontal Offset",
						VerticalOffset: "Vertical Offset",
						InnerShadow: "Inner Shadow",
						BlurRadius: "Blur Radius",
						SpreadRadius: "Spread Radius",

						Opacity: "Opacity",
						OpacityPlaceHolder: "Range: 0.0 - 1.0",
						ImageSource: "Image Source",
						ImageSize: "Image Size",
						ImageSourcePlaceHolder: "Path to image",

						Content: "Content",

						BrowserDefault: "Browser Default",
						BorderSolid: "Solid",
						BorderDashed: "Dashed",
						BorderDotted: "Dotted",
						BorderGroove: "Groove",
						BorderDouble: "Double",
						BorderInset: "Inset",
						BorderOutset: "Outset",
						Repeat: "Repeat",
						RepeatHorizontally: "Repeat Horizontally",
						RepeatVertically: "Repeat Vertically",
						DontRepeat: "Do not Repeat",

						Contain: "Contain",
						Cover: "Cover",

						Misc: "Misc",
						ItemSpacing: "Item Spacing",
						ItemSpacingPlaceHolder: "Specify in pixels"
					},

					ControlPluginNames:
					{
						Text: "Text",
						Link: "Link",
						Menu: "Menu",
						Sharer: "Sharer",
						TableOfContents: "Table of Contents",
						YouTube: "YouTube",
						RTF: "Rich Text Format",
						RSS: "RSS",
						ArticleList: "Article List",
						Video: "Video",
						Carousel: "Carousel",
						Album: "Album"
					},

					TemplateControlPlugin:
					{
						Link:
						{
							Text: "Content",
							Tooltip: "Tooltip",
							Url: "Url",
							Target: "Target",

							TooltipPlaceHolder: "Enter a descriptive text",
							TextPlaceHolder: "Enter text",
							UrlPlaceHolder: "Enter a link to navigate to"
						},
						YouTube:
						{
							VideoId: "Video Id",
							VideoIdPlaceHolder: "Video Id",
							AutoPlay: "Autoplay",
							StartTime: "Start Time",
							LoopInfinitely: "Loop",
							ShowControls: "Show player controls",
							DisableKeyboard: "Disable keyboard shortcuts",
							HideYouTubeBrand: "Hide YouTube Brand",
							ShowInfo: "Show Video Info"
						},
						TableOfContents:
						{
							Source: "Source"
						},
						RSS:
						{
							Url: "Url",
							ShowTitle: "Title",
							ShowDescription: "Description",
							ShowStoryDescription: "Story Description",
							ShowStoryDate: "Story Date",
							MaxStories: "Max Stories"
						}
					}
				}
			});
	});