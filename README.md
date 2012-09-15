ApplyCss
========
Form that allows you to parse css and apply it to html <br>
Try it here: http://sfate.github.com/ApplyCss/

## WTF?
Applies css style for each element and remove identifiers(ids, classes, etc.)

## Gimme some e.g.
Before:
```css
input#hide {
  display:none;
}
```
```html
<input id="hide">
```
After:
```html
<input style="display:none">
```

## Whyyyyy?? (ノಠ益ಠ)ノ彡┻━┻
Because some sites allows you to post html code with styled elements but doesn't allow to use css blocks.<br>
+<br>
If you're use vim you can export your code to html with `:editor` style by `:TOhtml` command.<br>
And then paste it to your http://wp.com blog as highlighted block of code. But before that.. you need to apply css style for each element manually.

## Applause.. anyone?
Anyway.. thx for your time.