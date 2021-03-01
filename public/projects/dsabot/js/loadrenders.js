function clickDefTab() {document.getElementById("default").click()}

function render() {
  var template = [
    '{{#group}}',
      '<div id="{{name}}" class="tabcontent">',
        '{{#command}}',
          '<div class="command">',
            '<span id="{{name}}-summary" onclick="toggle(\'{{name}}-details\');" class="clickable">',
              '<p><b>{{name}}{{format}}</b> - {{sum}}</p>',
            '</span>',
            '<span id="{{name}}-details" style="display:none;">',
              '<hr>',
              '<p>Format: <code>;{{name}}{{format}}</code> or <code>@DSA Bot#0607 {{name}}{{format}}</code></p>',
              '{{#details}}',
                '<p>{{{detail}}}</p>',
              '{{/details}}',
              '{{#picname}}',
                '<img src="/projects/dsabot/imgs/{{picname}}.png" alt="Example Usage" class="fit"/>',
              '{{/picname}}',
              '{{^picname}}',
                '<img src="/projects/dsabot/imgs/{{name}}.png" alt="Example Usage" class="fit"/>',
              '{{/picname}}',
            '</span>',
          '</div>',
          '<br/>',
        '{{/command}}',
      '</div>',
    '{{/group}}'
  ].join("\n");
  $.getJSON("/projects/dsabot/commands.json",data=>document.getElementById('cmds').innerHTML=Mustache.render(template,data));
  setTimeout(clickDefTab,500);
}