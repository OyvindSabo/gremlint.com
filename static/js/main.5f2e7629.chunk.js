(this["webpackJsonpgremlint.com"]=this["webpackJsonpgremlint.com"]||[]).push([[0],{31:function(n,e,t){},32:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t(1),i=t.n(a),r=t(19),s=t.n(r),c=(t(31),t(6)),u=t(2),l=(t(32),t(3)),h=t(13),d=t.n(h)()({"/":"Gremlint - Query formatter","/style-guide":"Gremlint - Style guide"}),b=t(4),p=t(25);function g(){var n=Object(u.a)(["\n  opacity: ",";\n"]);return g=function(){return n},n}var f=l.b.div(g(),(function(n){return n.$opacity})),v=function(n){var e=n.children,t=Object(p.a)(n,["children"]),i=Object(a.useState)(0),r=Object(c.a)(i,2),s=r[0],u=r[1];return Object(a.useEffect)((function(){setTimeout((function(){return u(1)}))}),[]),Object(o.jsx)(f,Object(b.a)(Object(b.a)({$opacity:s},t),{},{children:e}))},j="slategray",x="darkslategray",m="darkslategray",O="white";function w(){var n=Object(u.a)(["\n  text-decoration: none;\n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n  font-size: 15px;\n  color: ",";\n  border-bottom: ",";\n  &:hover {\n    color: ",";\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(u.a)(["\n  display: inline-block;\n  vertical-align: bottom;\n  padding: 10px;\n  box-sizing: border-box;\n  height: 40px;\n  width: 160px;\n"]);return y=function(){return n},n}var k=l.b.span(y()),L=l.b.a(w(),(function(n){return n.$isSelected?m:j}),(function(n){return n.$isSelected?"2px solid ".concat("yellowgreen"):"none"}),m),V=function(n){var e=n.isSelected,t=n.href,a=n.label;return Object(o.jsx)(k,{children:Object(o.jsx)(L,{href:t,$isSelected:e,children:a})})};function C(){var n=Object(u.a)(["\n  height: 40px;\n"]);return C=function(){return n},n}function E(){var n=Object(u.a)(["\n  width: min(800px, 100vw);\n  margin-left: calc(50vw - min(400px, 50vw));\n"]);return E=function(){return n},n}function S(){var n=Object(u.a)(["\n  background: ",";\n  box-shadow: "," 0 0 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n"]);return S=function(){return n},n}var B,$,A=l.b.div(S(),O,O),G=l.b.div(E()),I=l.b.div(C()),q=function(n){var e=n.matchedRoute;return Object(o.jsxs)("div",{children:[Object(o.jsx)(A,{children:Object(o.jsxs)(G,{children:[Object(o.jsx)(V,{isSelected:"/"===e,label:"Query formatter",href:"#/"}),Object(o.jsx)(V,{isSelected:"/style-guide"===e,label:"Style guide",href:"#/style-guide"})]})}),Object(o.jsx)(I,{})]})},z=function(n,e){window.dispatchEvent(new CustomEvent(n,{detail:e}))},T=t(24),N=function(n){var e=n.initialState,t=n.reducers,o=n.routines,a=e,i=[];Object.entries(t).forEach((function(n){var e=Object(c.a)(n,2),t=e[0],o=e[1];window.addEventListener(t,(function(n){var e=o(a,n.detail);a=e,i.forEach((function(n){return n(a)}))}))})),Object.entries(o).forEach((function(n){var e=Object(c.a)(n,2),t=e[0],o=e[1];window.addEventListener(t,(function(n){o(a,n.detail)}))}));return{state:a,addChangeListener:function(n){i=[].concat(Object(T.a)(i),[n])},removeChangeListener:function(n){i=i.filter((function(e){return e!==n}))}}},_={queryInput:"",queryOutput:"",shouldShowAdvancedOptions:!1,indentation:0,maxLineLength:72,shouldPlaceDotsAfterLineBreaks:!1},P=t(5),U=t(23),D="SET_QUERY_INPUT",M="FORMAT_QUERY",F="TOGGLE_SHOULD_SHOW_ADVANCED_OPTIONS",R="SET_INDENTATION",W="SET_MAX_LINE_LENGTH",H="SET_SHOULD_PLACE_DOTS_AFTER_LINE_BREAKS",Q=N({initialState:_,reducers:(B={},Object(P.a)(B,D,(function(n,e){return Object(b.a)(Object(b.a)({},n),{},{queryInput:e})})),Object(P.a)(B,M,(function(n){return Object(b.a)(Object(b.a)({},n),{},{queryOutput:Object(U.formatQuery)(n.queryInput,{indentation:n.indentation,maxLineLength:n.maxLineLength,shouldPlaceDotsAfterLineBreaks:n.shouldPlaceDotsAfterLineBreaks})})})),Object(P.a)(B,F,(function(n){return Object(b.a)(Object(b.a)({},n),{},{shouldShowAdvancedOptions:!n.shouldShowAdvancedOptions})})),Object(P.a)(B,R,(function(n,e){var t=parseInt(e);if(isNaN(t))return Object(b.a)({},n);if(t<0)return Object(b.a)(Object(b.a)({},n),{},{indentation:0});var o=n.maxLineLength;return t>o?Object(b.a)(Object(b.a)({},n),{},{indentation:o}):Object(b.a)(Object(b.a)({},n),{},{indentation:t})})),Object(P.a)(B,W,(function(n,e){var t=parseInt(e);if(isNaN(t))return Object(b.a)({},n);var o=n.indentation;return t<o?Object(b.a)(Object(b.a)({},n),{},{maxLineLength:o}):Object(b.a)(Object(b.a)({},n),{},{maxLineLength:t})})),Object(P.a)(B,H,(function(n,e){return Object(b.a)(Object(b.a)({},n),{},{shouldPlaceDotsAfterLineBreaks:e})})),B),routines:($={},Object(P.a)($,D,(function(){return z(M)})),Object(P.a)($,R,(function(){return z(M)})),Object(P.a)($,W,(function(){return z(M)})),Object(P.a)($,H,(function(){return z(M)})),$)});function Y(){var n=Object(u.a)(["\n  height: calc(100vh / 4);\n  border-radius: 5px;\n  font-family: 'Courier New', Courier, monospace;\n  background: rgba(0, 0, 0, 0.05);\n  outline: none;\n  font-size: 16px;\n  padding: 10px;\n  border: none;\n  resize: none;\n  width: 100%;\n  box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 10px -5px;\n  color: ",";\n  box-sizing: border-box;\n"]);return Y=function(){return n},n}function K(){var n=Object(u.a)(["\n  padding: 10px;\n"]);return K=function(){return n},n}var J=l.b.div(K()),X=l.b.textarea(Y(),x),Z=function(n){var e=n.onChange,t=n.value;return Object(o.jsx)(J,{children:Object(o.jsx)(X,{onChange:e,value:t,rows:25})})};function nn(){var n=Object(u.a)(["\n  height: 20px;\n  line-height: 20px;\n  font-size: 15px;\n  color: ",";\n  &: {\n    color: ",";\n  }\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  outline: none;\n"]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n  display: inline-block;\n  padding: 10px;\n  box-sizing: border-box;\n"]);return en=function(){return n},n}var tn=l.b.span(en()),on=l.b.button(nn(),j,m),an=function(n){var e=n.label,t=n.onClick;return Object(o.jsx)(tn,{children:Object(o.jsx)(on,{onClick:t,children:e})})};function rn(){var n=Object(u.a)(["\n  top: 0;\n  left: 0;\n  width: calc(10px + ","ch);\n  border-right: 1px solid ",";\n  position: absolute;\n  height: 100%;\n  pointer-events: none;\n"]);return rn=function(){return n},n}function sn(){var n=Object(u.a)(["\n  color: ",";\n  line-height: 20px;\n  font-size: 15px;\n"]);return sn=function(){return n},n}function cn(){var n=Object(u.a)(["\n  border-radius: 5px;\n  font-family: 'Courier New', Courier, monospace;\n  background: rgba(0, 0, 0, 0.05);\n  outline: none;\n  font-size: 15px;\n  padding: 10px;\n  border: none;\n  resize: none;\n  box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 10px -5px;\n  white-space: pre-wrap;\n  overflow: auto;\n  position: relative;\n"]);return cn=function(){return n},n}function un(){var n=Object(u.a)(["\n  padding: 10px;\n"]);return un=function(){return n},n}var ln=l.b.div(un()),hn=l.b.div(cn()),dn=l.b.div(sn(),j),bn=l.b.div(rn(),(function(n){return n.$maxLineLength}),"lightgray"),pn=function(n){var e=n.maxLineLength,t=n.children;return Object(o.jsx)(ln,{children:Object(o.jsxs)(hn,{children:[Object(o.jsx)(dn,{children:t}),e?Object(o.jsx)(bn,{$maxLineLength:e}):null]})})},gn=function(n){var e=Object(a.useState)(n.state),t=Object(c.a)(e,2),o=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(n){i(n)};return n.addChangeListener(e),function(){return n.removeChangeListener(e)}}),[n]),o};function fn(){var n=Object(u.a)(["\n  background: ",";\n  cursor: pointer;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: ",";\n  height: 40px;\n  width: 160px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  padding: 10px;\n  line-height: 20px;\n  font-size: 16px;\n  color: ",";\n  text-align: center;\n  border: 1px solid ",";\n  transition: 0.5s;\n"]);return fn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  cursor: pointer;\n  display: inline-block;\n  height: ",";\n  width: calc("," / 2);\n  box-sizing: border-box;\n  padding: 10px;\n  line-height: 20px;\n  font-size: 16px;\n  color: ",";\n  text-align: center;\n"]);return vn=function(){return n},n}function jn(){var n=Object(u.a)(["\n  display: inline-block;\n  height: ",";\n  width: ",";\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.05);\n  box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 10px -5px;\n  position: relative;\n"]);return jn=function(){return n},n}var xn=l.b.span(jn(),(function(n){return n.$height}),(function(n){return n.$width})),mn=l.b.span(vn(),(function(n){return n.$height}),(function(n){return n.$width}),j),On=l.b.span(fn(),O,(function(n){return n.$checked?"160px":"0"}),m,"lightgray"),wn=function(n){var e=n.width,t=void 0===e?"320px":e,a=n.height,i=void 0===a?"40px":a,r=n.checked,s=void 0!==r&&r,c=n.labels,u=void 0===c?{checked:"Checked",unchecked:"Unchecked"}:c,l=n.onChange;return Object(o.jsxs)(xn,{$width:t,$height:i,children:[Object(o.jsx)(mn,{$width:t,$height:i,onClick:function(){return l(!1)},children:u.unchecked}),Object(o.jsx)(mn,{$width:t,$height:i,onClick:function(){return l(!0)},children:u.checked}),Object(o.jsx)(On,{$checked:s,children:s?u.checked:u.unchecked})]})};function yn(){var n=Object(u.a)(["\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.05);\n  outline: none;\n  font-size: 16px;\n  padding: 10px;\n  border: none;\n  box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 10px -5px;\n  color: ",";\n  display: inline-block;\n  vertical-align: bottom;\n  box-sizing: border-box;\n  height: 40px;\n  width: 320px;\n"]);return yn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  height: 20px;\n  line-height: 20px;\n  font-size: 15px;\n  color: ",";\n"]);return kn=function(){return n},n}function Ln(){var n=Object(u.a)(["\n  padding: 10px;\n"]);return Ln=function(){return n},n}var Vn=l.b.div(Ln()),Cn=l.b.div(kn(),j),En=l.b.input(yn(),x),Sn=function(){var n=gn(Q);return Object(o.jsxs)("div",{children:[Object(o.jsxs)(Vn,{children:[Object(o.jsx)(Cn,{children:"Indentation"}),Object(o.jsx)(En,{type:"number",min:0,max:n.maxLineLength,value:n.indentation,onChange:function(n){var e=n.target;z(R,e.value)}})]}),Object(o.jsxs)(Vn,{children:[Object(o.jsx)(Cn,{children:"Max line length"}),Object(o.jsx)(En,{type:"number",min:n.indentation,value:n.maxLineLength,onChange:function(n){var e=n.target;z(W,e.value)}})]}),Object(o.jsxs)(Vn,{children:[Object(o.jsx)(Cn,{children:"Dot placement"}),Object(o.jsx)(wn,{height:"40px",width:"320px",checked:n.shouldPlaceDotsAfterLineBreaks,labels:{checked:"After line break",unchecked:"Before line break"},onChange:function(n){z(H,n)}})]})]})};function Bn(){var n=Object(u.a)(["\n  max-height: ",";\n  box-shadow: inset white 0 0 10px 0;\n  overflow: hidden;\n  transition: 0.5s;\n"]);return Bn=function(){return n},n}var $n=l.b.div(Bn(),(function(n){return n.$isExpanded?"240px":"0"})),An=function(){var n=gn(Q);return Object(o.jsxs)("div",{children:[Object(o.jsx)(Z,{value:n.queryInput,onChange:function(n){var e=n.target;return z(D,e.value)}}),Object(o.jsx)(an,{label:n.shouldShowAdvancedOptions?"Hide advanced options":"Show advanced options",onClick:function(){return z(F)}}),Object(o.jsx)($n,{$isExpanded:n.shouldShowAdvancedOptions,children:Object(o.jsx)(Sn,{})}),n.queryOutput?Object(o.jsx)(pn,{maxLineLength:n.maxLineLength,children:n.queryOutput}):null]})};function Gn(){var n=Object(u.a)(["\n  color: ",";\n  line-height: 20px;\n  font-size: 15px;\n"]);return Gn=function(){return n},n}function In(){var n=Object(u.a)(["\n      padding: 10px;\n    "]);return In=function(){return n},n}function qn(){var n=Object(u.a)(["\n  ","\n"]);return qn=function(){return n},n}var zn=l.b.div(qn(),(function(n){return n.$hasContent&&Object(l.a)(In())})),Tn=l.b.span(Gn(),j),Nn=function(n){var e=n.children;return Object(o.jsx)(zn,{$hasContent:Boolean(e),children:Object(o.jsx)(Tn,{children:e})})};function _n(){var n=Object(u.a)(["\n  color: ",";\n  line-height: 30px;\n  font-size: 25px;\n"]);return _n=function(){return n},n}function Pn(){var n=Object(u.a)(["\n      padding: 10px;\n    "]);return Pn=function(){return n},n}function Un(){var n=Object(u.a)(["\n  ","\n"]);return Un=function(){return n},n}var Dn=l.b.div(Un(),(function(n){return n.$hasContent&&Object(l.a)(Pn())})),Mn=l.b.div(_n(),j),Fn=function(n){var e=n.children;return Object(o.jsx)(Dn,{$hasContent:Boolean(e),children:Object(o.jsx)(Mn,{children:e})})};function Rn(){var n=Object(u.a)(["\n  height: 20px;\n"]);return Rn=function(){return n},n}var Wn=l.b.div(Rn()),Hn=function(n){var e=n.title,t=n.explanation,a=n.example;return Object(o.jsxs)("div",{children:[Object(o.jsx)(Fn,{children:e}),Object(o.jsx)(Nn,{children:t}),Object(o.jsx)(pn,{children:a}),Object(o.jsx)(Wn,{})]})},Qn=[{title:"Break long queries into multiple lines",explanation:"What is considered too long depends on your application.\nWhen breaking the query, not all parts of the traversal have to be broken up. First, divide the query into logical groups, based on which steps belong naturally together. For instance, every set of steps which end with an as()-step often belong together, as they together form a new essential step in the query.\n    \nIf anoymous traversals are passed as arguments to another step, like a filter()-step, and it's causing the line to be too long, first split the line at the commas. Only if the traversal arguments are still too long, consider splitting them further.",example:"// Good (80 characters max width)\ng.V().hasLabel('person').where(outE(\"created\").count().is(P.gte(2))).count()\n    \n// Good (50 characters max width)\ng.V().\n  hasLabel('person').\n  where(outE(\"created\").count().is(P.gte(2))).\n  count()\n    \n// Good (30 characters max width)\ng.V().\n  hasLabel('person').\n  where(\n    outE(\"created\").\n    count().\n    is(P.gte(2))).\n  count()"},{title:"Use soft tabs (spaces) for indentation",explanation:"This ensures that your code looks the same for anyone, regardless of their text editor settings.",example:"// Bad - indented using hard tabs\ng.V().\n  hasLabel('person').as('person').\n  properties('location').as('location').\n  select('person','location').\n    by('name').\n    by(valueMap())\n    \n// Good - indented using spaces\ng.V().\n\u2219\u2219hasLabel('person').as('person').\n\u2219\u2219properties('location').as('location').\n\u2219\u2219select('person','location').\n\u2219\u2219\u2219\u2219by('name').\n\u2219\u2219\u2219\u2219by(valueMap())"},{title:"Use two spaces for indentation",explanation:"Two spaces makes the intent of the indent clear, but does not waste too much space. Of course, more spaces are allowed when indenting from an already indented block of code.",example:"// Bad - Indented using four spaces\ng.V().\n    hasLabel('person').as('person').\n    properties('location').as('location').\n    select('person','location').\n        by('name').\n        by(valueMap())\n// Good - Indented using two spaces\ng.V().\n  hasLabel('person').as('person').\n  properties('location').as('location').\n  select('person','location').\n    by('name').\n    by(valueMap())"},{title:"Use indents wisely",explanation:"No newline should ever have the same indent as the line starting with the traversal source g.\nUse indents when the step in the new line is a modulator of a previous line.\nUse indents when the content in the new line is an argument of a previous step.\nIf multiple anonymous traversals are passed as arguments to a function, each newline which is not the first step of the traversal should be indented to make it more clear where the distinction between each argument goes. If this is the case, but the newline would already be indented because the step in the content in the new line is the argument of a previous step, there is no need to double-indent.\nDon't be tempted to add extra indentation to vertically align a step with a step in a previous line.",example:"// Bad - No newline should have the same indent as the line starting with the traversal source g\ng.V().\ngroup().\nby().\nby(bothE().count())\n// Bad - Modulators of a step on a previous line should be indented\ng.V().\n  group().\n  by().\n  by(bothE().count())\n// Good\ng.V().\n  group().\n    by().\n    by(bothE().count())\n// Bad - You have ignored the indent rules to achieve the temporary satisfaction of vertical alignment\ng.V().local(union(identity(),\n                  bothE().count()).\n            fold())\n// Good\ng.V().\n  local(\n    union(\n      identity(),\n      bothE().count()).\n    fold())\n// Bad - When multiple anonymous traversals are passed as arguments to a function, each newline which is not the first of line of the step should be indented to make it more clear where the distinction between each argument goes.\ng.V().\n  has('person','name','marko').\n  fold().\n  coalesce(\n    unfold(),\n    addV('person').\n    property('name','marko').\n    property('age',29))\n// Good - We make it clear that the coalesce step takes two traversals as arguments\ng.V().\n  has('person','name','marko').\n  fold().\n  coalesce(\n    unfold(),\n    addV('person').\n      property('name','marko').\n      property('age',29))"},{title:"Keep as()-steps at the end of each line",explanation:"The end of the line is a natural place to assign a label to a step. It's okay if the as()-step is in the middle of the line if there are multiple consecutive label assignments, or if the line is so short that a newline doesn't make sense. Maybe a better way to put it is to not start a line with an as()-step, unless you're using it inside a match()-step of course.",example:"// Bad\ng.V().\n  as('a').\n  out('created').\n  as('b').\n  select('a','b')\n// Good\ng.V().as('a').\n  out('created').as('b').\n  select('a','b')\n// Good\ng.V().as('a').out('created').as('b').select('a','b')"},{title:"Add linebreak after punctuation, not before",explanation:"While adding the linebreak before the punctuation looks good in most cases, it introduces alignment problems when not all lines start with a punctuation. You never know if the next line should be indented relative to the punctuation of the previous line or the method of the previous line. Switching between having the punctuation at the start or the end of the line depending on whether it works in a particular case requires much brainpower (which we don't have), so it's better to be consistent. Adding the punctuation before the linebreak also means that you can know if you have reached the end of the query without reading the next line.",example:"// Bad - Looks okay, though\ng.V().has('name','marko')\n     .out('knows')\n     .has('age', gt(29))\n     .values('name')\n// Good\ng.V().\n  has('name','marko').\n  out('knows').\n  has('age', gt(29)).\n  values('name')\n// Bad - Punctuation at the start of the line makes the transition from filter to select to count too smooth\ng.V()\n  .hasLabel(\"person\")\n  .group()\n    .by(values(\"name\", \"age\").fold())\n  .unfold()\n  .filter(\n    select(values)\n    .count(local)\n    .is(gt(1)))\n// Good - Keeping punctuation at the end of each line, more clearly shows the query structure\ng.V().\n  hasLabel(\"person\").\n  group().\n    by(values(\"name\", \"age\").fold()).\n  unfold().\n  filter(\n    select(values).\n    count(local).\n    is(gt(1)))"},{title:"Add linebreak and indentation for nested traversals which are long enough to span multiple lines",explanation:"",example:'// Bad - Not newlining the first argument of a function whose arguments span over multipe lines causes the arguments to not align.\ng.V().\n  hasLabel("person").\n  groupCount().\n    by(values("age").\n      choose(is(lt(28)),\n        constant("young"),\n        choose(is(lt(30)),\n          constant("old"),\n          constant("very old"))))\n// Bad - We talked about this in the indentation section, didn\'t we?\ng.V().\n  hasLabel("person").\n  groupCount().\n    by(values("age").\n       choose(is(lt(28)),\n              constant("young"),\n              choose(is(lt(30)),\n                     constant("old"),\n                     constant("very old"))))\n// Good\ng.V().\n  hasLabel("person").\n  groupCount().\n    by(\n      values("age").\n      choose(\n        is(lt(28)),\n        constant("young"),\n        choose(\n          is(lt(30)),\n          constant("old"),\n          constant("very old"))))'},{title:"Place all trailing parentheses on a single line instead of distinct lines",explanation:"Aligning the end parenthesis with the step to which the start parenthesis belongs might make it easier to check that the number of parentheses is correct, but looks ugly and wastes a lot of space.",example:'// Bad\ng.V().\n  hasLabel("person").\n  groupCount().\n    by(\n      values("age").\n      choose(\n        is(lt(28)),\n        constant("young"),\n        choose(\n          is(lt(30)),\n          constant("old"),\n          constant("very old")\n        )\n      )\n    )\n// Good\ng.V().\n  hasLabel("person").\n  groupCount().\n    by(\n      values("age").\n      choose(\n        is(lt(28)),\n        constant("young"),\n        choose(\n          is(lt(30)),\n          constant("old"),\n          constant("very old"))))'},{title:"Use // for single line comments. Place single line comments on a newline above the subject of the comment.",explanation:"",example:"// Bad\ng.V().\n  has('name','alice').out('bought'). // Find everything that Alice has bought\n  in('bought').dedup().values('name') // Find everyone who have bought some of the same things as Alice\n// Good\ng.V().\n  // Find everything that Alice has bought\n  has('name','alice').out('bought').\n  // Find everyone who have bought some of the same things as Alice\n  in('bought').dedup().values('name')"},{title:"Use single quotes for strings",explanation:"Use single quotes for literal string values. If the string contains double quotes or single quotes, surround the string with the type of quote which creates the fewest escaped characters.",example:"// Bad - Use single quotes where possible\ng.V().has(\"Movie\", \"name\", \"It's a wonderful life\")\n// Bad - Escaped single quotes are even worse than double quotes\ng.V().has('Movie', 'name', 'It\\'s a wonderful life')\n// Good\ng.V().has('Movie', 'name', \"It's a wonderful life\")"},{title:"Write idiomatic Gremlin code",explanation:"If there is a simpler way, do it the simpler way. Use the Gremlin methods for what they're worth.",example:"// Bad\ng.V().outE().inV()\n// Good\ng.V().out()\n// Bad\ng.V().\n  has('name', 'alice').\n  outE().hasLabel('bought').inV().\n  values('name')\n// Good\ng.V().\n  has('name','alice').\n  out('bought').\n  values('name')\n// Bad\ng.V().hasLabel('person').has('name', 'alice')\n// Good\ng.V().has('person', 'name', 'alice')"}],Yn=function(){return Object(o.jsx)("div",{children:Qn.map((function(n){var e=n.title,t=n.explanation,a=n.example;return Object(o.jsx)(Hn,{title:e,explanation:t,example:a},e)}))})},Kn=t.p+"static/media/gremlint-loading-logo-colored.7e095463.png",Jn=t.p+"static/media/gremlint-loading-logo-grayscale.a64db4a4.png";function Xn(){var n=Object(u.a)(["\n  opacity: ",";\n  transition: 0.25s;\n  height: 50vmin;\n  width: 50vmin;\n  display: block;\n  margin: auto;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(u.a)(["\n  overflow: hidden;\n  height: ","vmin;\n  width: 100%;\n  position: absolute;\n  bottom: calc(50vh - 25vmin);\n"]);return Zn=function(){return n},n}function ne(){var n=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  bottom: calc(50vh - 25vmin);\n"]);return ne=function(){return n},n}function ee(){var n=Object(u.a)(["\n  position: fixed;\n  background: ",";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n"]);return ee=function(){return n},n}var te=l.b.div(ee(),O),oe=l.b.div(ne()),ae=l.b.div(Zn(),(function(n){return n.$loadingCompletion/2})),ie=l.b.img(Xn(),(function(n){return n.$opacity})),re=function(n){var e=n.onLoadingComplete,t=Object(a.useState)(0),i=Object(c.a)(t,2),r=i[0],s=i[1],u=Object(a.useState)(!1),l=Object(c.a)(u,2),h=l[0],d=l[1],b=Object(a.useState)(!1),p=Object(c.a)(b,2),g=p[0],f=p[1];return Object(a.useEffect)((function(){setTimeout((function(){r<100?h&&g&&s(r+1):setTimeout(e,250)}),0===r?250:10)}),[r,h,g,e]),Object(o.jsxs)(te,{children:[Object(o.jsx)(oe,{children:Object(o.jsx)(ie,{src:Jn,$opacity:g&&100!==r?1:0,onLoad:function(){return f(!0)}})}),Object(o.jsx)(ae,{$loadingCompletion:r,children:Object(o.jsx)(ie,{src:Kn,$opacity:100!==r?1:0,onLoad:function(){return d(!0)}})})]})};function se(){var n=Object(u.a)(["\n  width: min(800px, 100vw);\n  margin-left: calc(50vw - min(400px, 50vw));\n"]);return se=function(){return n},n}var ce=l.b.div(se()),ue=function(){var n=Object(h.useRouter)(d).matchedRoute,e=Object(a.useState)(!1),t=Object(c.a)(e,2),i=t[0],r=t[1];return i?Object(o.jsx)(v,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(q,{matchedRoute:n}),Object(o.jsx)("div",{children:Object(o.jsx)(ce,{children:"/"===n?Object(o.jsx)(An,{}):"/style-guide"===n?Object(o.jsx)(Yn,{}):null})})]})}):Object(o.jsx)(re,{onLoadingComplete:function(){return r(!0)}})},le=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(e){var t=e.getCLS,o=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),o(n),a(n),i(n),r(n)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(ue,{})}),document.getElementById("root")),le()}},[[54,1,2]]]);
//# sourceMappingURL=main.5f2e7629.chunk.js.map