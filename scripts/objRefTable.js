const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Plugins.Camera3D,
		C3.Plugins.Keyboard,
		C3.Plugins.Shape3D,
		C3.Behaviors.MoveTo,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Mouse,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.ZElevation,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Text.Acts.SetEffectEnabled,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.SetPosition,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Camera3D.Exps.CameraXRotation,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Shape3D.Cnds.OnCollision,
		C3.Plugins.Shape3D.Cnds.CompareZElevation,
		C3.Plugins.Shape3D.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnMovement,
		C3.Plugins.Camera3D.Acts.RotateCamera,
		C3.Plugins.Mouse.Exps.MovementX,
		C3.Plugins.Mouse.Exps.MovementY,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Plugins.Mouse.Acts.RequestPointerLock,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Shape3D.Acts.SetZElevation,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Plugins.Camera3D.Exps.CameraYRotation,
		C3.Plugins.Camera3D.Exps.LookZ,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.MoveTo.Acts.SetStopOnSolids,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Shape3D.Cnds.OnDestroyed,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.FadeVolume,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Mouse.Acts.ReleasePointerLock,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Mouse.Cnds.OnPointerLocked,
		C3.Plugins.Mouse.Cnds.OnPointerUnlocked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{LavaFloor: 0},
	{"8Direction": 0},
	{Player: 0},
	{"3DCamera": 0},
	{Keyboard: 0},
	{HandGun: 0},
	{aim: 0},
	{MoveTo: 0},
	{Demon: 0},
	{Solid: 0},
	{DemonSprt: 0},
	{Background: 0},
	{Bullet: 0},
	{PlayerBullet: 0},
	{Mouse: 0},
	{spawner: 0},
	{tembok: 0},
	{kalah: 0},
	{reset: 0},
	{bg: 0},
	{gdagdi: 0},
	{skor: 0},
	{Text: 0},
	{hp: 0},
	{Text2: 0},
	{moveforward: 0},
	{moveleft: 0},
	{moveback: 0},
	{moveright: 0},
	{dor: 0},
	{Touch: 0},
	{"3DShape": 0},
	{menang: 0},
	{back: 0},
	{start: 0},
	{Sensitivity: 0}
];

self.InstanceType = {
	LavaFloor: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	_3DCamera: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	HandGun: class extends self.ISpriteInstance {},
	aim: class extends self.ISpriteInstance {},
	Demon: class extends self.I3DShapeInstance {},
	DemonSprt: class extends self.ISpriteInstance {},
	Background: class extends self.I3DShapeInstance {},
	PlayerBullet: class extends self.I3DShapeInstance {},
	Mouse: class extends self.IInstance {},
	spawner: class extends self.ISpriteInstance {},
	tembok: class extends self.I3DShapeInstance {},
	kalah: class extends self.ISpriteInstance {},
	reset: class extends self.IButtonInstance {},
	bg: class extends self.ISpriteInstance {},
	gdagdi: class extends self.IInstance {},
	skor: class extends self.ITextInstance {},
	Text: class extends self.ITextInstance {},
	hp: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	moveforward: class extends self.ISpriteInstance {},
	moveleft: class extends self.ISpriteInstance {},
	moveback: class extends self.ISpriteInstance {},
	moveright: class extends self.ISpriteInstance {},
	dor: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	_3DShape: class extends self.I3DShapeInstance {},
	menang: class extends self.ISpriteInstance {},
	back: class extends self.ISpriteInstance {},
	start: class extends self.ITextInstance {}
}